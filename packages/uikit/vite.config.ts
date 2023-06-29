// @ts-nocheck
import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';
import commonjs from '@rollup/plugin-commonjs';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import { globSync } from 'glob';
import { getRollupExternals } from '@terminal/utils';
import { bundleRawScss } from './plugins/bundleRawScss';
import pkg from './package.json' assert { type: 'json' };

export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      input: globSync('./src/**/index.ts'),
      output: {
        preserveModules: true,
        compact: true,
        entryFileNames: () => '[name].js',
        format: 'es',
        globals: {
          vue: 'vue',
        },
        // assetFileNames: 'assets/[name].[ext]',
      },
      external: getRollupExternals(pkg),
    },
    sourcemap: true,
  },
  resolve: {
    dedupe: ['vue'],
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
    /*
      INFO:
        6/28/2023 at the moment build.cssCodeSplit divide
        css to separate files but doesn't import them automatically
        by component in library mode, so you have to manually
        import related CSS in every place where you use your
        library component. This plugin adds code that
        automatically inject css into the html head when
        component mounted.
     */
    cssInjectedByJsPlugin({
      relativeCSSInjection: true,
    }),
    bundleRawScss(
      path.resolve(__dirname, './src/assets/styles'),
      path.resolve(__dirname, './styles'),
    ),
  ],
});
