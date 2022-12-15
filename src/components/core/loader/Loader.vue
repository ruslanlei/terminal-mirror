<template>
  <LoaderIconDots
    :class="[
      $style.loader,
      $style[size],
    ]"
  />
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import LoaderIconDots from '@/assets/icons/loader.svg';

type sizes = 'md';

defineProps({
  size: {
    type: String as PropType<sizes>,
    default: 'md',
  },
});
</script>

<style lang="scss" module>
.loader {
  fill: currentColor;
  stroke: currentColor;
  &.md {
    width: 36px !important;
    height: 18px !important;
  }
}
</style>
