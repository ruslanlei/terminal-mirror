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

.accent3 {
  background-color: rgb(var(--color-accent-3));
}

.horizontal {
  min-width: 100%;
  height: 1px;
}

.vertical {
  min-height: 100%;
  width: 1px;
}
</style>
