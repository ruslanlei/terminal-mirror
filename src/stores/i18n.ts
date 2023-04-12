import { computed, watch } from 'vue';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import {
  i18n,
  AppLocale,
  checkIfLanguageIsAvailable,
} from '@/i18n';
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
  const locale = useStorage<AppLocale>('locale', getAppLanguage());
  watch(locale, () => {
    i18n.global.locale.value = locale.value;
    dayjs.locale(locale.value);
  }, { immediate: true });

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
