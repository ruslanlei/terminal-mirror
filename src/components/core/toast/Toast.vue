<template>
  <div
    ref="toast"
    :class="[
      $style.toast,
      $style[toastData.type],
    ]"
  >
    <div :class="$style.text">
      {{ toastData.text }}
    </div>
    <button
      :class="$style.closeButton"
      @click="closeToast"
    >
      <Icon icon="cross" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, toRefs } from 'vue';
import { playAnimation } from '@/utils/animation';
import Icon from '@/components/core/icon/Icon.vue';
import { ToastEmits, ToastProps } from './index';

const props = defineProps<ToastProps>();
const emit = defineEmits<ToastEmits>();

const toast = ref();

const { toast: toastData } = toRefs(props);
const duration = toastData?.value.duration;

const closeToast = () => {
  emit('close');
};

if (duration) {
  setTimeout(() => {
    closeToast();
  }, duration);
}

onMounted(() => {
  if (props.smoothAppearance) {
    playAnimation({
      targets: toast.value,
      translateY: [-40, 0],
      opacity: [0, 1],
      duration: 750,
    });
  }
});
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.toast {
  padding: 20px 22px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 25px;
  color: rgb(var(--color-accent-1));
  min-height: 50px;
  background-color: rgba(var(--color-background-2));
}

.success {
}

.danger {
}

.text {
  @include title2;
}

.closeButton {
  margin-left: auto;
  color: rgb(var(--color-accent-1));
  position: relative;
  cursor: pointer;
}
</style>
