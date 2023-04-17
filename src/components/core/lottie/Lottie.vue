<template>
  <div ref="lottieContainer" />
</template>

<script setup lang="ts">
import {
  onBeforeUnmount, onMounted, ref, toRefs, watch,
} from 'vue';
import lottie, { AnimationItem } from 'lottie-web';
import { useEnvironmentObserver } from '@/hooks/useEnvironmentObserver';
import { useIntersectionObserver } from '@vueuse/core';
import { LottieEmits, LottieProps } from './index';

const props = defineProps<LottieProps>();
const {
  path,
} = toRefs(props);

const emit = defineEmits<LottieEmits>();

const lottieContainer = ref();

const animationInstance = ref<AnimationItem>();

const initAnimation = () => {
  animationInstance.value = lottie.loadAnimation({
    container: lottieContainer.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: path.value,
  });

  animationInstance.value?.addEventListener('data_ready', () => {
    emit('dataReady');
  });

  animationInstance.value?.pause();
};

onMounted(initAnimation);

const destroyAnimation = () => {
  animationInstance.value?.destroy();
};
onBeforeUnmount(destroyAnimation);

watch(path, () => {
  destroyAnimation();
  initAnimation();
});

const timer = ref();

const {
  setListeners,
  removeListeners,
} = useEnvironmentObserver(lottieContainer, () => {
  clearTimeout(timer.value);
  animationInstance.value?.pause();
  timer.value = setTimeout(() => {
    animationInstance.value?.play();
  }, 300);
}, true);

onMounted(setListeners);
onBeforeUnmount(removeListeners);

const { stop } = useIntersectionObserver(
  lottieContainer,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      animationInstance.value?.play();
    } else {
      animationInstance.value?.pause();
    }
  },
);

onBeforeUnmount(stop);
</script>
