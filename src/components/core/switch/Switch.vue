<template>
  <div
    :class="[
      $style.switch,
      localValue && $style.active,
      states.map((s) => $style[s]),
    ]"
    @click="toggle"
  >
    <div :class="$style.circle" />
  </div>
</template>

<script setup lang="ts">
import { useLocalValue } from '@/hooks/useLocalValue';
import { computed } from 'vue';
import { arrayFrom } from '@/utils/array';
import { SwitchEmits, SwitchProps } from './index';

const props = withDefaults(
  defineProps<SwitchProps>(),
  {
    state: 'primaryColor',
  },
);

const emit = defineEmits<SwitchEmits>();

const states = computed(() => arrayFrom(props.state));

const localValue = useLocalValue<boolean>(props, emit, 'modelValue');

const toggle = () => {
  localValue.value = !localValue.value;
};
</script>

<style lang="scss" module>
.switch {
  width: 36px;
  height: 20px;
  border-radius: 14px;
  padding: 2px;
  cursor: pointer;
  &.active {
    .circle {
      transform: translateX(16px);
    }
  }
}

$transitionDuration: 170ms;

.circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transition: transform $transitionDuration;
}

.primaryColor {
  background-color: rgb(var(--color-accent-2));
  overflow: hidden;
  position: relative;
  &::before {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
    transform: translateX(-100%);
    background: var(--color-main-gradient);
    transition: transform $transitionDuration;
    border-radius: 14px;
  }
  .circle {
    position: relative;
    z-index: 2;
    background-color: rgb(var(--color-accent-1));
  }
  &.active {
    &::before {
      transform: translateX(0);
    }
  }
}
</style>
