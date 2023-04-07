<template>
  <NumberInput
    v-model="localValue"
    type="number"
    state="defaultColor"
    size="sm"
    :min="0"
    :max="maxQuoteCurrencyDeposit"
    :is-disabled="isDisabled"
    :normalizer="normalizer"
    :normalize-on-keydown="true"
    :save-on="saveOn"
    @input="emit('input', $event)"
    @focus="emit('focus', $event)"
    @blur="emit('blur', $event)"
  >
    <template #append>
      <slot name="quoteCurrency" />
    </template>
  </NumberInput>
</template>

<script setup lang="ts">
import {
  computed,
  toRefs,
} from 'vue';
import NumberInput from '@/components/core/numberInput/NumberInput.vue';
import { NumberInputNormalizer } from '@/components/core/numberInput';
import { useExchange } from '@/hooks/useExchange';
import { compose } from '@/utils/fp';
import { divideRight, multiply, roundToDecimalPoint } from '@/utils/number';
import { ExchangeInputProps, ExchangeInputEmits } from './index';

const props = defineProps<ExchangeInputProps>();

const {
  quoteCurrencyDecimals,
  baseCurrencyDecimals,
  baseCurrencyStep,
  price,
  balance,
  leverage,
} = toRefs(props);

const emit = defineEmits<ExchangeInputEmits>();

const {
  incrementDeposit,
  decrementDeposit,
  maxQuoteCurrencyDeposit,
} = useExchange(
  quoteCurrencyDecimals,
  baseCurrencyStep,
  price,
  balance,
  leverage,
);

const normalizer: NumberInputNormalizer = (
  number: number,
  direction?: 'increment' | 'decrement',
) => {
  switch (direction) {
    case 'increment': return incrementDeposit(number);
    case 'decrement': return decrementDeposit(number);
    default: return number;
  }
};

const localValue = computed({
  get: () => compose(
    roundToDecimalPoint(quoteCurrencyDecimals.value),
    multiply(price.value),
  )(props.modelValue),
  set: (value: number) => {
    emit('update:modelValue', compose(
      roundToDecimalPoint(baseCurrencyDecimals.value),
      divideRight(price.value),
    )(value));
  },
});
</script>
