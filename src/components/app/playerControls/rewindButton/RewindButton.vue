<template>
  <button
    :class="[
      $style.rewindButton,
      isDisabled && $style.disabled,
    ]"
  >
    <Icon
      :size="24"
      icon="rewind"
    />
  </button>
</template>

<script setup lang="ts">
import Icon from '@/components/core/icon/Icon.vue';
import { RewindButtonProps } from '@/components/app/playerControls/rewindButton/index';

withDefaults(
  defineProps<RewindButtonProps>(),
  {
    isDisabled: false,
  },
);
</script>

<style lang="scss" module>
.rewindButton {
  color: rgb(var(--color-accent-1));
  transition: color 150ms;
  &.disabled {
    color: rgb(var(--color-accent-2));
  }
  &:not(.disabled) {
    cursor: pointer;
  }
  &:active:not(.disabled) {
    transform: scale(0.9);
  }
}
</style>
