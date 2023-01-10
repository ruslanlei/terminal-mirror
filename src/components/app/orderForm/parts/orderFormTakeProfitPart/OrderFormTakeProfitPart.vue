<template>
  <OrderFormTakeProfilePartContainer>
    <template #profit>
      {{ t('order.takeProfit.profit') }}
    </template>
    <template #profitSwitch>
      <Switch v-model="isEnabled" />
    </template>
    <template #takeProfitsList>
      <TakeProfitList
        v-model="takeProfits"
        :currency="baseCurrency"
        :order-price="16200"
        :order-quantity="0.1"
      />
    </template>
  </OrderFormTakeProfilePartContainer>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import OrderFormTakeProfilePartContainer from '@/containers/orderFormTakeProfitPartContainer/OrderFormTakeProfitPartContainer.vue';
import Switch from '@/components/core/switch/Switch.vue';
import TakeProfitList from '@/components/app/takeProfitList/TakeProfitList.vue';
import { BaseCurrency } from '@/hooks/useExchange';
import { currency } from '@/api/types/currency';

const { t } = useI18n();

const isEnabled = ref(false);

const takeProfits = ref([]);

const baseCurrency = computed<BaseCurrency>(() => ({
  name: currency.USDT,
  price: 16890,
  decimals: 3,
  step: 0.001,
}));
</script>
