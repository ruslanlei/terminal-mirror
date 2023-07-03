import { ref } from 'vue';
import { defineStore } from 'pinia';
import { IToast } from '@terminal/uikit/components/toast';
import { uuid } from '@terminal/common/utils/uuid';

const DEFAULT_TIMEOUT = 3000;

export const useToastStore = defineStore('toast', () => {
  const list = ref<IToast[]>([]);

  const showToast = (toast: Omit<IToast, 'id'>) => {
    list.value.push({
      id: uuid(),
      duration: DEFAULT_TIMEOUT,
      ...toast,
    });
  };

  const showSuccess = (toast: Omit<IToast, 'id' | 'type'>) => {
    list.value.push({
      id: uuid(),
      type: 'success',
      duration: DEFAULT_TIMEOUT,
      ...toast,
    });
  };

  const showDanger = (toast: Omit<IToast, 'id' | 'type'>) => {
    list.value.push({
      id: uuid(),
      type: 'danger',
      duration: DEFAULT_TIMEOUT,
      ...toast,
    });
  };

  return {
    list,
    showToast,
    showSuccess,
    showDanger,
  };
});
