<template>
  <div :class="$style.takeProfitInput">
    <div :class="$style.price">
      <NumberInput
        v-model="localPrice"
        type="number"
      />
      <NumberInput
        v-model="percentOfProfitValue"
        type="number"
      />
    </div>
    <div :class="$style.amount">
      <NumberInput
        v-model="localQuantity"
        type="number"
        :min="baseCurrency.step"
        :max="orderQuantity"
        :step="baseCurrency.step"
        :decimals="baseCurrency.decimals"
        :round-to-decimal-point="false"
        save-on="blur"
        @input="onQuantityInput"
      />
      <NumberInput
        v-model="percentOfQuantity"
        type="number"
        :min="percentOfQuantityInputStep"
        :max="100"
        :step="percentOfQuantityInputStep"
        @input="onQuantityInput"
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
import { computed, watch } from 'vue';
import NumberInput from '@/components/core/numberInput/NumberInput.vue';
import { useLocalValue } from '@/hooks/useLocalValue';
import { roundToDecimalPoint } from '@/utils/number';

const props = defineProps<TakeProfitInputProps>();

const emit = defineEmits<TakeProfitInputEmits>();

const localPrice = useLocalValue<number>(props, emit, 'price');

const localQuantity = useLocalValue<number>(props, emit, 'quantity');

const onQuantityInput = () => {
  emit('quantityInput');
};

const percentOfOrder = computed(() => props.orderPrice / 100);

const calculatePercentOfProfitByValue = (
  value: number,
) => Math.round((value - props.orderPrice) / percentOfOrder.value);

const calculateValueByPercentOfProfit = (
  percentValue: number,
) => (percentValue * percentOfOrder.value) + props.orderPrice;

const percentOfProfitValue = computed({
  get: () => calculatePercentOfProfitByValue(localPrice.value),
  set: (percentValue: number) => {
    localPrice.value = calculateValueByPercentOfProfit(percentValue);
  },
});

const percentOfOrderQuantity = computed(() => props.orderQuantity / 100);

const percentOfQuantity = computed({
  get: () => roundToDecimalPoint(localQuantity.value / percentOfOrderQuantity.value, 2),
  set: (percentValue: number) => {
    localQuantity.value = roundToDecimalPoint(
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
