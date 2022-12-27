<template>
  <div :class="$style.depositInput">
    <div :class="$style.options">
      <Button
        v-for="option in options"
        :key="option.percents"
        :state="isValueEqualToPercent(option.percents) ? 'colored' : 'secondary2'"
        size="sm"
        :class="$style.option"
        @click="setPercentOfBalance(option.percents)"
      >
        {{ option.label }}
      </Button>
    </div>
    <div :class="$style.inputs">
      <div :class="$style.value">
        <Icon
          :class="$style.icon"
          icon="creditCard"
        />
        <div :class="$style.displayValue">
          {{ displayValue }}
        </div>
      </div>
      <RangeSlider
        v-model="localValue"
        :max="balance"
      />
      <div :class="$style.inputWrapper">
        <NumberInput
          v-model="localValueInPercents"
          :class="$style.input"
          :state="['defaultColor', 'smSize']"
          type="number"
          :min="0"
          :max="100"
        />
        <div :class="$style.percentSymbol">
          %
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Button from '@/components/core/button/Button.vue';
import Icon from '@/components/core/icon/Icon.vue';
import RangeSlider from '@/components/core/rangeSlider/RangeSlider.vue';
import NumberInput from '@/components/core/numberInput/NumberInput.vue';
import { useLocalValue } from '@/hooks/useLocalValue';
import { DepositInputEmits, DepositInputProps } from './index';

const props = defineProps<DepositInputProps>();

const emit = defineEmits<DepositInputEmits>();

const localValue = useLocalValue<number>(props, emit, 'modelValue');
const displayValue = computed(() => localValue.value.toFixed(6));

const onePercentOfBalance = computed(() => props.balance / 100);

const localValueInPercents = computed({
  get: () => localValue.value / onePercentOfBalance.value,
  set: (percents: number) => {
    localValue.value = onePercentOfBalance.value * percents;
  },
});

const setPercentOfBalance = (
  percents: number,
) => {
  localValueInPercents.value = percents;
};

const isValueEqualToPercent = (
  percents: number,
) => localValue.value === (onePercentOfBalance.value * percents);

const options = computed(() => [
  {
    label: '10%',
    percents: 10,
  },
  {
    label: '25%',
    percents: 25,
  },
  {
    label: '30%',
    percents: 30,
  },
  {
    label: '50%',
    percents: 50,
  },
  {
    label: '75%',
    percents: 75,
  },
  {
    label: '100%',
    percents: 100,
  },
]);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.depositInput {}

.options {
  display: flex;
  gap: 5px;
}

.option {
}

.icon {
  color: rgb(var(--color-accent-1));
}

.inputs {
  margin-top: 10px;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 65px;
  gap: 10px;
}

.value {
  display: flex;
  align-items: center;
}

.displayValue {
  @include title5;
  color: rgb(var(--color-accent-1));
  text-align: right;
  margin-left: 15px;
}

.input {
}

.inputWrapper {
  display: flex;
  align-items: center;
}

.percentSymbol {
  margin-left: 6px;
  @include title5;
  color: rgb(var(--color-accent-2));
}
</style>
