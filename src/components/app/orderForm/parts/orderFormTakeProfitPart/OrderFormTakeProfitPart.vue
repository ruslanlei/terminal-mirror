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
        :order-price="16200"
        :order-quantity="0.1"
      />
    </template>
  </OrderFormTakeProfilePartContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import OrderFormTakeProfilePartContainer from '@/containers/orderFormTakeProfitPartContainer/OrderFormTakeProfitPartContainer.vue';
import Switch from '@/components/core/switch/Switch.vue';
import TakeProfitList from '@/components/app/takeProfitList/TakeProfitList.vue';

const { t } = useI18n();

const isEnabled = ref(false);

const takeProfits = ref([]);
</script>
