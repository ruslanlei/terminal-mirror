<template>
  <div :class="$style.toastLayer">
    <div
      v-for="toast in toasts"
      :id="`toast-${toast.id}`"
      :key="toast.id"
      :class="$style.toastWrapper"
    >
      <UiToast
        :class="$style.toast"
        :toast="toast"
        :smooth-appearance="true"
        @close="animateAndRemoveToast(toast.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { UiToast, IToast } from '../toast';
import { playAnimation } from '../../utils/animation';
import { useLocalValue } from '../../hooks';
import { ToastLayerEmits, ToastLayerProps } from './index';

const props = defineProps<ToastLayerProps>();
const emit = defineEmits<ToastLayerEmits>();

const toasts = useLocalValue<IToast[]>(props, emit, 'toasts');

const HIDE_ANIMATION_DURATION = 420;

const removeToast = (
  toastId: IToast['id'],
) => {
  const toastIndex = toasts.value.findIndex((element) => element.id === toastId);
  toasts.value.splice(toastIndex, 1);
};

const animateAndRemoveToast = async (toastId: IToast['id']) => {
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
    translateY: [0, -50],
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

  removeToast(toastId);
};
</script>

<style lang="scss" module>
@import "../../assets/styles/utils";

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
