<template>
  <div :class="$style.takeProfitList">
    <NumberInput
      v-model="takeProfitsAmount"
      :min="1"
      :max="maxTakeProfits"
      @input="autoCalculateTakeProfits"
    />
    <TakeProfitInput
      v-for="(takeProfit, takeProfitIndex) in takeProfits"
      :key="takeProfitIndex"
      :order-price="orderPrice"
      :order-quantity="orderQuantity"
      :base-currency="baseCurrency"
      :model-value="takeProfit"
      @update:model-value="takeProfits[takeProfitIndex] = $event"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { add, divide, subtract } from '@/utils/float';
import TakeProfitInput from '@/components/core/takeProfitInput/TakeProfitInput.vue';
import NumberInput from '@/components/core/numberInput/NumberInput.vue';
import { BaseCurrency } from '@/hooks/useExchange';
import { Currency } from '@/api/types/currency';
import { TakeProfitInputValue } from '@/components/core/takeProfitInput';

const orderPrice = ref(16200);

const orderQuantity = ref(0.1);

const baseCurrency = computed<BaseCurrency>(() => ({
  name: Currency.USDT,
  price: 16890,
  decimals: 3,
  step: 0.001,
}));

const MAXIMUM_ALLOWED_TAKE_PROFITS = 50;

const takeProfitsAmount = ref(5);
const maxTakeProfits = computed(() => Math.min(
  orderQuantity.value / baseCurrency.value.step,
  MAXIMUM_ALLOWED_TAKE_PROFITS,
));

const takeProfits = ref<TakeProfitInputValue[]>([]);

const fixTakeProfits = () => {
  const sumOfTakeProfits = takeProfits.value.reduce((
    summary: number,
    takeProfit: TakeProfitInputValue,
  ) => add([summary, takeProfit.quantity], 6), 0);

  if (sumOfTakeProfits === orderQuantity.value) return;

  const difference = subtract(sumOfTakeProfits, orderQuantity.value, 6);

  const lastTakeProfit = takeProfits.value[takeProfits.value.length - 1];

  if (lastTakeProfit.quantity > difference) {
    lastTakeProfit.quantity = subtract(lastTakeProfit.quantity, difference, 6);
    return;
  }

  if (takeProfitsAmount.value > 1) {
    takeProfitsAmount.value -= 1;
    takeProfits.value.splice(-1, 1);
  }
};

watch(takeProfits, fixTakeProfits, { deep: true });

const autoCalculateTakeProfits = () => {
  console.log('autoCalculateTakeProfits');
  takeProfits.value = Array(takeProfitsAmount.value).fill(0).map(() => ({
    price: 17000,
    quantity: divide(orderQuantity.value, takeProfitsAmount.value, 6),
  }));
};

autoCalculateTakeProfits();
</script>

<style lang="scss" module>
.takeProfitList {}
</style>
