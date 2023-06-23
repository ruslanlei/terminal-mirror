// @ts-nocheck
import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    disabled: false,
  },
  build: {
    commonjsOptions: {
      include: [],
    },
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      preset: 'safest',
      propertyReadSideEffects: true,
      external: ['collect.js', 'lodash', 'numeral', 'uuid'],
      // input: {},
      output: {
        globals: {
          'collect.js': 'collect.js',
          lodash: 'lodash',
          numeral: 'numeral',
          uuid: 'uuid',
        },
      },
    },
    sourcemap: true,
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
