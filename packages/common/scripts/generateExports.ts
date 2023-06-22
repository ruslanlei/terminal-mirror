// @ts-ignore
import fs from 'fs';
// @ts-ignore
import path from 'path';

const componentsDir = path.resolve(__dirname, '../utils');

fs.readdir(componentsDir, (err: any, files: any) => {
  if (err) throw err;

  files.forEach((file: any) => {
    const fullPath = path.join(componentsDir, file);

    fs.stat(fullPath, (err: any, stats: any) => {
      if (err) throw err;

      if (stats.isDirectory()) {
        fs.readdir(fullPath, (err: any, subFiles: any) => {
          if (err) throw err;

          const indexPath = path.join(fullPath, 'index.ts');
          const currentContent = fs.existsSync(indexPath) ? fs.readFileSync(indexPath, 'utf8') : '';
          const currentLines = currentContent.split('\n');

          const subExports = subFiles
            .filter((file: any) => file.endsWith('.vue')) // Ignore non-Vue files
            .map((file: any) => {
              const componentName = path.basename(file, '.vue');
              const exportName = `Ui${componentName}`;
              return `export { default as ${exportName} } from './${componentName}.vue'\n;`;
            })
            // Ignore duplicates
            .filter((exportStatement: any) => !currentLines.includes(exportStatement))
            .join('\n');

          const newContent = `${subExports}\n${currentContent}`;

          fs.writeFile(indexPath, newContent, (err: any) => {
            if (err) throw err;
            console.log(`index.ts has been updated in ${file}`);
          });
        });
      }
    });
  });

  const exports = files
    .filter((file: any) => !file.endsWith('index.ts')) // Ignore index.ts file
    .map((file: any) => `export * from './${file}';`)
    .join('\n');

  const indexPath = path.join(componentsDir, 'index.ts');

  fs.writeFile(indexPath, exports, (err: any) => {
    if (err) throw err;
    console.log('index.ts has been updated in components');
  });
});
