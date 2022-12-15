<template>
  <transition-group
    tag="div"
    :class="$style.toastLayer"
    name="toast"
    mode="out-in"
  >
    <Toast
      v-for="(toast, toastIndex) in toasts"
      :key="toast.id"
      :class="$style.toast"
      :style="{
        top: `${(TOAST_HEIGHT * toastIndex) + (TOAST_GAP * (toastIndex + 1))}px`,
        right: `${TOAST_GAP}px`,
        height: `${TOAST_HEIGHT}px`,
      }"
      :toast="toast"
      @close="hideToast(toast.id)"
    />
  </transition-group>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useToastStore } from '@/stores/toasts';
import { Toast as ToastType } from '@/types/toast';
import Toast from '@/components/core/toast/Toast.vue';

const toastStore = useToastStore();

const TOAST_HEIGHT = 86;
const TOAST_GAP = 20;

const toasts = computed(() => toastStore.list);
const hideToast = (toastId: ToastType['id']) => {
  toastStore.removeToast(toastId);
};
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.toastLayer {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;

  pointer-events: none;
  * {
    pointer-events: all;
  }
}

.toast {
  position: absolute;
  transition: .20s top, .20s opacity;
  background-color: white;
}
</style>

<style lang="scss">
.toast {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.25s, transform 0.25s;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scale(0.97);
  }
}
</style>
