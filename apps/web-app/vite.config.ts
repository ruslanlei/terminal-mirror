// @ts-nocheck
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import pagesPlugin from 'vite-plugin-pages';
import svgLoader from 'vite-svg-loader';
import vueTypeImportsPlugin from 'vite-plugin-vue-type-imports';
import compressionPlugin from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
import commonjs from '@rollup/plugin-commonjs';

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
    sourcemap: true,
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    commonjs(),
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
      filename: 'bundleVisualizer.html',
    }),
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      '@': path.resolve(__dirname, 'src'),
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
