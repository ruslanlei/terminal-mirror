import { ref } from 'vue';
import { defineStore } from 'pinia';
import { uuid } from '@/utils/uuid';
import { Modal, modalType } from '@/types/modal';

export const useModalStore = defineStore('modal', () => {
  const list = ref<Modal[]>([]);

  const showModal = (modal: Omit<Modal, 'id'>) => {
    list.value.push({
      id: uuid(),
      ...modal,
    });
  };

  const removeModal = (modalId: Modal['id']) => {
    const modalIndex = list.value.findIndex((element) => element.id === modalId);
    list.value.splice(modalIndex, 1);
  };

  const awaitUserConfirm = ({
    label = '',
    text = '',
  } = {}) => new Promise((resolve) => {
    showModal({
      type: modalType.CONFIRM,
      payload: {
        label,
        text,
        onSubmit: () => resolve(true),
        onCancel: () => resolve(false),
      },
    });
  });

  return {
    list,
    showModal,
    removeModal,
    awaitUserConfirm,
  };
});
