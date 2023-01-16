<template>
  <OrderFormStopLossPartContainer>
    <template #stopLossLabel>
      {{ t('order.stopLoss.switchLabel') }}
    </template>
    <template #stopLossSwitch>
      <Switch v-model="isStopLossEnabled" />
    </template>
    <template #exactPriceLabel>
      {{ t('order.stopLoss.exactPrice') }}
    </template>
    <template #exactPriceInput>
      <NumberInput
        v-model="stopLossPrice"
        :min="0"
        :state="['smSize', 'defaultColor']"
      >
        <template #append>
          {{ quoteCurrency?.name }}
        </template>
      </NumberInput>
    </template>
    <template #amountOfRiskLabel>
      {{ t('order.stopLoss.amountOfRisk') }}
    </template>
    <template #amountOfRiskInput>
      <NumberInput
        v-model="sumOfRisk"
        :state="['smSize', 'defaultColor']"
      >
        <template #append>
          {{ quoteCurrency?.name }}
        </template>
      </NumberInput>
    </template>
    <template #percentOfOrderLabel>
      {{ t('order.stopLoss.percentOfOrder') }}
    </template>
    <template #percentOfOrderInput>
      <NumberInput
        v-model="percentageOfOrder"
        :state="['smSize', 'defaultColor']"
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
        :state="['smSize', 'defaultColor']"
      >
        <template #append>
          {{ '%' }}
        </template>
      </NumberInput>
    </template>
    <template #ratio>
      <OrderFormRatio
        :risk="stopLossRisk"
        :profit="takeProfitsIncomeSum"
        :quote-currency="quoteCurrency"
      />
    </template>
    <template #submit="{ buttonClass }">
      <Button
        :class="buttonClass"
        :state="['primaryColor', 'mdSize']"
      >
        {{ t('common.save') }}
      </Button>
    </template>
  </OrderFormStopLossPartContainer>
</template>

<script setup lang="ts">
import {
  computed,
  inject,
  Ref,
} from 'vue';
import { useI18n } from 'vue-i18n';
import OrderFormStopLossPartContainer
  from '@/containers/orderFormStopLossPartContainer/OrderFormStopLossPartContainer.vue';
import Switch from '@/components/core/switch/Switch.vue';
import NumberInput from '@/components/core/numberInput/NumberInput.vue';
import OrderFormRatio from '@/components/app/orderFormRatio/OrderFormRatio.vue';
import Button from '@/components/core/button/Button.vue';
import { roundToDecimalPoint } from '@/utils/number';
import { useOrderFormInject } from '@/hooks/useOrderFormInject';

const { t } = useI18n();

const isStopLossEnabled = inject<Ref<boolean>>('isStopLossEnabled');

const {
  model,
  quoteCurrency,
  stopLossPrice,
  takeProfitsIncomeSum,
  stopLossRisk,
} = useOrderFormInject();

const percentOfOrder = computed(() => model.price / 100);

const percentageOfOrder = computed({
  get: () => {
    // 100 - ((stop loss price / order price) * 100)
    const rawPercentageOfDifference = 100 /* % */ - (stopLossPrice.value / model.price) * 100;
    return roundToDecimalPoint(rawPercentageOfDifference, 2);
  },
  set: (value: number) => {
    const difference = value * percentOfOrder.value;
    const stopLossPriceRaw = Math.abs(model.price - difference);

    stopLossPrice.value = roundToDecimalPoint(
      stopLossPriceRaw,
      quoteCurrency?.value.decimals,
    );
  },
});

const sumOfRisk = computed({
  get: () => {
    const difference = (model.price * model.quantity) - (stopLossPrice.value * model.quantity);
    return roundToDecimalPoint(difference, 2);
  },
  set: (value: number) => {
    // TODO
  },
});

const percentOfDeposit = computed({
  get: () => {
    // ((order price * order quantity) - (stop loss price * order quantity)) / balance) * 100

    const orderVolume = model.price * model.quantity;
    const stopLossVolume = stopLossPrice.value * model.quantity;

    const TEST_DEPOSIT = 3180;

    const formulaResultRaw = ((orderVolume - stopLossVolume) / TEST_DEPOSIT) * 100;
    return roundToDecimalPoint(formulaResultRaw, 2);
  },
  set: (value: number) => {},
});
</script>
