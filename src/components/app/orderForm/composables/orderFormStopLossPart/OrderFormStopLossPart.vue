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
        :step="0.01"
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
        :step="0.01"
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
        v-model="percentOfOrder"
        :state="['smSize', 'defaultColor']"
        :step="0.01"
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
        :step="0.01"
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

const {
  model,
  quoteCurrency,
  stopLossPrice,
  takeProfitsIncomeSum,
  stopLossRisk,
  isStopLossEnabled,
} = useOrderFormInject();

const percentOfOrder = computed({
  get: () => {
    // Formula:
    // 100 - ((stop loss price / order price) * 100)

    const rawPercentageOfDifference = 100 - (stopLossPrice.value / model.price) * 100;
    return roundToDecimalPoint(rawPercentageOfDifference, 2);
  },
  set: (value: number) => {
    // Formula:
    // order price - (percentOfOrder * order price / 100)

    const formulaResultRaw = (model.price - (value * (model.price / 100)));

    stopLossPrice.value = roundToDecimalPoint(
      formulaResultRaw,
      quoteCurrency?.value.decimals,
    );
  },
});

const sumOfRisk = computed({
  get: () => {
    // Formula:
    // (order price * order quantity) - (stop loss price * order quantity)

    const difference = (model.price * model.quantity) - (stopLossPrice.value * model.quantity);
    return roundToDecimalPoint(difference, 2);
  },
  set: (value: number) => {
    // Formula:
    // ((order price * order quantity) - sumOfRisk) / order quantity

    const formulaResultRaw = ((model.price * model.quantity) - value) / model.quantity;
    stopLossPrice.value = roundToDecimalPoint(formulaResultRaw, quoteCurrency.value.decimals);
  },
});

const percentOfDeposit = computed({
  get: () => {
    // Formula:
    // ((order price * order quantity) - (stop loss price * order quantity)) / balance) * 100

    const orderVolume = model.price * model.quantity;
    const stopLossVolume = stopLossPrice.value * model.quantity;

    const TEST_DEPOSIT = 3180;

    const formulaResultRaw = ((orderVolume - stopLossVolume) / TEST_DEPOSIT) * 100;
    return roundToDecimalPoint(formulaResultRaw, 2);
  },
  set: (value: number) => {
    // Formula:
    // (orderVolume - (balance * percentOfDeposit / 100)) / order quantity

    const TEST_DEPOSIT = 3180;

    const orderVolume = model.price * model.quantity;
    const formulaResult = (orderVolume - (TEST_DEPOSIT * (value / 100))) / model.quantity;

    stopLossPrice.value = roundToDecimalPoint(formulaResult, quoteCurrency.value.decimals);
  },
});
</script>
