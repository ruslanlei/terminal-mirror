import { globSync } from 'glob';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

async function createIndexFiles(folder) {
  const files = globSync(`${folder}/**/*`, { nodir: true });

  let exportsStr = '';
  const dirDict = {};

  files.forEach((file) => {
    const relativePath = path.relative(folder, file);
    const dirPath = path.dirname(relativePath);
    const fileName = path.basename(relativePath, '.ts');

    if (dirPath === '.') {
      return;
    }

    if (!dirDict[dirPath]) {
      dirDict[dirPath] = [];
    }

    if (dirDict[dirPath].includes(fileName)) {
      return;
    }

    dirDict[dirPath].push(fileName);
    const exportPath = `./${dirPath}/${fileName}`;

    if (dirPath.includes('/')) {
      const componentName = path.basename(dirPath).replace(/\b\w/g, (c) => c.toUpperCase());
      exportsStr += `export { default as Ui${componentName} } from '@/src/${exportPath}';\n`;
    } else {
      exportsStr += `export * from './${exportPath}';\n`;
    }
  });

  try {
    await fs.writeFile(`${folder}/index.ts`, exportsStr);
    console.log(`Index file created for ${folder}`);
  } catch (err) {
    console.error(err);
  }
}

export const generateExports = (directory, subfolders) => {
  // Create index.ts in src directory
  createIndexFiles(path.resolve(directory, 'src'));

  // Create index.ts in each of the given subdirectories
  subfolders.forEach((subfolder) => {
    createIndexFiles(path.resolve(directory, `src/${subfolder}`));
  });
};

generateExports(
  path.dirname(fileURLToPath(import.meta.url)),
  ['folder1', 'folder2', 'folder3'],
);
