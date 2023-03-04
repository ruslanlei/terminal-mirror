<template>
  <div
    ref="lottieContainer"
  />
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import lottie, { AnimationItem } from 'lottie-web';
import { LottieProps } from './index';

const props = defineProps<LottieProps>();

const lottieContainer = ref();

const animationInstance = ref<AnimationItem>();

const initAnimation = () => {
  animationInstance.value = lottie.loadAnimation({
    container: lottieContainer.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: props.path,
  });
};

onMounted(initAnimation);

const destroyAnimation = () => {
  animationInstance.value?.destroy();
};
onBeforeUnmount(destroyAnimation);
</script>
