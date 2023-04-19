<template>
  <div
    :class="[
      $style.ordersListWrapper,
      isDisabled && $style.disabled,
    ]"
  >
    <transition
      name="skeletonTransition"
      mode="out-in"
    >
      <ListSkeleton
        v-if="isLoading"
        :class="$style.skeleton"
      />
      <div
        v-else
        :class="$style.content"
      >
        <Pagination
          v-if="isMajorOrdersExist"
          v-model="activePage"
          :total-pages="10"
        />
        <OrdersList
          :class="$style.orderList"
          :list-type="listType"
          :orders="orders"
          :pairs-map="pairsMap || {}"
          @delete-order="deleteOrder"
          @record-click="onRecordClick"
        />
      </div>
    </transition>
  </div>
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
import ListSkeleton from '@/components/app/listSkeleton/ListSkeleton.vue';
import Pagination from '@/components/core/pagination/Pagination.vue';
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
  isMajorOrdersExist,
  activePage,
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

<style lang="scss" module>
@import "src/assets/styles/utils";

.ordersListWrapper {
  width: 100%;
  display: flex;
  @include transparentOnDisabled;
  flex-grow: 1;
}

.content {
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}

.orderList {
  margin-top: 20px;
}

.skeleton {
  width: 100%;
  flex-grow: 1;
}
</style>
