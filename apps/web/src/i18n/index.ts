import { createI18n } from 'vue-i18n';
import commonEn from '@terminal/common/locales/en.json';
import commonRu from '@terminal/common/locales/ru.json';
import en from '@/i18n/locales/en.json';
import ru from '@/i18n/locales/ru.json';

const messages = {
  en: {
    ...commonEn,
    ...en,
  },
  ru: {
    ...commonRu,
    ...ru,
  },
};
export type AppLocale = keyof typeof messages;
export const availableLanguages = Object.keys(messages);
export const checkIfLanguageIsAvailable = (
  language: string,
) => availableLanguages.includes(language);

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
});
