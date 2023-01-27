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
import { ExchangeInputProps, ExchangeInputEmits } from './index';

const props = defineProps<ExchangeInputProps>();

const {
  baseCurrency,
  quoteCurrency,
} = toRefs(props);

const emit = defineEmits<ExchangeInputEmits>();

const {
  calculateAndRoundQuoteCurrencyQuantity,
  calculateAndRoundBaseCurrencyQuantity,
  incrementDeposit,
  decrementDeposit,
  maxQuoteCurrencyDeposit,
} = useExchange(
  baseCurrency,
  quoteCurrency,
);

const normalizer: NumberInputNormalizer = (
  number: number,
  direction?: 'increment' | 'decrement',
) => {
  switch (direction) {
    case 'increment': return incrementDeposit(number);
    case 'decrement': return decrementDeposit(number);
    default: return compose(
      calculateAndRoundQuoteCurrencyQuantity(
        baseCurrency.value.decimals,
        baseCurrency.value.price,
      ),
      calculateAndRoundBaseCurrencyQuantity(
        baseCurrency.value.decimals,
        baseCurrency.value.price,
      ),
    )(number);
  }
};

const localValue = computed({
  get: () => calculateAndRoundQuoteCurrencyQuantity(
    quoteCurrency.value.decimals,
    baseCurrency.value.price,
    props.modelValue,
  ),
  set: (value: number) => {
    emit('update:modelValue', calculateAndRoundBaseCurrencyQuantity(
      baseCurrency.value.decimals,
      baseCurrency.value.price,
      value,
    ));
  },
});
</script>
