<template>
  <div :class="$style.takeProfitList">
    <div :class="$style.inputsHeader">
      <div :class="$style.inputsHeaderColumnLeft">
        <div :class="$style.column">
          {{ t('ui.order.takeProfit.price') }}
        </div>
        <div :class="[$style.column, $style.incomeLabel]">
          {{ t('ui.order.takeProfit.income') }}
        </div>
        <div :class="[$style.column, $style.percentOfOrderLabel]">
          {{ t('ui.order.takeProfit.percentOfOrder') }}
        </div>
      </div>
      <div :class="$style.inputsHeaderColumnRight">
        <div :class="$style.column">
          {{ t('ui.order.takeProfit.quantity') }}
        </div>
        <div :class="[$style.column, $style.quantityPercent]">
          {{ t('ui.order.takeProfit.quantityPercent') }}
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
        @input="onTakeProfitInput(takeProfitIndex)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { nextTick } from 'vue';
import { useLocalValue } from '@terminal/uikit/hooks/useLocalValue';
import { subtract } from '@terminal/common/utils/number';
import { TakeProfit } from '@terminal/common';
import { reduceTakeProfitsToQuantitiesSum } from '@/helpers/math/formulas/takeProfit';
import TakeProfitInput from '../takeProfitInput/TakeProfitInput.vue';
import { TakeProfitListEmit, TakeProfitListProps } from './index';

const props = defineProps<TakeProfitListProps>();

const emit = defineEmits<TakeProfitListEmit>();

const { t } = useI18n();

const localValue = useLocalValue<TakeProfit[]>(props, emit, 'modelValue');

const takeProfitsAmount = useLocalValue<number>(props, emit, 'takeProfitsAmount');

const fixSumOfTakeProfits = async (borrowFromFirst: boolean) => {
  const sumOfTakeProfits = reduceTakeProfitsToQuantitiesSum(localValue.value);

  if (sumOfTakeProfits === props.orderQuantity) return;

  const difference = subtract(sumOfTakeProfits, props.orderQuantity);

  const donorTakeProfit = borrowFromFirst
    ? localValue.value[0]
    : localValue.value[localValue.value.length - 1];

  // INFO:
  //  if possible to borrow from one take profit
  if (donorTakeProfit.quantity > difference) {
    donorTakeProfit.quantity = subtract(donorTakeProfit.quantity, difference);
    return;
  }

  // INFO:
  //  if borrowing from last -
  //  iteration from the last
  localValue.value = (
    borrowFromFirst
      ? localValue.value
      : localValue.value.slice().reverse()
  ).reduce(
    ({ updatedValue, quantityRemainder }, takeProfit) => {
      if (!quantityRemainder) {
        updatedValue[borrowFromFirst ? 'push' : 'unshift'](takeProfit);

        return {
          updatedValue,
          quantityRemainder,
        };
      }

      if (takeProfit.quantity > quantityRemainder) {
        updatedValue[borrowFromFirst ? 'push' : 'unshift']({
          ...takeProfit,
          quantity: subtract(takeProfit.quantity, quantityRemainder),
        });

        return {
          updatedValue,
          quantityRemainder: 0,
        };
      }

      return {
        updatedValue,
        quantityRemainder: subtract(quantityRemainder, takeProfit.quantity),
      };
    },
    {
      updatedValue: [] as TakeProfit[],
      quantityRemainder: difference,
    },
  ).updatedValue;

  await nextTick();

  takeProfitsAmount.value = localValue.value.length;
};

const onTakeProfitInput = (
  takeProfitIndex: number,
) => {
  const isLast = takeProfitIndex === (localValue.value.length - 1);

  fixSumOfTakeProfits(isLast);
};
</script>

<style lang="scss" module>
@import "@terminal/uikit/assets/styles/utils";

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
