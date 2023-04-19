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
      <OrdersList
        v-else
        :list-type="listType"
        :orders="orders"
        :pairs-map="pairsMap || {}"
        @delete-order="deleteOrder"
        @record-click="onRecordClick"
      />
    </transition>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  onActivated,
  onBeforeUnmount,
  onDeactivated, ref,
  toRefs,
} from 'vue';
import { useI18n } from 'vue-i18n';
import OrdersList from '@/components/app/ordersList/OrdersList.vue';
import { useMarketStore } from '@/stores/market';
import { storeToRefs } from 'pinia';
import { useActiveOrderList } from '@/hooks/useActiveOrderList';
import ListSkeleton from '@/components/app/listSkeleton/ListSkeleton.vue';
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

const activePage = ref(0);

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

<style lang="scss" module>
@import "src/assets/styles/utils";

.ordersListWrapper {
  display: flex;
  @include transparentOnDisabled;
}

.skeleton {
  width: 100%;
  flex-grow: 1;
}
</style>
