import { ref, watch } from 'vue';
import { useStorage } from '@vueuse/core';

export const useAuthToken = () => {
  const token = ref<string | undefined>('');

  const globalToken = useStorage('token', '');
  const sessionToken = useStorage('token', '', sessionStorage);

  watch(
    [globalToken, sessionToken],
    ([global, session]) => {
      if (global) {
        token.value = global;
      } else if (session) {
        token.value = session;
      } else {
        token.value = undefined;
      }
    },
    { immediate: true },
  );

  const setToken = (newToken: string | null, isSessionStorage = false) => {
    if (isSessionStorage) {
      sessionToken.value = newToken;
      return;
    }
    globalToken.value = newToken;
  };
  const removeToken = () => {
    globalToken.value = null;
    sessionToken.value = null;
  };

  return {
    token,
    setToken,
    removeToken,
  };
};
