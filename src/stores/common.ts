import { ref, watch } from 'vue';
import { defineStore } from 'pinia';

import { theme } from '@/types/theme';

export const useCommonStore = defineStore('common', () => {
  // app theme
  const activeTheme = ref<theme>('dark' as theme.DARK);
  watch(activeTheme, (value) => {
    document.body.removeAttribute('class');
    document.body.classList.add(value);
  }, { immediate: true });
  const setTheme = (themeName: theme) => {
    activeTheme.value = themeName;
  };

  // app height
  const vh = ref(0);
  const setVh = (amount: number) => {
    vh.value = amount;
  };

  return {
    activeTheme,
    setTheme,
    vh,
    setVh,
  };
});
