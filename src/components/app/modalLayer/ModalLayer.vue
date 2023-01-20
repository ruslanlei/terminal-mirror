<template>
  <div
    :class="{
      [$style.modalLayer]: true,
      [$style.active]: isAnyActiveModals
    }"
  >
    <div
      :class="[$style.backdrop, !isAnyActiveModals && $style.hidden]"
      @click="closeModal(displayModal.id)"
    />
    <div :class="$style.modal">
      <component
        :is="displayModal.component"
        v-if="isAnyActiveModals"
        v-bind="displayModal.payload"
        :class="$style.modal"
        @close="closeModal(displayModal.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useModalStore, Modal, modalType } from '@/stores/modals';
import ConfirmModal from '@/components/app/confirmModal/ConfirmModal.vue';
import SuccessSignUpModal from '@/components/app/successSignUpModal/SuccessSignUpModal.vue';

const modalsStore = useModalStore();

const modalsMap = {
  [modalType.CONFIRM]: ConfirmModal,
  [modalType.SUCCESS_SIGN_UP]: SuccessSignUpModal,
};

const modals = computed(() => modalsStore.list.map((modal) => ({
  ...modal,
  component: modalsMap[modal.type],
})));
const isAnyActiveModals = computed(() => !!modals.value.length);

const displayModal = computed(() => modals.value?.[modals.value.length - 1] || null);

const closeModal = (modalId: Modal['id']) => {
  modalsStore.removeModal(modalId);
};
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.modalLayer {
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  pointer-events: none;
  @include scrollbarDefault();
  & > * {
    pointer-events: all;
  }
  &.active {
    pointer-events: all;
    .layer {
      background-color: rgba(0,0,0, 0.2);
    }
  }
}

.modal {
  width: 100%;
  max-width: 600px;
  position: relative;
  z-index: 2;
}

.backdrop {
  cursor: pointer;
  position: absolute;
  inset: 0;
  background-color: rgba(var(--color-background-1), 0.4);
  transition: opacity 200ms;
  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
}
</style>
