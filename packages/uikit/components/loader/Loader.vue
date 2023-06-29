<template>
  <div :class="[$style.loader, $style[size]]" />
</template>

<script setup lang="ts">
import { LoaderProps } from './index';

withDefaults(
  defineProps<LoaderProps>(),
  {
    size: 'md',
  },
);
</script>

<style lang="scss" module>
.loader {
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

.md {
  width: 18px;
  height: 18px;
  border-top: 2px solid #FFF;
  border-right: 2px solid transparent;
}

.sm {
  width: 18px;
  height: 18px;
  border-top: 2px solid #FFF;
  border-right: 2px solid transparent;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
