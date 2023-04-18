<template>
  <OrdersList
    :is-loading="isLoading"
    :list-type="listType"
    :records="records"
    :is-disabled="isDisabled"
    @delete-order="deleteOrder"
    @record-click="onRecordClick"
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useOrdersList } from '@/hooks/useOrdersList';
import {
  computed,
  onActivated,
  onBeforeUnmount,
  onDeactivated, toRefs,
} from 'vue';
import OrdersList from '@/components/app/ordersList/OrdersList.vue';
import { ActiveOrderListProps } from './index';

const props = defineProps<ActiveOrderListProps>();
const {
  listType,
} = toRefs(props);

const { t } = useI18n();

const {
  isLoading,
  records,
  getList,
  clearSubscriptions,
  onRecordClick,
  deleteOrder,
  isDeletingOrder,
} = useOrdersList(listType);

const isDisabled = computed(() => [
  isDeletingOrder.value,
].some(Boolean));

onActivated(() => {
  const showLoading = !records.value?.length;
  getList(showLoading);
});

onDeactivated(clearSubscriptions);
onBeforeUnmount(clearSubscriptions);
</script>
