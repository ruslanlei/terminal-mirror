<template>
  <button
    tabindex="0"
    :class="[
      $style.button,
      isDisabled && $style.disabled,
      ...computedState,
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
import { useComputedState } from '@/hooks/useComputedState';
import { ButtonProps } from './index';

const props = withDefaults(
  defineProps<ButtonProps>(),
  {
    state: 'gradientColor',
    isDisabled: false,
    isLoading: false,
  },
);

const computedState = useComputedState(props);
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

.interactive {
  transition: background-color 200ms, transform 200ms;
  &:focus, &:hover {
    transform: scale(1.01);
  }
  &:active {
    transform: scale(0.99);
  }
}

.primaryColor {
  color: rgba(var(--color-accent-1));
  background: rgb(var(--color-primary-1));
}

.gradientColor {
  color: rgba(var(--color-accent-1));
  background: var(--color-main-gradient);
}

.successColor {
  color: rgba(var(--color-accent-1));
  background: rgb(var(--color-success));
}

.colored {
  color: rgba(var(--color-accent-1));
  background-color: rgb(var(--color-primary-1));
}

.secondary1Color {
  color: rgba(var(--color-accent-1));
  background-color: rgb(var(--color-background-1));
}

.secondary2Color {
  color: rgba(var(--color-accent-1));
  background-color: rgb(var(--color-background-2));
}

.lgSize {
  padding: 15px;
  border-radius: 5px;
  @include text;
  font-weight: 600;
}

.mdSize {
  padding: 8px;
  border-radius: 5px;
  @include title4;
  font-weight: 600;
}

.smSize {
  padding: 3.5px;
  border-radius: 5px;
  @include title5;
  font-weight: 500;
}
</style>
