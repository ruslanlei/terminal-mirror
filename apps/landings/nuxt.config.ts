// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'nuxt-svgo',
  ],
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      {
        code: 'ru',
        name: 'РУС',
      },
      {
        code: 'en',
        name: 'ENG',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    vueI18n: './i18n/config.ts',
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
      signInLink: process.env.NUXT_APP_SIGN_IN_LINK || 'localhost:5137/auth/sign-in',
      signUpLink: process.env.NUXT_APP_SIGN_UP_LINK || 'localhost:5137/auth/sign-in',
      appLink: process.env.NUXT_APP_WEB_APP_LINK || 'localhost:5137',
    },
  },
});
