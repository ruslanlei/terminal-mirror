<template>
  <label
    :class="[
      ...states,
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
          type="button"
          :class="[
            $style.arrowButton,
            localValue === max && $style.disabled,
          ]"
          @click="onClickIncrement"
        >
          <Icon
            :size="6"
            icon="tinyArrowUp"
          />
        </button>
        <button
          type="button"
          :class="[
            $style.arrowButton,
            localValue === min && $style.disabled,
          ]"
          @click="onClickDecrement"
        >
          <Icon
            :size="6"
            icon="tinyArrowDown"
          />
        </button>
      </div>
      <div
        v-if="'append' in $slots"
        :class="$style.append"
      >
        <slot name="append" />
      </div>
    </div>
    <FieldError
      :text="error"
      :class="$style.error"
    />
  </label>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useLocalValue } from '@/hooks/useLocalValue';
import { roundToDecimalPoint } from '@/utils/number';
import { add, subtract } from '@/utils/float';
import FieldError from '@/components/core/fieldError/FieldError.vue';
import Icon from '@/components/core/icon/Icon.vue';
import { useComputedState } from '@/hooks/useComputedState';
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
    roundToDecimalPoint: true,
    state: () => ['smSize', 'defaultColor'],
    hideArrows: false,
  },
);

const emit = defineEmits<NumberInputEmits>();

const field = ref<HTMLInputElement>();

const computedTabIndex = computed(
  () => (props.isDisabled ? -1 : props.tabIndex),
);

const localValue = useLocalValue<number>(props, emit, 'modelValue');

watch(localValue, () => {
  if (props.decimals && props.roundToDecimalPoint) {
    localValue.value = roundToDecimalPoint(localValue.value, props.decimals);
  }
});

const normalizeValue = (
  value: number,
  normalizer?: NumberInputNormalizer,
) => {
  let isEdited = false;

  if (normalizer) {
    value = normalizer(value);
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

const saveValue = (
  value: number,
  normalizer?: NumberInputNormalizer,
) => {
  const {
    value: normalizedValue,
    isEdited,
  } = normalizeValue(value, normalizer);

  if (isEdited && field.value) {
    field.value.value = String(normalizedValue);
  }

  localValue.value = normalizedValue;
};

const incrementValue = (value: number) => {
  if (props.normalizer) {
    return props?.normalizer(value, 'increment');
  }

  value = add([value, props.step], props.decimals);

  return value;
};

const decrementValue = (value: number) => {
  if (props.normalizer) {
    return props?.normalizer(value, 'decrement');
  }

  value = subtract(value, props.step, props.decimals);

  return value;
};

const onInput = (event: InputEvent) => {
  if (props.saveOn === 'input') {
    const eventTarget = (event.target as HTMLInputElement);
    saveValue(Number(eventTarget.value), props.normalizer);
  }

  emit('input', event);
};

const onBlur = (event: InputEvent) => {
  if (props.saveOn === 'blur') {
    const eventTarget = (event.target as HTMLInputElement);
    saveValue(Number(eventTarget.value), props.normalizer);
  }

  emit('blur', event);
};

const onFocus = (event: InputEvent) => {
  emit('focus', event);
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

.smSize {
  .field {
    @include title4;
    border-radius: 5px;
    & > input {
      padding: 7px min(10px, 14%);
    }
  }
  .error {
    margin-top: 2px;
    @include title7;
  }
}

.xsSize {
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
</style>
