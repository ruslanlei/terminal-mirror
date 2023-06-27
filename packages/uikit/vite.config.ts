// @ts-nocheck
import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';
import commonjs from '@rollup/plugin-commonjs';
import { bundleRawScss } from './plugins/bundleRawScss';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: (id) => (
        /^lodash\//.test(id)
        || ['vue'].includes(id)
      ),
      output: {
        preserveModules: true,
        entryFileNames: () => '[name].js',
        format: 'es',
        globals: {
          vue: 'vue',
        },
      },
      plugins: [
        commonjs(),
        bundleRawScss(
          path.resolve(__dirname, './src/assets/styles'),
          path.resolve(__dirname, './styles'),
        ),
      ],
    },
    sourcemap: false,
  },
  plugins: [
    dts({
      entryRoot: 'src',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
