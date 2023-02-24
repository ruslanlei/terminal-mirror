<template>
  <OrderFormTakeProfilePartContainer>
    <template #profit>
      {{ t('order.takeProfit.profit') }}
    </template>
    <template #profitSwitch>
      <Switch v-model="isTakeProfitsEnabled" />
    </template>
    <template #takeProfitsAmountLabel>
      {{ t('order.takeProfit.amountOfOrders') }}
    </template>
    <template #takeProfitsAmountInput>
      <NumberInput
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
      />
    </template>
    <template #ratio>
      <OrderFormRatio
        :profit="takeProfitsIncomeSum"
        :risk="stopLossRisk"
      />
    </template>
    <template #submit="{ buttonClass }">
      <Button
        type="button"
        :class="buttonClass"
        state="successColor"
        size="md"
        @click="onSubmit"
      >
        {{ t('common.save') }}
      </Button>
    </template>
  </OrderFormTakeProfilePartContainer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import OrderFormTakeProfilePartContainer from '@/containers/orderFormTakeProfitPartContainer/OrderFormTakeProfitPartContainer.vue';
import Switch from '@/components/core/switch/Switch.vue';
import Button from '@/components/core/button/Button.vue';
import TakeProfitList from '@/components/app/takeProfitList/TakeProfitList.vue';
import NumberInput from '@/components/core/numberInput/NumberInput.vue';
import OrderFormRatio from '@/components/app/orderFormRatio/OrderFormRatio.vue';
import { useOrderFormInject } from '@/hooks/useOrderFormInject';
import { useMarketStore } from '@/stores/market';
import { storeToRefs } from 'pinia';
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
  takeProfits,
  isTakeProfitsEnabled,
  maxTakeProfits,
  takeProfitsAmount,
  takeProfitsIncomeSum,
  stopLossRisk,
} = useOrderFormInject();

const onTakeProfitsAmountInput = () => {
  emit('takeProfitsAmountInput');
};

const onSubmit = () => {
  emit('submit');
};
</script>
