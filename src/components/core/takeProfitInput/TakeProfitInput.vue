<template>
  <div :class="$style.takeProfitInput">
    <input
      v-model.number="localValue.price"
      type="number"
      step="100"
    >
    <input
      v-model.number="percentOfRiseValue"
      type="number"
    >
  </div>
</template>

<script setup lang="ts">
import {
  TakeProfitInputEmits,
  TakeProfitInputProps,
  TakeProfitInputValue,
} from '@/components/core/takeProfitInput/index';
import { computed } from 'vue';
import { useLocalValue } from '@/hooks/useLocalValue';

const props = defineProps<TakeProfitInputProps>();

const emit = defineEmits<TakeProfitInputEmits>();

const localValue = useLocalValue<TakeProfitInputValue>(props, emit, 'modelValue');

const percentOfOrder = computed(() => props.orderPrice / 100);

const calculatePercentOfRiseByValue = (
  value: number,
) => Math.round(((value - props.orderPrice) / percentOfOrder.value));

const calculateValueByPercentOfRise = (
  percentValue: number,
) => (percentValue * percentOfOrder.value) + props.orderPrice;

const percentOfRiseValue = computed({
  get: () => calculatePercentOfRiseByValue(localValue.value.price),
  set: (percentValue: number) => {
    localValue.value.price = calculateValueByPercentOfRise(percentValue);
  },
});
</script>

<style lang="scss" module>
.takeProfitInput {}
</style>
