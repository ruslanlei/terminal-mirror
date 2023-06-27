// @ts-nocheck
import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';
import commonjs from '@rollup/plugin-commonjs';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import { globSync } from 'glob';
import { bundleRawScss } from './plugins/bundleRawScss';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: (id) => (
        ['vue'].includes(id)
      ),
      input: globSync('./src/**/index.ts'),
      output: {
        preserveModules: true,
        compact: true,
        entryFileNames: () => '[name].js',
        format: 'es',
        globals: {
          vue: 'vue',
        },
      },
    },
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    commonjs(),
    svgLoader({
      svgo: false,
    }),
    dts({
      root: path.resolve(__dirname, './'),
      entryRoot: path.resolve(__dirname, './src'),
      outputDir: path.resolve(__dirname, './'),
      tsConfigFilePath: './tsconfig.json',
      cleanVueFileName: true,
      beforeWriteFile: (filePath) => {
        /* FIXME: For some reason plugin */
        /*  places d.ts files on level above. */
        /*  Probably because its beta. Fix it later. */
        if (!filePath.includes('@terminal/packages/uikit')) {
          return {
            filePath: filePath.replace(
              '@terminal/packages',
              '@terminal/packages/uikit',
            ),
          };
        }
      },
    }),
    bundleRawScss(
      path.resolve(__dirname, './src/assets/styles'),
      path.resolve(__dirname, './styles'),
    ),
  ],
});
