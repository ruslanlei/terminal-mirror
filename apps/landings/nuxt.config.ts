// https://nuxt.com/docs/api/configuration/nuxt-config
import * as process from 'process';

export default defineNuxtConfig({
  // FIXME:
  //  ssr disabled in development because i18n breaks dev build.
  //  problem actual at 03/07/2023, probably because at the moment
  //  nuxt-i18n still beta. Issue:
  //  https://github.com/nuxt-modules/i18n/issues/2000
  ssr: process.env.NODE_ENV === 'production',

  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
          hid: 'icon',
        },
      ],
    },
  },

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
      courseName: process.env.NUXT_APP_COURSE_NAME || 'Course',
      signInLink: process.env.NUXT_APP_SIGN_IN_LINK || 'localhost:5137/auth/sign-in',
      signUpLink: process.env.NUXT_APP_SIGN_UP_LINK || 'localhost:5137/auth/sign-in',
      appLink: process.env.NUXT_APP_WEB_APP_LINK || 'localhost:5137',
      discordUsername: process.env.NUXT_APP_DISCORD_USERNAME || '',
    },
  },
});
