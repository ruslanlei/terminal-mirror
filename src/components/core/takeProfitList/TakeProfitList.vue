<template>
  <div :class="$style.takeProfitList">
    <NumberInput
      v-model="takeProfitsAmount"
      :min="1"
      :max="maxTakeProfits"
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
import { divide } from '@/utils/float';
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

const takeProfitsAmount = ref(1);
const maxTakeProfits = computed(() => Math.min(
  orderQuantity.value / baseCurrency.value.step,
  MAXIMUM_ALLOWED_TAKE_PROFITS,
));

const takeProfits = ref<TakeProfitInputValue[]>([
  {
    price: 17000,
    quantity: 0.001,
  },
]);

watch(takeProfitsAmount, () => {
  takeProfits.value = Array(takeProfitsAmount.value).fill(0).map(() => ({
    price: 17000,
    quantity: divide(orderQuantity.value, takeProfitsAmount.value, 6),
  }));
});
</script>

<style lang="scss" module>
.takeProfitList {}
</style>
