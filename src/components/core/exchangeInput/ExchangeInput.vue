<template>
  <NumberInput
    v-model="localValue"
    type="number"
    :state="['defaultColor', 'smSize']"
    :min="min"
    :max="max"
    :is-disabled="isDisabled"
    :normalizer="normalizer"
    @input="emit('input', $event)"
    @focus="emit('focus', $event)"
    @blur="emit('blur', $event)"
  >
    <template #append>
      <slot name="quoteCurrencyName" />
    </template>
  </NumberInput>
</template>

<script setup lang="ts">
import { computed, nextTick, watch } from 'vue';
import NumberInput from '@/components/core/numberInput/NumberInput.vue';
import { roundToDecimalPoint } from '@/utils/number';
import { NumberInputNormalizer } from '@/components/core/numberInput';
import { add, subtract } from '@/utils/float';
import { ExchangeInputProps, ExchangeInputEmits } from './index';

const props = defineProps<ExchangeInputProps>();

const emit = defineEmits<ExchangeInputEmits>();

const calculateBaseToQuoteCurrencyPrice = (
  baseCurrencyQuantity: number,
) => roundToDecimalPoint(
  baseCurrencyQuantity * props.baseCurrencyPrice,
  props.quoteCurrencyDecimals,
);

const calculateQuoteToBaseCurrencyPrice = (
  quoteCurrencyQuantity: number,
) => roundToDecimalPoint(
  quoteCurrencyQuantity / props.baseCurrencyPrice,
  props.baseCurrencyDecimals,
);

const localValue = computed({
  get: () => calculateBaseToQuoteCurrencyPrice(props.modelValue),
  set: (value: number) => {
    emit('update:modelValue', calculateQuoteToBaseCurrencyPrice(value));
  },
});

const normalizer: NumberInputNormalizer = (
  number: number,
  direction: 'increment' | 'decrement',
) => {
  if (direction === 'increment') {
    const quoteInBaseCurrencyPrice = calculateQuoteToBaseCurrencyPrice(number);

    return calculateBaseToQuoteCurrencyPrice(add(
      [
        quoteInBaseCurrencyPrice,
        props.baseCurrencyStep,
      ],
      props.baseCurrencyDecimals,
    ));
  }

  if (direction === 'decrement') {
    const quoteInBaseCurrencyPrice = calculateQuoteToBaseCurrencyPrice(number);

    return calculateBaseToQuoteCurrencyPrice(subtract(
      quoteInBaseCurrencyPrice,
      props.baseCurrencyStep,
      props.baseCurrencyDecimals,
    ));
  }

  return number;
};
</script>
