import { ref } from 'vue';
import { defineStore } from 'pinia';
import { uuid } from '@/utils/uuid';
import { IToast } from '@/components/core/toast';

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

  const removeToast = (toastId: IToast['id']) => {
    const toastIndex = list.value.findIndex((element) => element.id === toastId);
    list.value.splice(toastIndex, 1);
  };

  return {
    list,
    showToast,
    showSuccess,
    showDanger,
    removeToast,
  };
});
