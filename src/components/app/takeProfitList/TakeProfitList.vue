<template>
  <div :class="$style.takeProfitList">
    <div :class="$style.amountOfOrders">
      <div :class="$style.label">
        <slot name="amountOrOrdersLabel">
          {{ t('order.takeProfit.amountOfOrders') }}
        </slot>
      </div>
      <NumberInput
        v-model="takeProfitsAmount"
        :min="1"
        :max="maxTakeProfits"
        :state="['smSize', 'defaultColor']"
        @input="autoCalculateTakeProfits"
      />
    </div>

    <div :class="$style.takeProfitTable">
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
          :currency="currency"
          @quantity-input="onUpdateTakeProfitQuantity(takeProfitIndex)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  // watch,
  toRefs,
} from 'vue';
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

const maxTakeProfits = computed(() => Math.min(
  props.orderQuantity / props.currency.step,
  MAXIMUM_ALLOWED_TAKE_PROFITS,
));
const takeProfitsAmount = ref(Math.min(maxTakeProfits.value, 5));

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

const percentOfOrderPrice = computed(() => props.orderPrice / 100);

const EACH_TAKE_PROFIT_PERCENT_INCREASE = 0.5;

const {
  orderPrice,
  orderQuantity,
  currency,
} = toRefs(props);

/// ////// TODO Move to form
const autoCalculateTakeProfits = () => {
  localValue.value = Array(takeProfitsAmount.value).fill(0).map((value, index) => {
    const percentIncrease = EACH_TAKE_PROFIT_PERCENT_INCREASE * (index + 1);
    const increase = percentIncrease * percentOfOrderPrice.value;

    return {
      price: props.orderPrice + increase,
      quantity: divide(props.orderQuantity, takeProfitsAmount.value, 6),
    };
  });
};
// if ()
// autoCalculateTakeProfits();
// watch([orderPrice, currency], autoCalculateTakeProfits);

const autoCalculateTakeProfitPrices = () => {
  localValue.value = localValue.value.map((value, index) => {
    const percentIncrease = EACH_TAKE_PROFIT_PERCENT_INCREASE * (index + 1);
    const increase = percentIncrease * percentOfOrderPrice.value;

    return {
      ...value,
      price: props.orderPrice + increase,
    };
  });
};
autoCalculateTakeProfitPrices();
// watch(orderPrice, autoCalculateTakeProfitPrices);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.takeProfitList {}

.amountOfOrders {
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  .label {
    @include title3;
    color: rgb(var(--color-accent-1));
    font-weight: 500;
    max-width: 110px;
  }
}

.takeProfitTable {
  margin-top: 20px;
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
