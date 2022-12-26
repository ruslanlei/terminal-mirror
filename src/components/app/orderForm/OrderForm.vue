<template>
  <Tabs
    v-model="activeTab"
    :tabs="tabs"
    :class="$style.orderForm"
  >
    <template #tab(orders)>
      orders
    </template>
    <template #tab(couples)>
      couples
    </template>
    <template #tab(glasses)>
      glasses
    </template>
    <template #tab(widget)>
      widget
    </template>
  </Tabs>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Tabs from '@/components/core/tabs/Tabs.vue';

const { t } = useI18n();

const activeTab = ref('orders');

const tabs = computed(() => [
  {
    label: t('order.tab.orders'),
    value: 'orders',
  },
  {
    label: t('order.tab.couples'),
    value: 'couples',
  },
  {
    label: t('order.tab.glasses'),
    value: 'glasses',
  },
  {
    label: t('order.tab.widget'),
    value: 'widget',
  },
]);
</script>

<style lang="scss" module>
.orderForm {
  height: 100%;
}
</style>
