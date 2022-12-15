<template>
  <div :class="[$style.loader, $style[size]]" />
</template>

<script setup lang="ts">
import { LoaderProps } from '@/components/core/loader/index';

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

.lg {
  width: 48px;
  height: 48px;
  border-top: 3px solid #FFF;
  border-right: 3px solid transparent;
}

.md {
  width: 24px;
  height: 24px;
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
