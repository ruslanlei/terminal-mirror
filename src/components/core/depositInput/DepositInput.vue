<template>
  <div :class="$style.depositInput">
    <div :class="$style.options">
      <Button
        v-for="option in options"
        :key="option.percents"
        :state="[
          checkIsValueEqualToPercent(option.percents)
            ? 'colored'
            : 'secondary2Color',
          'smSize',
        ]"
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
        <div :class="$style.balance">
          <AnimatedText
            animation-type="verticalAuto"
            :class="$style.realBalance"
            :text="balance"
          />
          <transition name="depositInputLeverageBalance">
            <div
              v-if="showLeveragedBalance"
              :class="$style.leveragedBalanceWrapper"
            >
              <AnimatedText
                animation-type="verticalAuto"
                :class="$style.leveragedBalance"
                :text="leveragedBalance"
              />
            </div>
          </transition>
        </div>
      </div>
      <RangeSlider
        v-model="localValueInPercents"
        :max="100"
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
import AnimatedText from '@/components/core/animatedText/AnimatedText.vue';
import { useLocalValue } from '@/hooks/useLocalValue';
import { roundToDecimalPoint } from '@/utils/number';
import { DepositInputEmits, DepositInputProps } from './index';

const props = withDefaults(
  defineProps<DepositInputProps>(),
  {
    decimals: 2,
  },
);

const emit = defineEmits<DepositInputEmits>();

const showLeveragedBalance = computed(() => props.balance !== props.leveragedBalance);

const localValue = useLocalValue<number>(props, emit, 'modelValue');

const onePercentOfBalance = computed(() => props.leveragedBalance / 100);

const percentsToValue = (
  percents: number,
) => roundToDecimalPoint(onePercentOfBalance.value * percents, props.decimals);

const valueToPercents = (value: number) => roundToDecimalPoint(
  value / onePercentOfBalance.value,
  props.decimals,
);

const localValueInPercents = computed({
  get: () => valueToPercents(localValue.value),
  set: (percents: number) => {
    localValue.value = percentsToValue(percents);
  },
});

const setPercentOfBalance = (
  percents: number,
) => {
  localValueInPercents.value = percents;
};

const checkIsValueEqualToPercent = (
  percents: number,
) => localValue.value === percentsToValue(percents);

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
  grid-template-columns: 1fr 1fr 70px;
  gap: 10px;
}

.value {
  display: flex;
  align-items: center;
}

.balance {
  margin-left: 15px;
  width: 100%;
}

.realBalance,
.leveragedBalance {
  @include title5;
  line-height: 110%;
}

.realBalance {
  color: rgb(var(--color-accent-1));
}

.leveragedBalance {
  color: rgb(var(--color-accent-2));
  height: 13px;
}

.leveragedBalanceWrapper {
  height: 13px;
}

.input {}

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

<style lang="scss">
.depositInputLeverageBalance {
  &-enter-active,
  &-leave-active {
    transition: height 200ms, opacity 200ms;
  }

  &-enter-from,
  &-leave-to {
    height: 0;
    opacity: 0;
  }
}
</style>
