import { useI18n, useNuxtApp, computed } from '#imports';

export const useLocale = () => {
  const { locale } = useI18n();

  const nuxtApp = useNuxtApp();

  const setLocale = (
    locale: string,
  ) => {
    nuxtApp.$i18n.setLocale(locale);
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
