<template>
  <NumberInput
    v-model="localValue"
    type="number"
    :state="['defaultColor', 'smSize']"
    :min="0"
    :max="maxDeposit"
    :is-disabled="isDisabled"
    :normalizer="normalizer"
    :normalize-on-keydown="true"
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
import { useExchange } from '@/hooks/useExchange';
import { ExchangeInputProps, ExchangeInputEmits } from './index';

const props = defineProps<ExchangeInputProps>();

const emit = defineEmits<ExchangeInputEmits>();

const {
  calculateBaseToQuoteCurrencyPrice,
  calculateQuoteToBaseCurrencyPrice,
  normalizer,
  maxDeposit,
} = useExchange();

const localValue = computed({
  get: () => calculateBaseToQuoteCurrencyPrice(props.modelValue),
  set: (value: number) => {
    emit('update:modelValue', calculateQuoteToBaseCurrencyPrice(value));
  },
});
</script>
