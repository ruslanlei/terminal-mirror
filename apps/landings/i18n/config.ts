import commonEn from '@terminal/common/locales/en.json';
import commonRu from '@terminal/common/locales/ru.json';

import en from './locales/en.json';
import ru from './locales/ru.json';

const messages = {
  en: {
    ...commonEn,
    ...JSON.parse(JSON.stringify(en)),
  },
  ru: {
    ...commonRu,
    ...JSON.parse(JSON.stringify(ru)),
  },
};

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages,
}));
