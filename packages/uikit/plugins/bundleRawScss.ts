import fs from 'fs';
import path from 'path';
import { PluginOption } from 'vite';

export const bundleRawScss = (
  scssDir: string,
  outDir: string,
): PluginOption => ({
  name: 'copy-raw-scss',
  writeBundle() {
    fs.readdirSync(scssDir).forEach((file) => {
      if (path.extname(file) === '.scss') {
        const destination = path.join(outDir, file);
        fs.mkdirSync(path.dirname(destination), { recursive: true });
        fs.copyFileSync(path.join(scssDir, file), destination);
      }
    });
  },
});
