<template>
  <Lottie
    :data-space-backgrond-id="id"
    :class="$style.background"
    :path="SpaceLottie"
    @data-ready="adjustSvgSize"
  />
</template>

<script setup lang="ts">
import { onBeforeUnmount } from 'vue';
import Lottie from '@/components/core/lottie/Lottie.vue';
import { uuid } from '@/utils/uuid';
import { addCssProperty, queryChildSelector, querySelector } from '@/utils/dom';
import { compose } from '@/utils/fp';
import { toCssPercentValue } from '@/utils/style';
import { divide } from '@/utils/number';
import SpaceLottie from './assets/space.json?url';

const id = uuid();

const adjustSvgSize = () => {
  const container = querySelector(`[data-space-backgrond-id="${id}"]`) as HTMLElement;

  if (!container) return;

  const svg = queryChildSelector('svg', container) as HTMLElement;

  if (!svg) return;

  const containerAspectRatio = divide(container.clientWidth, container.clientHeight);
  const svgAspectRatio = divide(
    svg.viewBox.baseVal.width as number,
    svg.viewBox.baseVal.height as number,
  );

  (containerAspectRatio > svgAspectRatio
    ? compose(
      addCssProperty(['height', 'auto']),
      addCssProperty(['width', toCssPercentValue(100)]),
    )
    : compose(
      addCssProperty(['width', 'auto']),
      addCssProperty(['height', toCssPercentValue(100)]),
    ))(svg);
};
window.addEventListener('resize', adjustSvgSize);

onBeforeUnmount(() => {
  window.removeEventListener('resize', adjustSvgSize);
});
</script>

<style lang="scss" module>
.background {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    min-width: 100%;
    min-height: 100%;
  }
}
</style>
