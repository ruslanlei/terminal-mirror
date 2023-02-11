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
        state="defaultColor"
        size="sm"
        :step="0.01"
      >
        <template #append>
          {{ quoteCurrency?.name }}
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
        v-model="percentOfOrderPrice"
        size="sm"
        state="defaultColor"
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
        size="sm"
        state="defaultColor"
        :step="0.01"
      >
        <template #append>
          {{ '%' }}
        </template>
      </NumberInput>
    </template>
    <template #ratio>
      <OrderFormRatio
        :ratio="ratio"
        :profit="profitDisplayValue"
        :risk="riskDisplayValue"
        :quote-currency="quoteCurrency"
      />
    </template>
    <template #submit="{ buttonClass }">
      <Button
        type="button"
        :class="buttonClass"
        :state="['primaryColor', 'mdSize']"
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
import OrderFormStopLossPartContainer
  from '@/containers/orderFormStopLossPartContainer/OrderFormStopLossPartContainer.vue';
import Switch from '@/components/core/switch/Switch.vue';
import NumberInput from '@/components/core/numberInput/NumberInput.vue';
import OrderFormRatio from '@/components/app/orderFormRatio/OrderFormRatio.vue';
import Button from '@/components/core/button/Button.vue';
import { useOrderFormInject } from '@/hooks/useOrderFormInject';
import {
  calculateOriginalPriceByVolumeDifference,
  calculateVolumeDifference,
} from '@/helpers/math/formulas/order';
import { roundToDecimalPoint } from '@/helpers/number';
import { compose } from '@/utils/fp';
import { calculatePercentOfDifference, decreaseByPercent } from '@/helpers/math/percents';
import { calculatePriceByPercentOfDeposit, calculateVolumeDifferenceInPercentsOfDeposit } from '@/helpers/math/formulas/stopLoss';
import { OrderFormStopLossPartEmits } from './index';

const { t } = useI18n();

const emit = defineEmits<OrderFormStopLossPartEmits>();

const onSubmit = () => {
  emit('submit');
};

const {
  model,
  quoteCurrency,
  stopLossPrice,
  profitDisplayValue,
  riskDisplayValue,
  isStopLossEnabled,
  ratio,
} = useOrderFormInject();

const percentOfOrderPrice = computed({
  get: () => compose(
    roundToDecimalPoint(2),
    calculatePercentOfDifference,
  )(model.price, stopLossPrice.value),

  set: (percent: number) => {
    stopLossPrice.value = compose(
      roundToDecimalPoint(quoteCurrency.value.decimals),
      decreaseByPercent,
    )(model.price, percent);
  },
});

const amountOfRisk = computed({
  get: () => compose(
    roundToDecimalPoint(quoteCurrency.value.decimals),
    calculateVolumeDifference,
  )(
    model.quantity,
    model.price,
    stopLossPrice.value,
  ),

  set: (amountOfRisk: number) => {
    stopLossPrice.value = compose(
      roundToDecimalPoint(quoteCurrency.value.decimals),
      calculateOriginalPriceByVolumeDifference,
    )(
      model.price,
      model.quantity,
      amountOfRisk,
    );
  },
});

const percentOfDeposit = computed({
  get: () => compose(
    roundToDecimalPoint(2),
    calculateVolumeDifferenceInPercentsOfDeposit,
  )(
    model.quantity,
    model.price,
    stopLossPrice.value,
    quoteCurrency.value.balance,
  ),

  set: (percentOfDeposit: number) => {
    stopLossPrice.value = compose(
      roundToDecimalPoint(quoteCurrency.value.decimals),
      calculatePriceByPercentOfDeposit(
        model.quantity,
        model.price,
        quoteCurrency.value.balance,
      ),
    )(percentOfDeposit);
  },
});
</script>
