<template>
  <VDropdown
    :popper-class="$style.dropdown"
    :distance="distance"
    :arrow-overflow="false"
    :overflow-padding="16"
  >
    <slot name="trigger" />
    <template #popper>
      <slot name="dropdown" />
    </template>
  </VDropdown>
</template>

<script setup lang="ts">
import { DropdownProps } from './index';

defineProps<DropdownProps>();
</script>

<style lang="scss" module>
.dropdown {
  display: block;
  :global {
    .v-popper__arrow-container {
      display: none !important;
    }
    .v-popper__inner {
      background-color: transparent !important;
      border: none !important;
      box-shadow: none !important;
    }
  }
}
</style>

<style lang="scss">
.v-popper__popper {
  z-index: 10000;
  top: 0;
  left: 0;
  outline: none;
  .v-popper__inner {
    overflow: visible;
  }
  &.v-popper__popper--shown {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}
</style>
