import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import pagesPlugin from 'vite-plugin-pages';
import svgLoader from 'vite-svg-loader';
import VueTypeImports from 'vite-plugin-vue-type-imports';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    // eslintPlugin(),
    svgLoader({
      svgo: false,
    }),
    pagesPlugin(),
    VueTypeImports(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@root': path.resolve(__dirname, ''),
    },
  },
});
