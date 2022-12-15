<template>
  <div
    :class="{
      [$style.root]: true,
      [$style.active]: isActiveModals
    }"
  >
    <div
      :class="$style.module"
    >
      <component
        :is="displayModal.component"
        v-if="isActiveModals"
        v-bind="displayModal.payload"
        :class="$style.module"
        @close="closeModal(displayModal.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useModalStore } from '@/stores/modals';
import { Modal, modalType } from '@/types/modal';
import ConfirmModal from '@/components/app/confirmModal/ConfirmModal.vue';

const modalsStore = useModalStore();

const modalsMap = {
  [modalType.CONFIRM]: ConfirmModal,
};

const modals = computed(() => modalsStore.list.map((modal) => ({
  ...modal,
  component: modalsMap[modal.type],
})));
const isActiveModals = computed(() => !!modals.value.length);

const displayModal = computed(() => modals.value?.[modals.value.length - 1] || null);

const closeModal = (modalId: Modal['id']) => {
  modalsStore.removeModal(modalId);
};
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  pointer-events: none;
  * {
    pointer-events: all;
  }
  &.active {
    pointer-events: all;
    .layer {
      background-color: rgba(0,0,0, 0.2);
    }
  }
}

.layer {
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  @include useCustomScrollbar();
}

.module {
  width: 100%;
}
</style>
