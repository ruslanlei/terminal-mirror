import { useI18n as useI18nNative } from 'vue-i18n';

export const useI18n = (prefix?: string) => {
  const i18nHook = useI18nNative();

  function tWithPrefix(path: string, ...args: any[]) {
    // @ts-ignore
    return i18nHook.t(`${prefix ? `${prefix}.` : ''}${path}`, ...args);
  }

  function tmWithPrefix<T = []>(path: string, ...args: any[]): T {
    // @ts-ignore
    return <T>i18nHook.tm(`${prefix ? `${prefix}.` : ''}${path}`, ...args);
  }

  return {
    ...i18nHook,
    t: tWithPrefix,
    tm: tmWithPrefix,
  };
};
