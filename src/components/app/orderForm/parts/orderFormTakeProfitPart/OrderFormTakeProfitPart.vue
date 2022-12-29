<template>
  <OrderFormTakeProfilePartContainer>
    <template #profit>
      {{ t('order.takeProfit.profit') }}
    </template>
    <template #profitSwitch>
      <Switch v-model="isEnabled" />
    </template>
    <template #amountOfOrdersLabel>
      {{ t('order.takeProfit.amountOrOrders') }}
    </template>
    <template #amountOfOrdersInput>
      <NumberInput
        v-model="amountOfOrders"
        size="sm"
        :min="1"
        :state="['smSize', 'defaultColor']"
      />
    </template>
  </OrderFormTakeProfilePartContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import OrderFormTakeProfilePartContainer from '@/containers/orderFormTakeProfitPartContainer/OrderFormTakeProfitPartContainer.vue';
import Switch from '@/components/core/switch/Switch.vue';
import NumberInput from '@/components/core/numberInput/NumberInput.vue';

const { t } = useI18n();

const isEnabled = ref(false);

const amountOfOrders = ref(5);
</script>
