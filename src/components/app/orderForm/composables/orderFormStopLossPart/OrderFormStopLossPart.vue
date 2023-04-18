<template>
  <OrderFormStopLossPartContainer>
    <template #stopLossLabel>
      {{ t('order.stopLoss.switchLabel') }}
    </template>
    <template #stopLossSwitch>
      <Switch
        v-model="isStopLossEnabled"
        :is-disabled="true"
      />
    </template>
    <template #exactPriceLabel>
      {{ t('order.stopLoss.exactPrice') }}
    </template>
    <template #exactPriceInput>
      <NumberInput
        v-model="stopLossPrice"
        :min="0"
        state="defaultColor"
        size="sm"
        :step="0.01"
      >
        <template #append>
          {{ activePairData?.quote }}
        </template>
      </NumberInput>
    </template>
    <template #sumOfRiskLabel>
      {{ t('order.stopLoss.sumOfRisk') }}
    </template>
    <template #sumOfRiskInput>
      <NumberInput
        v-model="amountOfRisk"
        size="sm"
        state="defaultColor"
        :step="0.01"
        :max="maxAmountOfRisk"
        :is-disabled="isDependentFieldsDisabled"
      >
        <template #append>
          {{ activePairData?.quote }}
        </template>
      </NumberInput>
    </template>
    <template #percentOfOrderLabel>
      {{ t('order.stopLoss.percentOfOrder') }}
    </template>
    <template #percentOfOrderInput>
      <NumberInput
        v-model="percentOfOrderPrice"
        size="sm"
        state="defaultColor"
        :step="0.01"
        :min="percentOfOrderPriceMin"
        :max="percentOfOrderPriceMax"
        save-on="blur"
      >
        <template #append>
          {{ '%' }}
        </template>
      </NumberInput>
    </template>
    <template #percentOfDepositLabel>
      {{ t('order.stopLoss.percentOfDeposit') }}
    </template>
    <template #percentOfDepositInput>
      <NumberInput
        v-model="percentOfDeposit"
        size="sm"
        state="defaultColor"
        :step="0.01"
        :is-disabled="isDependentFieldsDisabled"
      >
        <template #append>
          {{ '%' }}
        </template>
      </NumberInput>
    </template>
    <template #ratio>
      <OrderFormEstimates state="default" />
    </template>
    <template #submit="{ buttonClass }">
      <Button
        type="button"
        :class="buttonClass"
        state="primaryColor"
        size="md"
        @click="onSubmit"
      >
        {{ t('common.save') }}
      </Button>
    </template>
  </OrderFormStopLossPartContainer>
</template>

<script setup lang="ts">
import {
  computed,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import OrderFormStopLossPartContainer
  from '@/containers/orderFormStopLossPartContainer/OrderFormStopLossPartContainer.vue';
import Switch from '@/components/core/switch/Switch.vue';
import NumberInput from '@/components/core/numberInput/NumberInput.vue';
import OrderFormEstimates from '@/components/app/orderForm/composables/orderFormEstimates/OrderFormEstimates.vue';
import Button from '@/components/core/button/Button.vue';
import { useMarketStore } from '@/stores/market';
import { compose } from '@/utils/fp';
import { useEmulatorStore } from '@/stores/emulator';
import { injectOrderFormState } from '@/components/app/orderForm';
import { multiply, roundToDecimalPlaces } from '@/utils/number';
import {
  calculateOriginalPriceByVolumeDecrease, calculateOriginalPriceByVolumeIncrease,
  calculateVolumeDifference,
} from '@/helpers/math/formulas/order';
import {
  addPercents,
  calculatePercentageOfTotal,
} from '@/helpers/math/percents';
import {
  calculatePriceByPercentOfDeposit,
  calculateVolumeDifferenceInPercentsOfDeposit,
} from '@/helpers/math/formulas/stopLoss';
import { OrderFormStopLossPartEmits } from './index';

const { t } = useI18n();

const emit = defineEmits<OrderFormStopLossPartEmits>();

const onSubmit = () => {
  emit('submit');
};

const emulatorStore = useEmulatorStore();
const {
  balance,
} = storeToRefs(emulatorStore);

const marketStore = useMarketStore();
const {
  quoteCurrencyDecimals,
  baseCurrencyDecimals,
  baseCurrencyStep,
  activePairData,
} = storeToRefs(marketStore);

const {
  model,
  orderSide,
  stopLossPrice,
  isStopLossEnabled,
} = injectOrderFormState();

const isDependentFieldsDisabled = computed(() => !model.quantity);

const maxAmountOfRisk = computed(() => multiply(model.quantity, model.price));

const amountOfRisk = computed({
  get: () => compose(
    roundToDecimalPlaces(quoteCurrencyDecimals.value),
    calculateVolumeDifference,
  )(
    model.quantity,
    model.price,
    stopLossPrice.value,
  ),

  set: (amountOfRisk: number) => {
    stopLossPrice.value = compose(
      roundToDecimalPlaces(quoteCurrencyDecimals.value),
      (orderSide.value === 'buy'
        ? calculateOriginalPriceByVolumeDecrease
        : calculateOriginalPriceByVolumeIncrease
      ),
    )(
      model.price,
      model.quantity,
      amountOfRisk,
    );
  },
});

const percentOfOrderPrice = computed({
  get: () => compose(
    roundToDecimalPlaces(2),
    calculatePercentageOfTotal,
  )(model.price, stopLossPrice.value),

  set: (percent: number) => {
    stopLossPrice.value = compose(
      roundToDecimalPlaces(quoteCurrencyDecimals.value),
      addPercents,
    )(model.price, percent);
  },
});

const percentOfOrderPriceMin = computed(() => (orderSide.value === 'buy' ? -100 : 0));
const percentOfOrderPriceMax = computed(() => (orderSide.value === 'buy' ? 0 : 100));

const percentOfDeposit = computed({
  get: () => compose(
    roundToDecimalPlaces(2),
    calculateVolumeDifferenceInPercentsOfDeposit,
  )(
    model.quantity,
    model.price,
    stopLossPrice.value,
    balance.value,
  ),

  set: (percentOfDeposit: number) => {
    stopLossPrice.value = compose(
      roundToDecimalPlaces(quoteCurrencyDecimals.value),
      calculatePriceByPercentOfDeposit(
        model.quantity,
        model.price,
        balance.value,
      ),
    )(percentOfDeposit);
  },
});
</script>
