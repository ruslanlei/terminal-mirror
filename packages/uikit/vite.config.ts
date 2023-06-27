// @ts-nocheck
import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';
import commonjs from '@rollup/plugin-commonjs';
import vue from '@vitejs/plugin-vue';
import multi from '@rollup/plugin-multi-entry';
// import vueTypeImportsPlugin from 'vite-plugin-vue-type-imports';
import svgLoader from 'vite-svg-loader';
import { bundleRawScss } from './plugins/bundleRawScss';

export default defineConfig({
  // define: {
  //   __VUE_PROD_DEVTOOLS__: false,
  // },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: (id) => (
        ['vue'].includes(id)
      ),
      // input: 'src/**/index.ts',
      output: {
        preserveModules: true,
        compact: true,
        entryFileNames: () => '[name].js',
        format: 'es',
        globals: {
          vue: 'vue',
        },
      },
      plugins: [
        // multi({
        //   entryFileName: 'index.js',
        // }), TODO: this was close to solution
      ],
    },
    sourcemap: false,
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
    // vueTypeImportsPlugin(),
    dts({
      root: path.resolve(__dirname, './'),
      entryRoot: path.resolve(__dirname, './src'),
      outputDir: path.resolve(__dirname, './'),
      tsConfigFilePath: './tsconfig.json',
      cleanVueFileName: false,
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
