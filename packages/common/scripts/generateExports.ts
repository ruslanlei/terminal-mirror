// @ts-ignore
import fs from 'fs';
// @ts-ignore
import path from 'node:path';
import { fileURLToPath } from 'url';

// @ts-ignore
// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(__filename);

const baseDir = path.resolve(__dirname, '../src');
const outDir = path.resolve(__dirname, '../src');
const outFile = path.join(outDir, 'index.ts');

const include = ['utils'];

// Function to create index.ts for a given directory
const createIndexFile = (dir: string) => {
  const files = fs.readdirSync(dir);

  const content = files.reduce((content: string, file: any) => {
    const isTargetFile = path.extname(file) === '.ts' && !file.endsWith('index.ts');
    if (!isTargetFile) return content;

    return `${content}export * from './${path.basename(file, '.ts')}';\n`;
  }, '');

  fs.writeFileSync(path.join(dir, 'index.ts'), content);
};

// Create index.ts in each subdirectory
include.forEach((dirName) => {
  createIndexFile(path.join(baseDir, dirName));
});

const getDirectories = (source: string) => fs
  .readdirSync(source, { withFileTypes: true })
  .filter((dirent: any) => dirent.isDirectory())
  .map((dirent: any) => dirent.name);

fs.writeFileSync(
  outFile,
  `${getDirectories(baseDir)
    .map((dir: string) => `export * from './${dir}';`)
    .join('\n')}\n`,
);

console.log('Exports for @terminal/common have been generated');
