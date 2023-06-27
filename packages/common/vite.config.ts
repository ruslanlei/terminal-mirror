// @ts-nocheck
import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: (id) => (
        /^lodash\//.test(id)
        || ['collect.js', 'numeral', 'uuid', 'rambda', 'dayjs'].includes(id)
      ),
      output: {
        preserveModules: true,
        entryFileNames: () => '[name].js',
        format: 'es',
        globals: {
          'collect.js': 'collect.js',
          lodash: 'lodash',
          numeral: 'numeral',
          uuid: 'uuid',
        },
      },
    },
    sourcemap: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    commonjs(),
    dts({
      root: path.resolve(__dirname, './'),
      entryRoot: path.resolve(__dirname, './src'),
      outputDir: path.resolve(__dirname, './'),
      tsConfigFilePath: './tsconfig.json',
      beforeWriteFile: (filePath) =>
        /* FIXME: For some reason when */
        /*  root folder already has d.ts files */
        /*  plugin makes copy at upper level. */
        /*  This callback checks if plugin write in */
        /*  exact target directory. */
        filePath.includes('@terminal/packages/common')
      ,
    }),
  ],
});
