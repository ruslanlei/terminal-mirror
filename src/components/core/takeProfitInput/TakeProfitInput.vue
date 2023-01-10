<template>
  <div :class="$style.takeProfitInput">
    <div :class="$style.price">
      <NumberInput
        v-model="localPrice"
        type="number"
        :class="$style.input"
        :state="['xsSize']"
      />
      <NumberInput
        v-model="percentOfProfitValue"
        type="number"
        :class="$style.input"
        :state="['alignRight', 'xsSize']"
      />
    </div>
    <div :class="$style.amount">
      <NumberInput
        v-model="localQuantity"
        type="number"
        :min="currency.step"
        :max="orderQuantity"
        :step="currency.step"
        :decimals="currency.decimals"
        :round-to-decimal-point="false"
        save-on="blur"
        :class="$style.input"
        :state="['xsSize']"
        @input="onQuantityInput"
      />
      <NumberInput
        v-model="percentOfQuantity"
        type="number"
        :min="percentOfQuantityInputStep"
        :max="100"
        :step="percentOfQuantityInputStep"
        :class="$style.input"
        :state="['alignRight', 'xsSize']"
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
      props.currency.decimals,
    );
  },
});

const percentOfQuantityInputStep = computed(
  () => roundToDecimalPoint(100 / (props.orderQuantity / props.currency.step), 2),
);
</script>

<style lang="scss" module>
.takeProfitInput {
  color: rgb(var(--color-accent-1));
  display: flex;
  gap: 10px;
}

.price, .amount {
  border-bottom: 1px solid rgb(var(--color-accent-2));
  display: flex;
}

.input {
  width: 50%;
}
</style>
