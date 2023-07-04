<template>
  <OrderFormTakeProfilePartContainer>
    <template #profit>
      {{ t('order.takeProfit.profit') }}
    </template>
    <template #profitSwitch>
      <UiSwitch
        v-model="isTakeProfitsEnabled"
        :is-disabled="true"
      />
    </template>
    <template #takeProfitsAmountLabel>
      {{ t('order.takeProfit.amountOfOrders') }}
    </template>
    <template #takeProfitsAmountInput>
      <UiNumberInput
        v-model="takeProfitsAmount"
        :min="1"
        :max="maxTakeProfits"
        size="sm"
        state="defaultColor"
        @input="onTakeProfitsAmountInput"
      />
    </template>
    <template #takeProfitsList>
      <TakeProfitList
        v-model="takeProfits"
        v-model:take-profits-amount="takeProfitsAmount"
        :order-price="model.price"
        :order-quantity="model.quantity"
        :base-currency-decimals="baseCurrencyDecimals"
        :base-currency-step="baseCurrencyStep"
        :order-side="orderSide"
      />
    </template>
    <template #ratio>
      <OrderFormEstimates state="default" />
    </template>
    <template #submit="{ buttonClass }">
      <UiButton
        type="button"
        :class="buttonClass"
        state="successColor"
        size="md"
        @click="onSubmit"
      >
        {{ t('common.save') }}
      </UiButton>
    </template>
  </OrderFormTakeProfilePartContainer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { UiButton } from '@terminal/uikit/components/button';
import { UiNumberInput } from '@terminal/uikit/components/numberInput';
import { UiSwitch } from '@terminal/uikit/components/switch';
import TakeProfitList from '@/components/app/takeProfitList/TakeProfitList.vue';
import OrderFormTakeProfilePartContainer from '@/containers/orderFormTakeProfitPartContainer/OrderFormTakeProfitPartContainer.vue';
import OrderFormEstimates from '@/components/app/orderForm/composables/orderFormEstimates/OrderFormEstimates.vue';
import { useMarketStore } from '@/stores/market';
import { injectOrderFormState } from '@/components/app/orderForm';
import { OrderFormTakeProfitPartEmits } from './index';

const emit = defineEmits<OrderFormTakeProfitPartEmits>();

const { t } = useI18n();

const marketStore = useMarketStore();
const {
  baseCurrencyDecimals,
  baseCurrencyStep,
} = storeToRefs(marketStore);

const {
  model,
  orderSide,
  takeProfits,
  isTakeProfitsEnabled,
  maxTakeProfits,
  takeProfitsAmount,
} = injectOrderFormState();

const onTakeProfitsAmountInput = () => {
  emit('takeProfitsAmountInput');
};

const onSubmit = () => {
  emit('submit');
};
</script>
