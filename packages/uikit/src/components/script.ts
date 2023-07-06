import { promises as fs } from 'fs';
import path from 'path';

// Define the folder that contains your components
const componentsFolder = './src/components';

// Use fs.readdir to get a promise of the contents of the components folder
const componentDirs = (await fs.readdir(componentsFolder, { withFileTypes: true }))
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

// Iterate through each component subdirectory
for (const componentDir of componentDirs) {
  const indexPath = path.join(componentsFolder, componentDir, 'index.ts');

  // Capitalize the first letter of componentDir
  const componentName = componentDir.charAt(0).toUpperCase() + componentDir.slice(1);
  const exportStatement = `export { default as Ui${componentName} } from './${componentName}.vue';\n`;

  // Check if the index.ts file exists
  try {
    // If it exists, read its current contents
    const currentContent = await fs.readFile(indexPath, 'utf8');
    // Then write the new export statement followed by the current content
    await fs.writeFile(indexPath, exportStatement + currentContent, 'utf8');
  } catch {
    // If it doesn't exist, simply write the new export statement to a new file
    await fs.writeFile(indexPath, exportStatement, 'utf8');
  }
}
