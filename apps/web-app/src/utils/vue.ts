import { inject, InjectionKey } from 'vue';

export const defineHookInject = <Hook extends () => any, K extends InjectionKey<ReturnType<Hook>>>(
  injectionKey: K,
  hook: Hook,
) => (): ReturnType<Hook> => {
    const injectData = inject<ReturnType<Hook>>(injectionKey);
    const isInjectable = !!injectData;

    return isInjectable
      ? injectData
      : hook();
  };
