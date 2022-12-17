export const getUserLanguage = () => navigator?.userLanguage
  || navigator.languages?.[0]
  || navigator.language
  || navigator?.browserLanguage
  || navigator?.systemLanguage
  || 'en';
