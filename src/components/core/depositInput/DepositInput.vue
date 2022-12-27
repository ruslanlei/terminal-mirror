<template>
  <div :class="$style.depositInput">
    <div :class="$style.options">
      <Button
        v-for="option in options"
        :key="option.percents"
        state="secondary2"
        size="sm"
        :class="$style.option"
        @click="setPercentOfBalance(option.percents)"
      >
        {{ option.label }}
        <span v-if="isValueEqualToPercent(option.percents)">
          equal
        </span>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import Button from '@/components/core/button/Button.vue';
import { useLocalValue } from '@/hooks/useLocalValue';
import { DepositInputEmits, DepositInputProps } from './index';

const props = defineProps<DepositInputProps>();

const emit = defineEmits<DepositInputEmits>();

const localValue = useLocalValue<number>(props, emit, 'modelValue');

const onePercentOfBalance = computed(() => props.balance / 100);

const isValueEqualToPercent = (
  percents: number,
) => localValue.value === (onePercentOfBalance.value * percents);

const setPercentOfBalance = (
  percents: number,
) => {
  localValue.value = onePercentOfBalance.value * percents;
};

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
.depositInput {}

.options {
  display: flex;
  gap: 5px;
}

.option {}
</style>
