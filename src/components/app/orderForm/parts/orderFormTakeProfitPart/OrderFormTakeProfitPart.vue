<template>
  <OrderFormTakeProfilePartContainer>
    <template #profit>
      {{ t('order.takeProfit.profit') }}
    </template>
    <template #profitSwitch>
      <Switch v-model="isEnabled" />
    </template>
  </OrderFormTakeProfilePartContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import OrderFormTakeProfilePartContainer from '@/containers/orderFormTakeProfitPartContainer/OrderFormTakeProfitPartContainer.vue';
import Switch from '@/components/core/switch/Switch.vue';

const { t } = useI18n();

const isEnabled = ref(false);
</script>
