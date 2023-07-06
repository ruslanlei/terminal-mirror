import { computed, watch } from 'vue';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import {
  i18n,
  AppLocale,
  checkIfLanguageIsAvailable,
} from '@/i18n';
import { useRouter } from 'vue-router';
import { getUserLanguage } from '@/utils/navigator';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

export interface LocaleOption {
  value: AppLocale,
  label: string,
}

const getAppLanguage = () => {
  const userLanguage = getUserLanguage();
  const isUserLanguageAvailable = checkIfLanguageIsAvailable(userLanguage);

  return isUserLanguageAvailable
    ? userLanguage
    : 'en';
};

export const useI18nStore = defineStore('i18n', () => {
  const router = useRouter();

  const locale = useStorage<AppLocale>('locale', getAppLanguage());
  const setLocaleToLibs = (locale: AppLocale) => {
    i18n.global.locale.value = locale;
    dayjs.locale(locale);
  };

  watch(locale, () => {
    setLocaleToLibs(locale.value);
  }, { immediate: true });

  router.beforeEach((to, from, next) => {
    const forceLocale = to.meta.forceLocale as AppLocale;

    setLocaleToLibs(forceLocale || locale.value);

    next();
  });

  const locales = computed<LocaleOption[]>(() => [
    {
      value: 'en',
      label: 'ENG',
    },
    {
      value: 'ru',
      label: 'РУС',
    },
  ]);

  return {
    locale,
    locales,
  };
});
