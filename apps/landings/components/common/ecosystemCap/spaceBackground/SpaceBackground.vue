<template>
  <div
    :data-space-backgrond-id="id"
    :class="$style.background"
    @data-ready="adjustSvgSize"
  >
    <SpaceSvg />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue';
import { addCssProperty, queryChildSelector, querySelector } from '@terminal/uikit/utils/dom';
import { compose } from '@terminal/common/utils/fp';
import { toCssPercentValue } from '@terminal/uikit/utils/style';
import { divide } from '@terminal/common/utils/number';
import { useId } from '@terminal/uikit/hooks/useId';
import SpaceSvg from './assets/space.svg';

const id = useId();

const adjustSvgSize = () => {
  const container = querySelector(`[data-space-backgrond-id="${id.value}"]`) as HTMLElement;

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

onMounted(() => {
  window.addEventListener('resize', adjustSvgSize);
});

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
