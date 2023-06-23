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
      plugins: [
        commonjs(),
      ],
    },
    sourcemap: false,
  },
  plugins: [
    dts(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
