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
        @click="onTabClick(option.value)"
      >
        <slot
          name="option"
          :option="option"
          :active-tab="localValue"
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
  computed,
  onBeforeUpdate,
  onMounted,
  ref,
  watch,
} from 'vue';
import { MultiSwitchEmits, MultiSwitchProps } from './index';

const props = withDefaults(
  defineProps<MultiSwitchProps>(),
  {
    state: 'primary',
  },
);
const emit = defineEmits<MultiSwitchEmits>();

if (!props.modelValue) {
  throw new Error('MultiSwitch Error: modelValue is not passed (check v-model)');
}

const container = ref<HTMLElement>();
const optionRefs = ref<Record<string, HTMLElement>>({});
onBeforeUpdate(() => {
  optionRefs.value = {};
});

const localValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const onTabClick = (value) => {
  localValue.value = value;
};

const computedGhostStyles = ref({
  width: '0px',
  height: 'auto',
  left: '0px',
});
const findActiveTab = () => {
  if (!container.value) return;

  const activeTabElement = optionRefs.value[localValue.value];

  const { left: containerLeft } = container.value.getBoundingClientRect();
  const { width, height, left } = activeTabElement.getBoundingClientRect();

  computedGhostStyles.value.width = `${width}px`;
  computedGhostStyles.value.height = `${height}px`;
  computedGhostStyles.value.left = `${left - containerLeft}px`;
};

watch(localValue, findActiveTab);
onMounted(findActiveTab);
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
}

.item {
  position: relative;
  z-index: 2;
  cursor: pointer;
  transition: .2s transform;
  user-select: none;
  &:active {
    opacity: 0.9;
  }
}

.ghost {
  position: absolute;
  transition: .4s left, .4s width;
  animation: options-ghost .7s ease-in-out;
}

.primary {
  &.options {
    border-radius: 30px;
  }
  .item {
    padding: 10px 20px;
    min-width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    font-size: 14px;
    font-weight: 400;
    height: 100%;
    top: 0;
    bottom: 0;
    transition: 300ms color;
    flex-grow: 1;
    &.active {
      color: blue;
    }
  }
  .ghost {
    background-color: green;
    border-radius: 20px;
  }
}
</style>
