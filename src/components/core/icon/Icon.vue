<template>
  <div
    :class="$style.icon"
    :style="{
      ...(size ? {
        width: `${size}px`,
        height: `${size}px`,
      } : {})
    }"
  >
    <svg :class="$style.source">
      <use :xlink:href="`#icon-${icon}`" />
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { IconProps } from './index';

const props = withDefaults(
  defineProps<IconProps>(),
  {
    size: 24,
  },
);

defineExpose(props);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.icon {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100%;
  pointer-events: none;
  position: relative;
}

.source {
  fill: currentColor;
  stroke: currentColor;
  position: relative;
  display: block;
  flex-grow: 1;
  width: 100%;
}
</style>
