<template>
  <button
    :class="[
      $style.rewindButton,
      isDisabled && $style.disabled,
    ]"
  >
    <UiIcon
      :size="24"
      icon="rewind"
    />
  </button>
</template>

<script setup lang="ts">
import { UiIcon } from '@terminal/uikit/components/icon';
import { RewindButtonProps } from '@/components/app/playerControls/rewindButton/index';

withDefaults(
  defineProps<RewindButtonProps>(),
  {
    isDisabled: false,
  },
);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.rewindButton {
  color: rgb(var(--color-accent-1));
  transition: color 150ms, opacity 200ms;
  @include transparentOnDisabled;
  &:not(.disabled) {
    cursor: pointer;
  }
  &:active:not(.disabled) {
    transform: scale(0.9);
  }
}
</style>
