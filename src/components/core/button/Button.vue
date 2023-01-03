<template>
  <button
    tabindex="0"
    :class="[
      $style.button,
      $style[state],
      $style[size],
      isDisabled && $style.disabled,
    ]"
  >
    <div :class="[$style.loaderCap, !isLoading && $style.hidden]">
      <Loader />
    </div>
    <div :class="[$style.inner, isLoading && $style.hidden]">
      <slot />
    </div>
  </button>
</template>

<script setup lang="ts">
import Loader from '@/components/core/loader/Loader.vue';
import { ButtonProps } from './index';

withDefaults(
  defineProps<ButtonProps>(),
  {
    state: 'primary',
    isDisabled: false,
    isLoading: false,
  },
);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.button {
  width: 100%;
  display: block;
  position: relative;
  transition: background-color 200ms, transform 200ms;
  &:not(.disabled) {
    cursor: pointer;
  }
  &:focus, &:hover {
    transform: scale(1.01);
  }
  &:active {
    transform: scale(0.99);
  }
}

.loaderCap {
  opacity: 1;
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .15s opacity;
}

.inner {
  transition: .15s opacity;
}

.hidden {
  opacity: 0;
  pointer-events: none;
}

.primary {
  color: rgba(var(--color-accent-1));
  background: var(--color-main-gradient);
}

.colored {
  color: rgba(var(--color-accent-1));
  background-color: rgb(var(--color-primary-1));
}

.secondary1 {
  color: rgba(var(--color-accent-1));
  background-color: rgb(var(--color-background-1));
}

.secondary2 {
  color: rgba(var(--color-accent-1));
  background-color: rgb(var(--color-background-2));
}

.lg {
  padding: 15px;
  border-radius: 5px;
  @include text;
  font-weight: 600;
}

.md {
  padding: 8px;
  border-radius: 5px;
  @include title4;
  font-weight: 600;
}

.sm {
  padding: 3.5px;
  border-radius: 5px;
  @include title5;
  font-weight: 500;
}
</style>
