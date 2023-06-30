<template>
  <label
    :class="[
      $style[size],
      ...states,
      isFocused && $style.focus,
      !!error && $style.withError,
    ]"
  >
    <span
      v-if="('label' in $slots) || label"
      :class="$style.label"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </span>
    <div :class="[$style.field]">
      <input
        ref="field"
        type="number"
        :value="localValue"
        :tabindex="computedTabIndex"
        :step="step"
        :disabled="isDisabled"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        @keydown="onKeydown"
      >
      <div
        v-if="!hideArrows"
        :class="$style.arrows"
      >
        <button
          tabindex="-1"
          type="button"
          :class="[
            $style.arrowButton,
            localValue === max && $style.disabled,
          ]"
          @click="onClickIncrement"
        >
          <UiIcon
            :size="6"
            icon="tinyArrowUp"
          />
        </button>
        <button
          tabindex="-1"
          type="button"
          :class="[
            $style.arrowButton,
            localValue === min && $style.disabled,
          ]"
          @click="onClickDecrement"
        >
          <UiIcon
            :size="6"
            icon="tinyArrowDown"
          />
        </button>
      </div>
      <div
        v-if="'append' in $slots"
        :class="$style.append"
        :style="{
          ...(appendMinWidth ? {
            minWidth: `${appendMinWidth}px`,
          } : {})
        }"
      >
        <slot name="append" />
      </div>
    </div>
    <UiFieldError
      :size="size"
      :text="error"
      :offset="4"
      :class="$style.errorMessage"
      :show-icon="showErrorIcon"
    />
  </label>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { UiFieldError } from '@terminal/uikit/components/fieldError';
import { UiIcon } from '@terminal/uikit/components/icon';
import { useLocalValue } from '@/hooks/useLocalValue';
import { useComputedState } from '@/hooks/useComputedState';
import { add, subtract, roundToDecimalPlaces } from '@/utils/number';
import { NumberInputEmits, NumberInputNormalizer, NumberInputProps } from './index';

const props = withDefaults(
  defineProps<NumberInputProps>(),
  {
    min: -Infinity,
    max: Infinity,
    tabIndex: 0,
    step: 1,
    saveOn: 'input',
    normalizeOnKeydown: false,
    roundToDecimalPlaces: true,
    state: 'defaultColor',
    size: 'sm',
    hideArrows: false,
    showErrorIcon: true,
    appendMinWidth: 0,
  },
);

const emit = defineEmits<NumberInputEmits>();

const field = ref<HTMLInputElement>();

const computedTabIndex = computed(
  () => (props.isDisabled ? -1 : props.tabIndex),
);

const localValue = useLocalValue<number>(props, emit, 'modelValue');

watch(localValue, () => {
  if (props.decimals && props.roundToDecimalPlaces) {
    localValue.value = roundToDecimalPlaces(props.decimals, localValue.value);
  }
});

const normalizeValue = (
  value: number,
  normalizer?: NumberInputNormalizer,
) => {
  let isChanged = false;

  if (normalizer) {
    value = normalizer(value);
    isChanged = true;
  }

  if (value < props.min) {
    value = props.min;
    isChanged = true;
  }

  if (value > props.max) {
    value = props.max;
    isChanged = true;
  }

  return {
    value,
    isChanged,
  };
};

const saveValue = (
  value: number,
  normalizer?: NumberInputNormalizer,
) => {
  const {
    value: normalizedValue,
    isChanged,
  } = normalizeValue(value, normalizer);

  if (isChanged && field.value) {
    field.value.value = String(normalizedValue);
  }

  localValue.value = normalizedValue;
};

const incrementValue = (value: number) => {
  if (props.normalizer) {
    return props?.normalizer(value, 'increment');
  }

  value = add(value, props.step);

  return value;
};

const decrementValue = (value: number) => {
  if (props.normalizer) {
    return props?.normalizer(value, 'decrement');
  }

  value = subtract(value, props.step);

  return value;
};

const onInput = (event: InputEvent) => {
  if (props.saveOn === 'input' && field.value) {
    saveValue(Number(field.value.value), props.normalizer);
  }

  emit('input', event);
};

const isFocused = ref(false);
const onFocus = (event: InputEvent) => {
  isFocused.value = true;
  emit('focus', event);
};

const onBlur = (event: InputEvent) => {
  isFocused.value = false;

  if (props.saveOn === 'blur' && field.value) {
    saveValue(Number(field.value.value), props.normalizer);
  }

  emit('blur', event);
};

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowUp') {
    event.preventDefault();
    const eventTarget = (event.target as HTMLInputElement);
    saveValue(Number(eventTarget.value), incrementValue);
  }

  if (event.key === 'ArrowDown') {
    event.preventDefault();
    const eventTarget = (event.target as HTMLInputElement);
    saveValue(Number(eventTarget.value), decrementValue);
  }

  emit('input', event);
};

const onClickIncrement = () => {
  saveValue(localValue.value, incrementValue);
};
const onClickDecrement = () => {
  saveValue(localValue.value, decrementValue);
};

const states = useComputedState(props);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.numberInput {}

.field {
  width: 100%;
  display: flex;
  align-items: center;
  input {
    display: block;
    width: 100%;
    height: 100%;
  }
}

.sm {
  .label + .field {
    margin-top: 10px;
  }
  .field {
    @include title4;
    border-radius: 5px;
    & > input {
      padding: 7px min(10px, 14%);
    }
  }
  .error {
    margin-top: 2px;
  }
}

.xs {
  .field {
    @include title5;
    border-radius: 5px;
    font-weight: 600;
    & > input {
      padding: 2px 0;
    }
  }
}

.defaultColor {
  .label {
    color: rgb(var(--color-accent-1));
  }
  &.focus {
    .field {
      border: 1px solid rgb(var(--color-accent-1));
    }
  }
  .field {
    color: rgb(var(--color-accent-1));
    border: 1px solid rgb(var(--color-accent-2));
    transition: border-color 150ms;
    &:hover {
      border: 1px solid rgb(var(--color-accent-1));
    }
  }
}

.alignRight {
  .field {
    & > input {
      text-align: right;
    }
  }
}

.append {
  margin-right: 10px;
  display: flex;
  justify-content: flex-end;
}

// default styles
.withError {
  .field {
    border: 1px solid rgb(var(--color-danger-2));
  }
}

.error {
  color: rgb(var(--color-danger-2));
}

.arrows {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-right: 10px;
}

.arrowButton {
  height: 6px;
  width: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: rgb(var(--color-accent-2));
  transition: 200ms color;
  &.disabled {
    color: rgb(var(--color-accent-3));
  }
}

.errorMessage {
  color: rgb(var(--color-danger-2));
}
</style>
