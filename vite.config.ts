// @ts-nocheck
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import pagesPlugin from 'vite-plugin-pages';
import svgLoader from 'vite-svg-loader';
import vueTypeImportsPlugin from 'vite-plugin-vue-type-imports';
import compressionPlugin from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    disabled: false,
  },
  build: {
    commonjsOptions: {
      include: [],
    },
    rollupOptions: {
      preset: 'safest',
      propertyReadSideEffects: true,
    },
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    // eslintPlugin(),
    svgLoader({
      svgo: false,
    }),
    pagesPlugin({
      importMode: 'async',
    }),
    vueTypeImportsPlugin(),
    compressionPlugin(),
    visualizer({
      gzipSize: true,
      template: 'network',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@root': path.resolve(__dirname, ''),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://macro-freedom.com',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
