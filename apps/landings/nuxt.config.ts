// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'nuxt-svgo',
  ],
  i18n: {
    vueI18n: './i18n/config.ts',
  },
  pinia: {
    autoImports: [
      'defineStore',
    ],
  },
  svgo: {
    defaultImport: 'skipsvgo',
  },
});
