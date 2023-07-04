import commonEn from '@terminal/common/locales/en.json';
import commonRu from '@terminal/common/locales/ru.json';

import en from './locales/en';
import ru from './locales/ru';

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

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages,
}));
