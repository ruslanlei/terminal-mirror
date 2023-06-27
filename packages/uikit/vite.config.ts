// @ts-nocheck
import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';
import commonjs from '@rollup/plugin-commonjs';
import vue from '@vitejs/plugin-vue';
import vueTypeImportsPlugin from 'vite-plugin-vue-type-imports';
import svgLoader from 'vite-svg-loader';
import { bundleRawScss } from './plugins/bundleRawScss';

export default defineConfig({
  define: {
    __VUE_PROD_DEVTOOLS__: false,
  },
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
        bundleRawScss(
          path.resolve(__dirname, './src/assets/styles'),
          path.resolve(__dirname, './styles'),
        ),
      ],
    },
    sourcemap: false,
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    commonjs(),
    svgLoader({
      svgo: false,
    }),
    vueTypeImportsPlugin(),
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
