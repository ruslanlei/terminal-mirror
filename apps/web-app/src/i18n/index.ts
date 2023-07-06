import { createI18n } from 'vue-i18n';
import en from '@/i18n/locales/en.json';
import ru from '@/i18n/locales/ru.json';

const messages = {
  en,
  ru,
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
