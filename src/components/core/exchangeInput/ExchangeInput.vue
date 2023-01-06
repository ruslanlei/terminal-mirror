<template>
  <NumberInput
    v-model="localValue"
    type="number"
    :state="['defaultColor', 'smSize']"
    :min="min"
    :max="max"
    :is-disabled="isDisabled"
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
import { computed } from 'vue';
import NumberInput from '@/components/core/numberInput/NumberInput.vue';
import { roundToDecimalPoint } from '@/utils/number';
import { ExchangeInputProps, ExchangeInputEmits } from './index';

const props = defineProps<ExchangeInputProps>();

const emit = defineEmits<ExchangeInputEmits>();

const localValue = computed({
  get: () => roundToDecimalPoint(props.modelValue * props.baseCurrencyPrice, 2),
  set: (value: number) => {
    emit('update:modelValue', value / props.baseCurrencyPrice);
  },
});
</script>
