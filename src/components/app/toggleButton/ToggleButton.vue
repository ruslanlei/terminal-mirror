<template>
  <button
    type="button"
    :class="[
      $style.toggleButton,
      localValue && $style.active,
      ...computedStates,
    ]"
    @click="toggle"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ToggleButtonEmits, ToggleButtonProps } from '@/components/app/toggleButton/index';
import { useLocalValue } from '@/hooks/useLocalValue';
import { useComputedState } from '@/hooks/useComputedState';

const props = withDefaults(
  defineProps<ToggleButtonProps>(),
  {
    state: 'gradientColor',
  },
);

const emits = defineEmits<ToggleButtonEmits>();

const localValue = useLocalValue(props, emits);

const toggle = () => {
  localValue.value = !localValue.value;
};

const computedStates = useComputedState(props);
</script>

<style lang="scss" module>
.toggleButton {
  cursor: pointer;
}

.gradientColor {
  position: relative;
  background-color: rgb(var(--color-background-3));
  border-radius: 5px;
  color: rgb(var(--color-accent-2));
  transition: color 200ms;
  &::before {
    content: '';
    display: block;
    position: absolute;
    inset: -1px;
    background: var(--color-main-gradient);
    clip-path: circle(0% at 0% 0);
    transition: clip-path 170ms ease;
    border-radius: inherit;
  }
  &.active {
    color: rgb(var(--color-accent-1));
    &::before {
      clip-path: circle(150% at 0% 0);
    }
  }
}
</style>
