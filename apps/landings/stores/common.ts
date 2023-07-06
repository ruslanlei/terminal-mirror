import { ref } from 'vue';
import { defineStore } from 'pinia';
import { theme } from '@terminal/uikit/enums/theme';

export const useCommonStore = defineStore('common', () => {
  // app theme
  const theme = ref<theme>('purpleCat' as theme.PURPLE_CAT);
  const setTheme = (themeName: theme) => {
    theme.value = themeName;
  };

  // app height
  const vh = ref(0);
  const setVh = (amount: number) => {
    vh.value = amount;
  };

  return {
    theme,
    setTheme,
    vh,
    setVh,
  };
});
