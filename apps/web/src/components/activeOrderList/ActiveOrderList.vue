<template>
  <ActiveOrderListContainer
    :is-loading="isLoading"
    :is-disabled="isDisabled"
  >
    <template #orderList>
      <OrderList
        v-model:page="activePage"
        v-model:total-pages="totalPages"
        :list-type="listType"
        :orders="orders"
        :pairs-map="pairsMap || {}"
        :per-page="10"
        @delete-order="deleteOrder"
        @record-click="onRecordClick"
      />
    </template>
    <template
      v-if="isPaginationVisible"
      #pagination
    >
      <UiPagination
        v-model="activePage"
        :total-pages="totalPages"
      />
    </template>
  </ActiveOrderListContainer>
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
import { storeToRefs } from 'pinia';
import { UiPagination } from '@terminal/uikit/components/pagination';
import OrderList from '@/components/orderList/OrderList.vue';
import { useMarketStore } from '@/stores/market';
import { useActiveOrderList } from '@/hooks/useActiveOrderList';
import ActiveOrderListContainer from '@/containers/activeOrderListContainer/ActiveOrderListContainer.vue';
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
  activePage,
  totalPages,
  isPaginationVisible,
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
