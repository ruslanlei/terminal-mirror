import { useI18n, useNuxtApp, computed } from '#imports';

export const useLocale = () => {
  const { locale } = useI18n();

  const nuxtApp = useNuxtApp();

  const setLocale = (
    locale: string,
  ) => {
    console.log('locale', locale);

    nuxtApp.$i18n.locale.value = locale;
  };

  const locales = computed(() => (
    nuxtApp.$i18n.locales.value
  ));

  return {
    locale,
    locales,
    setLocale,
  };
};
