<template>
  <OrdersList
    :is-loading="isLoading"
    :list-type="listType"
    :is-disabled="isDisabled"
    :orders="orders"
    :pairs-map="pairsMap || {}"
    @delete-order="deleteOrder"
    @record-click="onRecordClick"
  />
</template>

<script setup lang="ts">
import {
  computed,
  onActivated,
  onBeforeUnmount,
  onDeactivated,
  toRefs,
} from 'vue';
import { useI18n } from 'vue-i18n';
import OrdersList from '@/components/app/ordersList/OrdersList.vue';
import { useMarketStore } from '@/stores/market';
import { storeToRefs } from 'pinia';
import { useActiveOrderList } from '@/hooks/useActiveOrderList';
import { ActiveOrderListProps } from './index';

const props = defineProps<ActiveOrderListProps>();
const {
  listType,
} = toRefs(props);

const marketStore = useMarketStore();
const {
  pairsMap,
} = storeToRefs(marketStore);

const { t } = useI18n();

const {
  isLoading,
  orders,
  getList,
  clearSubscriptions,
  onRecordClick,
  deleteOrder,
  isDeletingOrder,
} = useActiveOrderList(listType);

const isDisabled = computed(() => [
  isDeletingOrder.value,
].some(Boolean));

onActivated(() => {
  const showLoading = !orders.value?.length;
  getList(showLoading);
});

onDeactivated(clearSubscriptions);
onBeforeUnmount(clearSubscriptions);
</script>
