<template>
  <div :class="$style.takeProfitList">
    <NumberInput
      v-model="takeProfitsAmount"
      :min="1"
      :max="maxTakeProfits"
      @input="autoCalculateTakeProfits"
    />
    <TakeProfitInput
      v-for="(takeProfit, takeProfitIndex) in localValue"
      :key="takeProfitIndex"
      v-model:price="takeProfit.price"
      v-model:quantity="takeProfit.quantity"
      :order-price="orderPrice"
      :order-quantity="orderQuantity"
      :base-currency="baseCurrency"
      @quantity-input="onUpdateTakeProfitQuantity(takeProfitIndex)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { add, divide, subtract } from '@/utils/float';
import TakeProfitInput from '@/components/core/takeProfitInput/TakeProfitInput.vue';
import NumberInput from '@/components/core/numberInput/NumberInput.vue';
import { BaseCurrency } from '@/hooks/useExchange';
import { Currency } from '@/api/types/currency';
import { TakeProfitInputValue } from '@/components/core/takeProfitInput';
import { useLocalValue } from '@/hooks/useLocalValue';
import { TakeProfit, TakeProfitListEmit, TakeProfitListProps } from '@/components/core/takeProfitList/index';

const props = defineProps<TakeProfitListProps>();

const emit = defineEmits<TakeProfitListEmit>();

const localValue = useLocalValue<TakeProfit[]>(props, emit, 'modelValue');

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

const fixSumOfTakeProfits = (borrowFromFirst: boolean) => {
  const sumOfTakeProfits = localValue.value.reduce((
    summary: number,
    takeProfit: TakeProfitInputValue,
  ) => add([summary, takeProfit.quantity], 6), 0);

  if (sumOfTakeProfits === orderQuantity.value) return;

  const difference = subtract(sumOfTakeProfits, orderQuantity.value, 6);

  const donorTakeProfit = borrowFromFirst
    ? localValue.value[0]
    : localValue.value[localValue.value.length - 1];

  requestAnimationFrame(() => {
    if (donorTakeProfit.quantity > difference) {
      donorTakeProfit.quantity = subtract(donorTakeProfit.quantity, difference, 6);
      return;
    }

    if (takeProfitsAmount.value > 1) {
      takeProfitsAmount.value -= 1;

      const deleteFrom = borrowFromFirst ? 0 : -1;
      localValue.value.splice(deleteFrom, 1);
    }
  });
};

const onUpdateTakeProfitQuantity = (
  takeProfitIndex: number,
) => {
  const isLast = takeProfitIndex === (localValue.value.length - 1);

  fixSumOfTakeProfits(isLast);
};

const autoCalculateTakeProfits = () => {
  localValue.value = Array(takeProfitsAmount.value).fill(0).map(() => ({
    price: 17000,
    quantity: divide(orderQuantity.value, takeProfitsAmount.value, 6),
  }));
};

autoCalculateTakeProfits();
</script>

<style lang="scss" module>
.takeProfitList {}
</style>
