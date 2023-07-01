// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'nuxt-svgo',
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    vueI18n: './i18n/config.ts',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
  pinia: {
    autoImports: [
      'defineStore',
    ],
  },
  svgo: {
    svgo: false,
    defaultImport: 'skipsvgo',
  },
  runtimeConfig: {
    public: {
      projectName: process.env.NUXT_APP_PROJECT_NAME || 'Terminal',
    },
  },
});
