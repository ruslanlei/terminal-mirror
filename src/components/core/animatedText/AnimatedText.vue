<template>
  <transition
    :name="computedAnimationType"
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
import { ref, toRefs, watch } from 'vue';
import { AnimatedTextProps } from './index';

const props = withDefaults(
  defineProps<AnimatedTextProps>(),
  {
    animationType: 'verticalForward',
  },
);
const {
  text,
} = toRefs(props);

const computedAnimationType = ref(props.animationType);

watch(text, (value, oldValue) => {
  if (props.animationType === 'verticalAuto') {
    computedAnimationType.value = 'verticalForward';

    if (typeof value === 'string') {
      value = Number(value.replace(/\D/g, ''));
    }

    if (typeof oldValue === 'string') {
      oldValue = Number(oldValue.replace(/\D/g, ''));
    }

    if (value > (oldValue || 0)) {
      computedAnimationType.value = 'verticalForward';
    } else {
      computedAnimationType.value = 'verticalBack';
    }
  }
}, { immediate: true });
</script>

<style lang="scss" module>
.animatedText {}
</style>

<style lang="scss">
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
.verticalForward {
  &-enter-active,
  &-leave-active {
    transition: transform 160ms, opacity 160ms;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-enter-from {
    transform: translateY(-6px);
  }
  &-leave-to {
    transform: translateY(6px);
  }
}
</style>
