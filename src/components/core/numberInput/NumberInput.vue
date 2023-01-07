<template>
  <div
    :class="[
      $style.numberInput,
      ...states.map((s) => $style[s]),
    ]"
  >
    <input
      type="number"
      :value="localValue"
      :tabindex="computedTabIndex"
      :step="step"
      :disabled="isDisabled"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
    >
    <div
      v-if="'append' in $slots"
      :class="$style.append"
    >
      <slot name="append" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NumberInputEmits, NumberInputNormalizer, NumberInputProps } from '@/components/core/numberInput/index';
import { useLocalValue } from '@/hooks/useLocalValue';
import { computed, watch } from 'vue';
import { arrayFrom } from '@/utils/array';
import { roundToDecimalPoint } from '@/utils/number';

const props = withDefaults(
  defineProps<NumberInputProps>(),
  {
    min: -Infinity,
    max: Infinity,
    tabIndex: 0,
    step: 1,
    saveOn: 'input',
  },
);

const emit = defineEmits<NumberInputEmits>();

const computedTabIndex = computed(
  () => (props.isDisabled ? -1 : props.tabIndex),
);

const localValue = useLocalValue<number>(props, emit, 'modelValue');

watch(localValue, () => {
  if (props.decimals) {
    localValue.value = roundToDecimalPoint(localValue.value, props.decimals);
  }
});

const normalizeValue = (
  value: number,
) => {
  let isEdited = false;

  if (props.normalizer) {
    // let direction = 'increment';
    // if (value < localValue.value) {
    //   direction = 'decrement';
    // }
    value = props.normalizer(value);
    isEdited = true;
  }

  if (value < props.min) {
    value = props.min;
    isEdited = true;
  }

  if (value > props.max) {
    value = props.max;
    isEdited = true;
  }

  return {
    value,
    isEdited,
  };
};

const saveValue = (event: InputEvent) => {
  const eventTarget = (event.target as HTMLInputElement);
  const { value, isEdited } = normalizeValue(Number(eventTarget.value));

  if (isEdited) {
    eventTarget.value = String(value);
  }

  localValue.value = value;
};

const onInput = (event: InputEvent) => {
  if (props.saveOn === 'input') {
    saveValue(event);
  }

  emit('input', event);
};

const onBlur = (event: InputEvent) => {
  if (props.saveOn === 'blur') {
    saveValue(event);
  }

  emit('blur', event);
};

const onFocus = (event: InputEvent) => {
  emit('focus', event);
};

const states = computed(() => arrayFrom(props.state));
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.numberInput {
  width: 100%;
  display: flex;
  align-items: center;
}

.smSize {
  @include title4;
  border-radius: 5px;
  & > input {
    padding: 7px 10px;
    height: 100%;
    width: 100%;
  }
}

.defaultColor {
  color: rgb(var(--color-accent-1));
  border: 1px solid rgb(var(--color-accent-2));
  transition: border-color 150ms;
  &:hover {
    border: 1px solid rgb(var(--color-accent-1));
  }
}

.append {
  margin-right: 10px;
}
</style>
