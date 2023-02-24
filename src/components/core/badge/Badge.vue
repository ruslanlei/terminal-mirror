<template>
  <div
    :class="[
      $style.badge,
      $style[state],
      $style[size]
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { BadgeProps } from './index';

defineProps<BadgeProps>();
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.badge {
  transition: 150ms background-color;
  display: flex;
  align-items: center;
  justify-content: center;
}

.default {
  background-color: rgb(var(--color-background-3));
}

.background4 {
  background-color: rgb(var(--color-background-4));
}

.success {
  background-color: rgb(var(--color-success));
}

.danger {
  background-color: rgb(var(--color-danger));
}

.sm {
  padding: 3px 5px;
  border-radius: 5px;
  @include title5;
  font-weight: 600;
}

.xs {
  padding: 2px 5px;
  border-radius: 5px;
  @include title7;
  font-weight: 600;
}
</style>
