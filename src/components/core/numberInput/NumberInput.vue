<template>
  <label
    :class="[
      ...states.map((s) => $style[s]),
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
import { computed, watch } from 'vue';
import { useLocalValue } from '@/hooks/useLocalValue';
import { roundToDecimalPoint } from '@/utils/number';
import { add, subtract } from '@/utils/float';
import { arrayFrom } from '@/utils/array';
import FieldError from '@/components/core/fieldError/FieldError.vue';
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
  },
);

const emit = defineEmits<NumberInputEmits>();

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
  event: InputEvent | KeyboardEvent,
  normalizer?: NumberInputNormalizer,
) => {
  const eventTarget = (event.target as HTMLInputElement);
  const { value, isEdited } = normalizeValue(Number(eventTarget.value), normalizer);

  if (isEdited) {
    eventTarget.value = String(value);
  }

  localValue.value = value;
};

const increment = (value: number) => {
  if (props.normalizer) {
    return props?.normalizer(value, 'increment');
  }

  value = add([value, props.step], props.decimals);

  return value;
};

const decrement = (value: number) => {
  if (props.normalizer) {
    return props?.normalizer(value, 'decrement');
  }

  value = subtract(value, props.step, props.decimals);

  return value;
};

const onInput = (event: InputEvent) => {
  if (props.saveOn === 'input') {
    saveValue(event, props.normalizer);
  }

  emit('input', event);
};

const onBlur = (event: InputEvent) => {
  if (props.saveOn === 'blur') {
    saveValue(event, props.normalizer);
  }

  emit('blur', event);
};

const onFocus = (event: InputEvent) => {
  emit('focus', event);
};

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowUp') {
    event.preventDefault();
    saveValue(event, increment);
  }

  if (event.key === 'ArrowDown') {
    event.preventDefault();
    saveValue(event, decrement);
  }

  emit('input', event);
};

const states = computed(() => arrayFrom(props.state));
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
      padding: 7px 10px;
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
</style>
