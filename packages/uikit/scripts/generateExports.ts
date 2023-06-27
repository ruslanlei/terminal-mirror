import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.resolve(__dirname, '../src');
const outFile = path.join(baseDir, 'index.ts');

const getExports = (dirPath: string) => {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  let content = '';
  entries.forEach((entry) => {
    const entryPath = path.join(dirPath, entry.name);

    const {
      dir,
      base,
    } = path.parse(entryPath);

    const isIndexFile = base === 'index.ts';

    const isRootIndex = dir.endsWith('src') && isIndexFile;

    if (isRootIndex) return;

    // If entry is a directory, recursively process
    if (entry.isDirectory()) {
      content += getExports(entryPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (ext === '.ts' || ext === '.vue') {
        const baseName = path.basename(entry.name, ext);
        let relativeFilePath = path.relative(baseDir, entryPath);
        relativeFilePath = relativeFilePath.split(path.sep).join('/');

        let relativeDirPath = path.relative(baseDir, dir);
        relativeDirPath = relativeDirPath.split(path.sep).join('/');

        if (ext === '.vue') {
          content += `export { default as Ui${baseName} } from '@/${relativeFilePath}';\n`;
        } else if (isIndexFile && ext === '.ts') {
          content += `export * from '@/${relativeDirPath}';\n`;
        } else if (ext === '.ts') {
          content += `export * from '@/${relativeFilePath}';\n`;
        }
      }
    }
  });

  return content;
};

// Start processing from the base directory
const content = getExports(baseDir);
fs.writeFileSync(outFile, content);

console.log('Exports for @terminal/uikit have been generated');
