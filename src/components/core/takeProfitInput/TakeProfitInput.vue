<template>
  <div :class="$style.takeProfitInput">
    <div :class="$style.price">
      <NumberInput
        v-model="localValue.price"
        type="number"
      />
      <NumberInput
        v-model="percentOfRiseValue"
        type="number"
      />
    </div>
    <div :class="$style.amount">
      <NumberInput
        v-model="localValue.quantity"
        type="number"
        :min="baseCurrency.step"
        :max="orderQuantity"
        :step="baseCurrency.step"
        :decimals="baseCurrency.decimals"
      />
      <NumberInput
        v-model="percentOfQuantity"
        type="number"
        :min="percentOfQuantityInputStep"
        :max="100"
        :step="percentOfQuantityInputStep"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  TakeProfitInputEmits,
  TakeProfitInputProps,
  TakeProfitInputValue,
} from '@/components/core/takeProfitInput/index';
import { computed } from 'vue';
import NumberInput from '@/components/core/numberInput/NumberInput.vue';
import { useLocalValue } from '@/hooks/useLocalValue';
import { roundToDecimalPoint } from '@/utils/number';

const props = defineProps<TakeProfitInputProps>();

const emit = defineEmits<TakeProfitInputEmits>();

const localValue = useLocalValue<TakeProfitInputValue>(props, emit, 'modelValue');

const percentOfOrder = computed(() => props.orderPrice / 100);

const calculatePercentOfRiseByValue = (
  value: number,
) => Math.round((value - props.orderPrice) / percentOfOrder.value);

const calculateValueByPercentOfRise = (
  percentValue: number,
) => (percentValue * percentOfOrder.value) + props.orderPrice;

const percentOfRiseValue = computed({
  get: () => calculatePercentOfRiseByValue(localValue.value.price),
  set: (percentValue: number) => {
    localValue.value.price = calculateValueByPercentOfRise(percentValue);
  },
});

const percentOfOrderQuantity = computed(() => props.orderQuantity / 100);

const percentOfQuantity = computed({
  get: () => roundToDecimalPoint(localValue.value.quantity / percentOfOrderQuantity.value, 2),
  set: (percentValue: number) => {
    localValue.value.quantity = roundToDecimalPoint(
      roundToDecimalPoint(percentValue, 2) * percentOfOrderQuantity.value,
      props.baseCurrency.decimals,
    );
  },
});

const percentOfQuantityInputStep = computed(
  () => roundToDecimalPoint(100 / (props.orderQuantity / props.baseCurrency.step), 2),
);
</script>

<style lang="scss" module>
.takeProfitInput {
  color: rgb(var(--color-accent-1));
  display: flex;
}

.price {
  border: 1px solid rgb(var(--color-accent-2));
}

.amount {
  border: 1px solid rgb(var(--color-accent-2));
}
</style>
