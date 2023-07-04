<template>
  <div :class="$style.takeProfitInput">
    <div :class="$style.price">
      <UiNumberInput
        v-model="localPrice"
        :class="$style.input"
        :state="null"
        save-on="blur"
        size="xs"
        :step="0.01"
        :min="minPrice"
        :max="maxPrice"
        :hide-arrows="true"
        @input="onInput"
      />
      <UiNumberInput
        v-model="percentOfProfitValue"
        save-on="blur"
        :step="0.01"
        :min="0"
        :max="100"
        :class="$style.input"
        state="alignRight"
        size="xs"
        :hide-arrows="true"
        @input="onInput"
      />
    </div>
    <div :class="$style.amount">
      <UiNumberInput
        v-model="localQuantity"
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
        @input="onInput"
        @blur="onInput"
      />
      <UiNumberInput
        v-model="percentOfQuantity"
        save-on="blur"
        :min="1"
        :max="100"
        :step="1"
        :class="$style.input"
        state="alignRight"
        size="xs"
        :hide-arrows="true"
        @input="onInput"
        @blur="onInput"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { UiNumberInput } from '@terminal/uikit/components/numberInput';
import {
  TakeProfitInputEmits,
  TakeProfitInputProps,
} from './index';
import { useLocalValue } from '@/hooks/useLocalValue';
import {
  divide,
  multiply,
  roundToDecimalPlaces,
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

const onInput = () => {
  emit('input');
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
    roundToDecimalPlaces(2),
    // FIXME
    (props.orderSide === 'buy'
      ? calculateIncreasePercent
      : calculateDecreasePercent
    )(props.orderPrice),
  )(localPrice.value),
  set: (percentValue: number) => {
    localPrice.value = compose(
      roundToDecimalPlaces(2),
      // FIXME
      (props.orderSide === 'buy'
        ? addPercents
        : subtractPercents
      )(props.orderPrice),
    )(percentValue);
  },
});

const percentOfOrderQuantity = computed(() => divide(props.orderQuantity, 100));

const percentOfQuantity = computed({
  get: () => roundToDecimalPlaces(2, divide(localQuantity.value, percentOfOrderQuantity.value)),
  set: (percentValue: number) => {
    localQuantity.value = compose(
      multiply(percentOfOrderQuantity.value),
    )(percentValue);
  },
});
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
