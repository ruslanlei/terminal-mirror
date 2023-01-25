import { useI18nStore } from '@/stores/i18n';

export const humanizeDate = (date: Date | string) => {
  const i18nStore = useI18nStore();

  const normalizedDate: Date = date instanceof Date
    ? date
    : new Date(date);

  return new Intl.DateTimeFormat(i18nStore.locale).format(normalizedDate);
};
