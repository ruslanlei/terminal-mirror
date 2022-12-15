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
  &:not(.disabled) {
    cursor: pointer;
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

.lg {
  padding: 15px;
  border-radius: 5px;
  @include text;
  font-weight: 600;
}
</style>
