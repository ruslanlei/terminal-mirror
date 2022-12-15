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
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ButtonProps } from './index';

withDefaults(
  defineProps<ButtonProps>(),
  {
    state: 'primary',
    disabled: false,
  },
);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.button {
  width: 100%;
  display: block;
  &:not(.disabled) {
    cursor: pointer;
  }
}

.primary {
  color: rgba(var(--color-accent-1));
  background: var(--color-main-gradient);
}

.lg {
  padding: 15px;
  border-radius: 5px;
  @include text;
  font-weight: 600;
}
</style>
