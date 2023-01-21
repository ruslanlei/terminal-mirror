<template>
  <Card
    :class="$style.modal"
  >
    <div
      :class="{
        [$style.loader]: true,
        [$style.active]: isLoading,
      }"
    >
      <Loader />
    </div>
    <div :class="[$style.content, contentClass]">
      <slot />
    </div>
  </Card>
</template>

<script setup lang="ts">
import Card from '@/components/core/card/Card.vue';
import Loader from '@/components/core/loader/Loader.vue';
import { ModalProps } from './index';

withDefaults(
  defineProps<ModalProps>(),
  {
    isLoading: false,
  },
);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.modal {
  position: relative;
}

.content {
  margin-top: 20px;
}

.loader {
  position: absolute;
  z-index: 300;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: .2s opacity;
  pointer-events: none;
  &.active {
    opacity: 1;
    pointer-events: all;
  }
}
</style>
