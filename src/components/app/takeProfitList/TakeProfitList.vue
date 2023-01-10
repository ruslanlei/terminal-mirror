<template>
  <div :class="$style.takeProfitList">
    {{ t('order.takeProfit.amountOrOrders') }}
    <NumberInput
      v-model="takeProfitsAmount"
      :min="1"
      :max="maxTakeProfits"
      :state="['smSize', 'defaultColor']"
      @input="autoCalculateTakeProfits"
    />
    <TakeProfitInput
      v-for="(takeProfit, takeProfitIndex) in localValue"
      :key="takeProfitIndex"
      v-model:price="takeProfit.price"
      v-model:quantity="takeProfit.quantity"
      :order-price="orderPrice"
      :order-quantity="orderQuantity"
      :currency="currency"
      @quantity-input="onUpdateTakeProfitQuantity(takeProfitIndex)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { add, divide, subtract } from '@/utils/float';
import TakeProfitInput from '@/components/core/takeProfitInput/TakeProfitInput.vue';
import NumberInput from '@/components/core/numberInput/NumberInput.vue';
import { TakeProfitInputValue } from '@/components/core/takeProfitInput';
import { useLocalValue } from '@/hooks/useLocalValue';
import { TakeProfit, TakeProfitListEmit, TakeProfitListProps } from '@/components/app/takeProfitList/index';

const props = defineProps<TakeProfitListProps>();

const emit = defineEmits<TakeProfitListEmit>();

const { t } = useI18n();

const localValue = useLocalValue<TakeProfit[]>(props, emit, 'modelValue');

const MAXIMUM_ALLOWED_TAKE_PROFITS = 20;

const takeProfitsAmount = ref(5);
const maxTakeProfits = computed(() => Math.min(
  props.orderQuantity / props.currency.step,
  MAXIMUM_ALLOWED_TAKE_PROFITS,
));

const maxAllowedDecimals = computed(() => props.currency.decimals * 2);

const fixSumOfTakeProfits = (borrowFromFirst: boolean) => {
  const sumOfTakeProfits = localValue.value.reduce((
    summary: number,
    takeProfit: TakeProfitInputValue,
  ) => add([summary, takeProfit.quantity], maxAllowedDecimals.value), 0);

  if (sumOfTakeProfits === props.orderQuantity) return;

  const difference = subtract(sumOfTakeProfits, props.orderQuantity, maxAllowedDecimals.value);

  const donorTakeProfit = borrowFromFirst
    ? localValue.value[0]
    : localValue.value[localValue.value.length - 1];

  requestAnimationFrame(() => {
    if (donorTakeProfit.quantity > difference) {
      donorTakeProfit.quantity = subtract(
        donorTakeProfit.quantity,
        difference,
        maxAllowedDecimals.value,
      );
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
    quantity: divide(props.orderQuantity, takeProfitsAmount.value, 6),
  }));
};

autoCalculateTakeProfits();
</script>

<style lang="scss" module>
.takeProfitList {}
</style>
