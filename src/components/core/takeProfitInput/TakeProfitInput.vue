<template>
  <div :class="$style.takeProfitInput">
    <div :class="$style.price">
      <NumberInput
        v-model="localPrice"
        type="number"
        :class="$style.input"
        :state="null"
        size="xs"
        :step="0.01"
        :min="minPrice"
        :max="maxPrice"
        :hide-arrows="true"
      />
      <NumberInput
        v-model="percentOfProfitValue"
        type="number"
        :step="0.01"
        :min="0"
        :max="100"
        :class="$style.input"
        state="alignRight"
        size="xs"
        :hide-arrows="true"
      />
    </div>
    <div :class="$style.amount">
      <NumberInput
        v-model="localQuantity"
        type="number"
        save-on="blur"
        :min="baseCurrencyStep"
        :max="orderQuantity"
        :step="baseCurrencyStep"
        :decimals="baseCurrencyDecimals"
        :round-to-decimal-point="false"
        :class="$style.input"
        :state="null"
        size="xs"
        :hide-arrows="true"
        @input="onQuantityInput"
        @blur="onQuantityInput"
      />
      <NumberInput
        v-model="percentOfQuantity"
        type="number"
        save-on="blur"
        :min="percentOfQuantityInputStep"
        :max="100"
        :step="percentOfQuantityInputStep"
        :class="$style.input"
        state="alignRight"
        size="xs"
        :hide-arrows="true"
        @input="onQuantityInput"
        @blur="onQuantityInput"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  TakeProfitInputEmits,
  TakeProfitInputProps,
} from '@/components/core/takeProfitInput/index';
import { computed } from 'vue';
import NumberInput from '@/components/core/numberInput/NumberInput.vue';
import { useLocalValue } from '@/hooks/useLocalValue';
import {
  divide,
  divideRight,
  multiply,
  roundToDecimalPoint,
} from '@/utils/number';
import { compose } from '@/utils/fp';
import {
  addPercents,
  calculateDecreasePercent,
  calculateIncreasePercent,
  subtractPercents,
} from '@/helpers/math/percents';

const props = defineProps<TakeProfitInputProps>();

const emit = defineEmits<TakeProfitInputEmits>();

const localPrice = useLocalValue<number>(props, emit, 'price');

const localQuantity = useLocalValue<number>(props, emit, 'quantity');

const onQuantityInput = () => {
  emit('quantityInput');
};

const minPrice = computed(() => (
  props.orderSide === 'buy'
    ? props.orderPrice
    : 0
));

const maxPrice = computed(() => (
  props.orderSide === 'buy'
    ? Infinity
    : props.orderPrice
));

const percentOfProfitValue = computed({
  get: () => compose(
    roundToDecimalPoint(2),
    // FIXME
    (props.orderSide === 'buy'
      ? calculateIncreasePercent
      : calculateDecreasePercent
    )(props.orderPrice),
  )(localPrice.value),
  set: (percentValue: number) => {
    localPrice.value = compose(
      roundToDecimalPoint(2),
      // FIXME
      (props.orderSide === 'buy'
        ? addPercents
        : subtractPercents
      )(props.orderPrice),
    )(percentValue);
  },
});

const percentOfOrderQuantity = computed(() => props.orderQuantity / 100);

const percentOfQuantity = computed({
  get: () => roundToDecimalPoint(2, localQuantity.value / percentOfOrderQuantity.value),
  set: (percentValue: number) => {
    localQuantity.value = compose(
      roundToDecimalPoint(props.baseCurrencyStep),
      multiply(percentOfOrderQuantity.value),
      roundToDecimalPoint(2),
    )(percentValue);
  },
});

const percentOfQuantityInputStep = computed(
  () => compose(
    roundToDecimalPoint(2),
    divide(100),
    divideRight,
  )(props.baseCurrencyStep, props.orderQuantity),
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
