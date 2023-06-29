<template>
  <div
    :class="[
      $style.badge,
      $style[size],
      ...computedState,
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useComputedState } from '../../hooks/useComputedState';
import { BadgeProps } from './index';

const props = defineProps<BadgeProps>();

const computedState = useComputedState(props);
</script>

<style lang="scss" module>
@import "../../assets/styles/utils";

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

.background5 {
  background-color: rgb(var(--color-background-5));
}

.accent1Background {
  background-color: rgb(var(--color-accent-1));
}

.success {
  background-color: rgb(var(--color-success));
}

.danger {
  background-color: rgb(var(--color-danger));
}

.danger2 {
  background-color: rgb(var(--color-danger-2));
}

.primary1Background {
  background-color: rgb(var(--color-primary-1));
}

.skeleton {
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: 10;
    inset: 0;
    background-color: inherit;
  }
}

.md {
  padding: 7px 10px;
  border-radius: 10px;
  @include h3;
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
