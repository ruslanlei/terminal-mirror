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
      <NumberInput :state="['smSize', 'defaultColor']">
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
      <NumberInput :state="['smSize', 'defaultColor']">
        <template #append>
          {{ '%' }}
        </template>
      </NumberInput>
    </template>
    <template #ratio>
      <OrderFormRatio />
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
  computed, ComputedRef, inject, provide, Ref,
} from 'vue';
import { useI18n } from 'vue-i18n';
import OrderFormStopLossPartContainer
  from '@/containers/orderFormStopLossPartContainer/OrderFormStopLossPartContainer.vue';
import Switch from '@/components/core/switch/Switch.vue';
import NumberInput from '@/components/core/numberInput/NumberInput.vue';
import OrderFormRatio from '@/components/app/orderFormRatio/OrderFormRatio.vue';
import Button from '@/components/core/button/Button.vue';
import { QuoteCurrency } from '@/hooks/useExchange';
import { OrderModel } from '@/hooks/useOrderCreate';
import { roundToDecimalPoint } from '@/utils/number';

const { t } = useI18n();

const isStopLossEnabled = inject<Ref<boolean>>('isStopLossEnabled');

const quoteCurrency = inject<ComputedRef<QuoteCurrency>>('quoteCurrency');
const stopLossPrice = inject<Ref<number>>('stopLossPrice');

const model = inject<OrderModel>('model');

const percentOfOrder = computed(() => (model?.price || 0) / 100);

const percentageOfOrder = computed({
  get: () => {
    const percentageOfDifference = Math.abs(stopLossPrice?.value - model?.price);
    return roundToDecimalPoint(percentageOfDifference / percentOfOrder.value, 2);
  },
  set: (value: number) => {
    const difference = value * percentOfOrder.value;
    const stopLossPriceRaw = Math.abs(model?.price - difference);

    stopLossPrice.value = roundToDecimalPoint(
      stopLossPriceRaw,
      quoteCurrency?.value.decimals,
    );
  },
});
</script>
