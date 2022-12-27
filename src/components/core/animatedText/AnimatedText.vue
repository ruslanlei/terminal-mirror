<template>
  <transition
    :name="animationType"
    mode="out-in"
  >
    <div
      :key="text"
      :class="$style.animatedText"
    >
      {{ text }}
    </div>
  </transition>
</template>

<script setup lang="ts">
import { AnimatedTextProps } from './index';

const props = defineProps<AnimatedTextProps>();
</script>

<style lang="scss" module>
.animatedText {}
</style>

<style lang="scss">
.verticalBack {
  &-enter-active,
  &-leave-active {
    transition: transform 200ms, opacity 200ms;
  }

  &-enter-from, &-leave-to {
    opacity: 0;
  }

  &-enter-from {
    transform: translateX(-4px);
  }
  &-leave-to {
    transform: translateX(4px);
  }
}

.verticalBack {
  &-enter-active,
  &-leave-active {
    transition: transform 160ms, opacity 160ms;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-enter-from {
    transform: translateY(6px);
  }
  &-leave-to {
    transform: translateY(-6px);
  }
}
</style>
