<template>
  <Tabs
    v-model="activeTab"
    :tabs="tabs"
    :class="$style.orderForm"
  >
    <template #tab(orders)>
      <OrderForm />
    </template>
    <template #tab(couples)>
      <PairSelect />
    </template>
  </Tabs>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Tabs from '@/components/core/tabs/Tabs.vue';
import { TabsProps } from '@/components/core/tabs';
import OrderForm from '@/components/app/orderForm/OrderForm.vue';
import PairSelect from '@/components/app/pairSelect/PairSelect.vue';

const { t } = useI18n();

const activeTab = ref('orders');

const tabs = computed<TabsProps['tabs']>(() => [
  {
    label: t('order.tab.orders'),
    value: 'orders',
  },
  {
    label: t('order.tab.pairs'),
    value: 'couples',
  },
]);

</script>

<style lang="scss" module>
.orderForm {
  height: 100%;
  border-radius: 10px;
}
</style>
