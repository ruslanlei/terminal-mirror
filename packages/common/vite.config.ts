// @ts-nocheck
import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';
import commonjs from '@rollup/plugin-commonjs';
import { getRollupExternals } from '@terminal/utils/rollup/getExternals';
import pkg from './package.json' assert { type: 'json' };

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
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
      external: getRollupExternals(pkg),
    },
    sourcemap: true,
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
      beforeWriteFile: (filePath) => {
        /* FIXME: For some reason plugin */
        /*  places d.ts files on level above. */
        /*  Probably because its beta. Fix it later. */
        if (!filePath.includes('@terminal/packages/common')) {
          return {
            filePath: filePath.replace(
              '@terminal/packages',
              '@terminal/packages/common',
            ),
          };
        }
      },
    }),
  ],
});
