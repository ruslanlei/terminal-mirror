<template>
  <button
    tabindex="0"
    :class="[
      $style.button,
      isDisabled && $style.disabled,
      $style[size],
      isWide && $style.wide,
      hideLoaderOnHover && $style.hideLoaderOnHover,
      ...computedState,
    ]"
    :disabled="isDisabled"
  >
    <div :class="[$style.loaderCap, !isLoading && $style.hidden]">
      <Loader :size="computedLoaderSize" />
    </div>
    <div :class="[$style.inner, isLoading && $style.hidden]">
      <slot />
    </div>
  </button>
</template>

<script setup lang="ts">
import Loader from '@/components/core/loader/Loader.vue';
import { useComputedState } from '@/hooks/useComputedState';
import { computed } from 'vue';
import { ButtonProps } from './index';

const props = withDefaults(
  defineProps<ButtonProps>(),
  {
    state: 'gradientColor',
    isDisabled: false,
    isLoading: false,
    isWide: true,
  },
);

const computedState = useComputedState(props);

const computedLoaderSize = computed(
  () => (props.size === 'lg'
    ? 'md'
    : 'sm'),
);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.button {
  display: block;
  position: relative;
  transition: 160ms background-color;
  &:not(.disabled) {
    cursor: pointer;
  }
  @include transparentOnDisabled;
  &.disabled {
    cursor: not-allowed;
  }
}

.wide {
  width: 100%;
}

.hideLoaderOnHover {
  &:hover {
    .loaderCap {
      opacity: 0;
      pointer-events: none;
    }
    .inner {
      opacity: 1;
    }
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
  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
}

.inner {
  transition: .15s opacity;
  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
}

.interactive {
  transition: background-color 200ms, color 200ms, opacity 200ms;
  &:focus, &:hover {
    //transform: scale(1.01);
  }
  &:active {
    transform: scale(0.99);
  }
}

.textAccent1 {
  color: rgba(var(--color-accent-1));
}

.textAccent2 {
  color: rgba(var(--color-accent-2));
  &:hover:not(.disabled) {
    color: rgba(var(--color-accent-1));
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

.dangerColor {
  color: rgba(var(--color-accent-1));
  background: rgb(var(--color-danger));
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
  &:hover:not(.disabled) {
    background-color: rgb(var(--color-background-4));
  }
}

.background1 {
  color: rgba(var(--color-accent-1));
  background-color: rgb(var(--color-background-1));
  &:hover:not(.disabled) {
    background-color: rgb(var(--color-background-2));
  }
}

.background3 {
  color: rgba(var(--color-accent-1));
  background-color: rgb(var(--color-background-3));
  &:hover:not(.disabled) {
    background-color: rgb(var(--color-background-3));
  }
}

.backgroundAccent1 {
  color: rgba(var(--color-background-1));
  background-color: rgb(var(--color-accent-1));
  &:hover:not(.disabled) {
  }
}

.accent3Color {
  color: rgba(var(--color-accent-1));
  background-color: rgb(var(--color-accent-3));
  &:hover:not(.disabled) {
    background-color: rgb(var(--color-background-5));
  }
}

.borderedDefault {
  color: rgba(var(--color-accent-1));
  border: 2px solid rgba(var(--color-accent-2), 0.2);
  &:hover:not(.disabled) {
    background-color: rgb(var(--color-background-4));
  }
}

.xl {
  border-radius: 10px;
  @include text;
  line-height: 24px;
  font-weight: 600;
  padding: 16px;
}

.lg {
  padding: 15px;
  border-radius: 5px;
  @include text;
  line-height: 24px;
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
