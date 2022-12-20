<template>
  <div
    :class="[
      $style.divider,
      $style[type],
      $style[state],
    ]"
  />
</template>

<script setup lang="ts">
import { DividerProps } from './index';

const props = withDefaults(
  defineProps<DividerProps>(),
  {
    type: 'vertical',
    state: 'default',
  },
);
</script>

<style lang="scss" module>
.divider {
  border-radius: 2px;
}

.default {
  background-color: rgb(var(--color-background-3));
}

.vertical {
  min-height: 100%;
  width: 1px;
}
</style>
