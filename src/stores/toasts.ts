import { ref } from 'vue';
import { defineStore } from 'pinia';
import { Toast, toastType } from '@/types/toast';
import { uuid } from '@/utils/uuid';

export const useToastStore = defineStore('toast', () => {
  const list = ref<Toast[]>([]);

  const showToast = (toast: Omit<Toast, 'id'>) => {
    list.value.push({
      id: uuid(),
      ...toast,
    });
  };

  const showSuccess = (toast: Omit<Toast, 'id' | 'type'>) => {
    list.value.push({
      id: uuid(),
      type: toastType.SUCCESS,
      ...toast,
    });
  };

  const showDanger = (toast: Omit<Toast, 'id' | 'type'>) => {
    list.value.push({
      id: uuid(),
      type: toastType.DANGER,
      ...toast,
    });
  };

  const removeToast = (toastId: Toast['id']) => {
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
