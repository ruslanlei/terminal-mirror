<template>
  <div :class="$style.skeletonContainer">
    <slot />
  </div>
</template>

<script setup lang="ts">
import anime from 'animejs';
import { playAnimation } from '@/utils/animation';
import { useCssModules } from '@/hooks/useCssModules';
import {
  onBeforeUnmount,
  onMounted,
  provide,
  nextTick,
} from 'vue';
import { uuid } from '@/utils/uuid';
import { SkeletonContainerIdInjectionKey } from '@/components/core/skeletonContainer/index';
import { skeletonSelector } from '@/components/core/skeleton';

const { $style } = useCssModules();

const id = uuid();
provide(SkeletonContainerIdInjectionKey, id);

onMounted(() => {
  nextTick(() => {
    playAnimation({
      targets: skeletonSelector(id),
      opacity: [1, 0.55, 1],
      scale: [1, 0.99, 1],
      loop: true,
      delay: anime.stagger(160, { from: 'first' }),
      easing: 'easeInOutSine',
      duration: 850,
    });
  });
});

onBeforeUnmount(() => {
  anime.remove(skeletonSelector(id));
});
</script>

<style lang="scss" module>
.skeletonContainer {
  display: block;
}
</style>
