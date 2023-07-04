<template>
  <div
    :class="{
      [$style.modalLayer]: true,
      [$style.active]: isAnyActiveModals
    }"
    @click.self="closeModal(displayModal.id)"
  >
    <div :class="$style.modal">
      <transition
        name="modalTransition"
        mode="out-in"
      >
        <component
          :is="displayModal.component"
          v-if="isAnyActiveModals"
          v-bind="displayModal.payload"
          :class="$style.modal"
          @close="closeModal(displayModal.id)"
        />
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import { useModalStore, Modal, modalType } from '@/stores/modals';

const ChangePlayerDateModal = defineAsyncComponent(() => import('@/components/app/changePlayerDateModal/ChangePlayerDateModal.vue'));
const DeleteOrderModal = defineAsyncComponent(() => import('@/components/app/deleteOrderModal/DeleteOrderModal.vue'));
const SuccessSignUpModal = defineAsyncComponent(() => import('@/components/app/successSignUpModal/SuccessSignUpModal.vue'));
const ConfirmModal = defineAsyncComponent(() => import('@/components/app/confirmModal/ConfirmModal.vue'));

const modalsStore = useModalStore();

const modalsMap = {
  [modalType.CONFIRM]: ConfirmModal,
  [modalType.SUCCESS_SIGN_UP]: SuccessSignUpModal,
  [modalType.DELETE_ORDER]: DeleteOrderModal,
  [modalType.CHANGE_PLAYER_DATE_ALERT]: ChangePlayerDateModal,
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
@import "@terminal/uikit/assets/styles/utils";

.modalLayer {
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  pointer-events: none;
  @include scrollbarDefault();
  transition: background-color 300ms, backdrop-filter 300ms;
  &.active {
    pointer-events: all;
    background-color: rgba(var(--color-background-1), 0.4);
    backdrop-filter: blur(20px);
  }
}

.modal {
  width: 100%;
  max-width: 600px;
  position: relative;
  z-index: 2;
}
</style>

<style lang="scss">
.modalTransition {
  &-enter-active,
  &-leave-active {
    transition: opacity 160ms;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
</style>
