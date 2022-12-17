<template>
  <div :class="$style.toastLayer">
    <div
      v-for="toast in toasts"
      :id="`toast-${toast.id}`"
      :key="toast.id"
      :class="$style.toastWrapper"
    >
      <Toast
        :class="$style.toast"
        :toast="toast"
        :smooth-appearance="true"
        @close="hideToast(toast.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
} from 'vue';
import { useToastStore } from '@/stores/toasts';
import Toast from '@/components/core/toast/Toast.vue';
import { playAnimation } from '@/utils/animation';
import { IToast } from '@/components/core/toast';

const toastStore = useToastStore();

const HIDE_ANIMATION_DURATION = 420;

const toasts = computed(() => toastStore.list);
const hideToast = async (toastId: IToast['id']) => {
  const toastWrapper = document.getElementById(`toast-${toastId}`);

  if (!toastWrapper || !toastWrapper?.firstChild) return;

  const toast = toastWrapper.firstChild as HTMLElement;

  const toastRect = toast.getBoundingClientRect();

  toastWrapper.style.width = `${toastRect.width}px`;
  toastWrapper.style.height = `${toastRect.height}px`;

  toast.style.position = 'absolute';

  playAnimation({
    targets: toast,
    scale: [1, 0.5],
    translateY: [0, 50],
    easing: 'easeInOutQuart',
    duration: HIDE_ANIMATION_DURATION,
  });

  await playAnimation({
    targets: toastWrapper,
    opacity: 0,
    height: 0,
    marginBottom: 0,
    easing: 'easeInOutQuart',
    duration: HIDE_ANIMATION_DURATION - 100,
  });

  toastStore.removeToast(toastId);
};
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.toastLayer {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
  padding: 30px;

  pointer-events: none;
  * {
    pointer-events: all;
  }
}

.toastWrapper {
  position: relative;
  width: 100%;
  max-width: 420px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 16px;
}

.toast {
  width: 100%;
}
</style>
