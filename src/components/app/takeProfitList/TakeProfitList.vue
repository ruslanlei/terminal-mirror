<template>
  <div :class="$style.takeProfitList">
    <div :class="$style.inputsHeader">
      <div :class="$style.inputsHeaderColumnLeft">
        <div :class="$style.column">
          {{ t('order.takeProfit.price') }}
        </div>
        <div :class="[$style.column, $style.incomeLabel]">
          {{ t('order.takeProfit.income') }}
        </div>
        <div :class="[$style.column, $style.percentOfOrderLabel]">
          {{ t('order.takeProfit.percentOfOrder') }}
        </div>
      </div>
      <div :class="$style.inputsHeaderColumnRight">
        <div :class="$style.column">
          {{ t('order.takeProfit.quantity') }}
        </div>
        <div :class="[$style.column, $style.quantityPercent]">
          {{ t('order.takeProfit.quantityPercent') }}
        </div>
      </div>
    </div>
    <div :class="$style.takeProfitInputs">
      <TakeProfitInput
        v-for="(takeProfit, takeProfitIndex) in localValue"
        :key="takeProfitIndex"
        v-model:price="takeProfit.price"
        v-model:quantity="takeProfit.quantity"
        :order-price="orderPrice"
        :order-quantity="orderQuantity"
        :base-currency-step="baseCurrencyStep"
        :base-currency-decimals="baseCurrencyDecimals"
        :order-side="orderSide"
        @quantity-input="onUpdateTakeProfitQuantity(takeProfitIndex)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import TakeProfitInput from '@/components/core/takeProfitInput/TakeProfitInput.vue';
import { useLocalValue } from '@/hooks/useLocalValue';
import { TakeProfitListEmit, TakeProfitListProps } from '@/components/app/takeProfitList/index';
import { subtract } from '@/utils/number';
import { reduceTakeProfitsToQuantitiesSum } from '@/helpers/math/formulas/takeProfit';
import { awaitFrame } from '@/utils/window';
import { TakeProfit } from '@/api/types/order';

const props = defineProps<TakeProfitListProps>();

const emit = defineEmits<TakeProfitListEmit>();

const { t } = useI18n();

const localValue = useLocalValue<TakeProfit[]>(props, emit, 'modelValue');

const takeProfitsAmount = useLocalValue<number>(props, emit, 'takeProfitsAmount');

const fixSumOfTakeProfits = async (borrowFromFirst: boolean) => {
  const sumOfTakeProfits = reduceTakeProfitsToQuantitiesSum(localValue.value);

  if (sumOfTakeProfits === props.orderQuantity) return;

  await awaitFrame();

  const difference = subtract(sumOfTakeProfits, props.orderQuantity);

  const donorTakeProfit = borrowFromFirst
    ? localValue.value[0]
    : localValue.value[localValue.value.length - 1];

  if (donorTakeProfit.quantity > difference) {
    donorTakeProfit.quantity = subtract(donorTakeProfit.quantity, difference);
    return;
  }

  if (takeProfitsAmount.value > 1) {
    takeProfitsAmount.value = subtract(takeProfitsAmount.value, 1);

    const deleteFrom = borrowFromFirst ? 0 : -1;
    localValue.value.splice(deleteFrom, 1);
  }
};

const onUpdateTakeProfitQuantity = (
  takeProfitIndex: number,
) => {
  const isLast = takeProfitIndex === (localValue.value.length - 1);

  fixSumOfTakeProfits(isLast);
};
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.takeProfitList {
}

.takeProfitTable {
}

.takeProfitInputs {
  margin-top: 5px;
}

.inputsHeader {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.column {
  @include title5;
  font-weight: 500;
  color: rgb(var(--color-accent-1));
}

.incomeLabel {
  text-align: center;
}

.percentOfOrderLabel {
  text-align: right;
}

.inputsHeaderColumnLeft {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.inputsHeaderColumnRight {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.quantityPercent {
  text-align: right;
}
</style>
