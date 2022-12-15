import { computed, watch } from 'vue';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

import { i18n, AppLocale } from '@/i18n';

export interface LocaleOptions {
  value: AppLocale,
  label: string,
}

export const useI18nStore = defineStore('i18n', () => {
  const locale = useStorage<AppLocale>('locale', 'en');
  watch(locale, () => {
    i18n.global.locale.value = locale.value;
  }, { immediate: true });

  const locales = computed<LocaleOptions[]>(() => [
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
