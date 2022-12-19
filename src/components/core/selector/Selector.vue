<template>
  <div :class="$style.wrapper">
    <div
      v-if="label"
      :class="$style.label"
    >
      {{ label }}
    </div>
    <div
      ref="container"
      :class="[
        $style.options,
        $style[state],
      ]"
    >
      <div
        v-for="option in options"
        :ref="optionElement => { optionRefs[option.value] = optionElement }"
        :key="option.value"
        :class="[
          $style.item,
          localValue === option.value && $style.active,
        ]"
        :data-value="option.value"
        @click="onOptionClick(option.value)"
      >
        <slot
          name="option"
          :option="option"
          :active-option="localValue"
        >
          {{ option.label }}
        </slot>
      </div>
      <div
        :style="computedGhostStyles"
        :class="$style.ghost"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  watch,
  onBeforeUpdate,
  onMounted, onBeforeUnmount,
} from 'vue';
import { useLocalValue } from '@/hooks/useLocalValue';
import { SelectorProps, SelectorEmits, SelectorOption } from './index';

const props = withDefaults(
  defineProps<SelectorProps>(),
  {
    state: 'primary',
    thickening: 4,
  },
);
const emit = defineEmits<SelectorEmits>();

if (!props.modelValue) {
  throw new Error('MultiSwitch Error: modelValue is not passed (check v-model)');
}

const container = ref<HTMLElement>();
const optionRefs = ref<Record<SelectorOption['value'], HTMLElement>>({});
onBeforeUpdate(() => {
  optionRefs.value = {};
});

const localValue = useLocalValue<string>(
  props,
  emit,
  'modelValue',
);

const onOptionClick = (value: SelectorOption['value']) => {
  localValue.value = value;
};

const computedGhostStyles = ref({
  width: '0px',
  height: 'auto',
  left: '0px',
  top: '0px',
});

const findActiveTab = () => {
  if (!container.value || !localValue.value) return;

  const activeTabElement = optionRefs.value[localValue.value];

  const { left: containerLeft } = container.value.getBoundingClientRect();
  const { width, height, left } = activeTabElement.getBoundingClientRect();

  const { thickening } = props;

  computedGhostStyles.value.width = `${width + thickening}px`;
  computedGhostStyles.value.height = `${height + thickening}px`;
  computedGhostStyles.value.left = `${(left - containerLeft) - (thickening / 2)}px`;
  computedGhostStyles.value.top = `${-(thickening / 2)}px`;
};

const setListeners = () => {
  window.addEventListener('resize', findActiveTab);
  window.addEventListener('orientationchange', findActiveTab);
};
const removeListeners = () => {
  window.removeEventListener('resize', findActiveTab);
  window.removeEventListener('orientationchange', findActiveTab);
};

watch(localValue, findActiveTab);
onMounted(() => {
  findActiveTab();
  setListeners();
});
onBeforeUnmount(removeListeners);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

@keyframes options-ghost {
  from {
    opacity: 0;
    transform: scale(0.7);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.wrapper {}

.label {
  font-weight: 400;
  & + .options {
    margin-top: 6px;
  }
}

.options {
  position: relative;
  display: flex;
  background-color: rgb(var(--color-background-3));
}

.item {
  position: relative;
  z-index: 2;
  cursor: pointer;
  transition: .2s transform;
  user-select: none;
}

.ghost {
  position: absolute;
  transition: .3s left, .3s width;
  animation: options-ghost .7s ease-in-out;
  border-radius: 5px;
}

.primary {
  &.options {
    border-radius: 5px;
  }
  .item {
    color: rgb(var(--color-accent-2));
    @include title4;
    padding: 4px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    height: 100%;
    top: 0;
    bottom: 0;
    transition: 300ms color;
    flex-grow: 1;
    &.active {
      color: rgb(var(--color-accent-1));
    }
  }
  .ghost {
    background: var(--color-main-gradient);
    border-radius: 5px;
  }
}
</style>
