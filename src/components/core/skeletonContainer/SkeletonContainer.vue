<template>
  <div :class="$style.skeletonContainer">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { playAnimation } from '@/utils/animation';
import { useCssModules } from '@/hooks/useCssModules';
import { skeletonClass } from '@/components/core/skeleton';
import { onMounted } from 'vue';
import anime from 'animejs';

const { $style } = useCssModules();

onMounted(() => {
  playAnimation({
    targets: `.${$style.skeletonContainer} .${skeletonClass.DEFAULT}`,
    opacity: [1, 0.4, 1],
    loop: true,
    delay: anime.stagger(160, { from: 'first' }),
    easing: 'easeInOutSine',
    duration: 850,
  });
});
</script>

<style lang="scss" module>
.skeletonContainer {
  display: block;
}
</style>
