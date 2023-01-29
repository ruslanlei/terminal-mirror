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
        :min="0"
        :hide-arrows="true"
      />
      <NumberInput
        v-model="percentOfProfitValue"
        type="number"
        :step="0.01"
        :min="0"
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
        :min="currency.step"
        :max="orderQuantity"
        :step="currency.step"
        :decimals="currency.decimals"
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
  roundToDecimalPoint,
} from '@/math/float';
import { compose } from '@/utils/fp';
import { addPercents, calculateIncreasePercent } from '@/math/helpers/percents';

const props = defineProps<TakeProfitInputProps>();

const emit = defineEmits<TakeProfitInputEmits>();

const localPrice = useLocalValue<number>(props, emit, 'price');

const localQuantity = useLocalValue<number>(props, emit, 'quantity');

const onQuantityInput = () => {
  emit('quantityInput');
};

const percentOfProfitValue = computed({
  get: () => compose(
    roundToDecimalPoint(2),
    calculateIncreasePercent(props.orderPrice),
  )(localPrice.value),
  set: (percentValue: number) => {
    localPrice.value = compose(
      roundToDecimalPoint(2),
      addPercents(props.orderPrice),
    )(percentValue);
  },
});

const percentOfOrderQuantity = computed(() => props.orderQuantity / 100);

const percentOfQuantity = computed({
  get: () => roundToDecimalPoint(2, localQuantity.value / percentOfOrderQuantity.value),
  set: (percentValue: number) => {
    localQuantity.value = roundToDecimalPoint(
      props.currency.decimals,
      roundToDecimalPoint(percentValue, 2) * percentOfOrderQuantity.value,
    );
  },
});

const percentOfQuantityInputStep = computed(
  () => roundToDecimalPoint(2, 100 / (props.orderQuantity / props.currency.step)),
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
