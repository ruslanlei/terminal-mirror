<template>
  <div
    :class="[
      $style.card,
      $style[state],
    ]"
  >
    <div
      v-if="'head' in $slots"
      :class="$style.head"
    >
      <slot name="head" />
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { CardProps } from './index';

withDefaults(
  defineProps<CardProps>(),
  {
    state: 'background2',
  },
);
</script>

<style lang="scss" module>
.card {
  border-radius: 10px;
}
.head {}

.background2 {
  background-color: rgb(var(--color-background-2));
}

.background3 {
  background-color: rgb(var(--color-background-3));
}
</style>
