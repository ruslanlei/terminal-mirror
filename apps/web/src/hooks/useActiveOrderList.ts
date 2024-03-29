import {
  ref,
  watch,
  computed,
  Ref,
} from 'vue';
import {
  ActiveOrdersTableRecord,
  ClosedOrdersTableRecord,
} from 'src/components/orderList';
import { awaitTimeout } from '@terminal/common/utils/promise';
import { storeToRefs } from 'pinia';
import { findAndDelete, findAndUpdateObject } from '@terminal/common/utils/array';
import {
  Order,
} from '@/api/types/order';
import { useEmulatorStore } from '@/stores/emulator';
import { useMarketStore } from '@/stores/market';

export const useActiveOrderList = (
  listType: Ref<'active' | 'closed'>,
) => {
  const marketStore = useMarketStore();
  const {
    activeOrders,
    closedOrders,
  } = storeToRefs(marketStore);

  const emulatorStore = useEmulatorStore();

  const orders = computed<Order[]>(() => ({
    active: activeOrders.value,
    closed: closedOrders.value,
  }[listType.value]));

  const majorOrders = computed(() => (
    orders.value.filter((order: Order) => order.order_type === 'limit')
  ));

  const isMajorOrdersExist = computed(() => (
    !!majorOrders.value.length
  ));

  const activePage = ref(1);
  const totalPages = ref(1);

  const isPaginationVisible = computed(() => (
    isMajorOrdersExist.value && totalPages.value > 1
  ));

  const isLoading = ref(false);

  const getList = async (showLoading: boolean) => {
    if (showLoading) {
      isLoading.value = true;
    }

    if (listType.value === 'active') {
      await marketStore.getActiveorderList();
    }
    if (listType.value === 'closed') {
      await marketStore.getClosedorderList();
    }

    isLoading.value = false;
  };

  watch(() => listType.value, () => getList(true));

  const orderCreatedEventSubscription = marketStore.subscribeOrderCreated(async () => {
    if (listType.value !== 'active') return;

    await getList(false);
  });

  const orderDeleteSubscription = marketStore.subscribeOrderDelete(async (
    deletedOrder: Order,
  ) => {
    if (listType.value !== 'active') return;

    await awaitTimeout(300); // FIXME: awaiting for modal close animation

    activeOrders.value = activeOrders.value.filter(
      (order: Order) => order.id !== deletedOrder.id && order.master !== deletedOrder.id,
    );
  });

  const simulateEventSubscription = emulatorStore.subscribeSimulateEvent(
    (updatedOrder: Order) => {
      if (
        updatedOrder.order_type === 'limit'
          && updatedOrder.status !== 'new'
          && updatedOrder.status !== 'filled'
          && listType.value === 'active'
      ) {
        findAndDelete(
          (order: Order) => order.id !== updatedOrder.id,
          activeOrders.value,
        );

        return;
      }

      findAndUpdateObject(
        (order: Order) => order.id === updatedOrder.id,
        activeOrders.value,
        updatedOrder,
      );
    },
  );

  // FIXME: need to fix backend events.
  //  for now limit order returns with
  //  "filled" status even if it executed
  //  if at the same time was executed TP
  //  or SL
  const simulationEndedEventSubscription = emulatorStore.subscribeSimulationEndedEvent(getList);

  const isDeletingOrder = ref(false);
  const deleteOrder = async (
    order: Order,
  ) => {
    isDeletingOrder.value = true;
    await marketStore.removeOrder(order);
    isDeletingOrder.value = false;
  };

  const clearSubscriptions = () => {
    orderCreatedEventSubscription.unsubscribe();
    orderDeleteSubscription.unsubscribe();
    simulateEventSubscription.unsubscribe();
    simulationEndedEventSubscription.unsubscribe();
  };

  const onRecordClick = (
    record: ActiveOrdersTableRecord | ClosedOrdersTableRecord,
  ) => {
    if (emulatorStore.isPlaying) {
      emulatorStore.turnOffPlayer();
    }
    marketStore.setPair(record.data.pair.id);
  };

  return {
    orders,
    isMajorOrdersExist,
    activePage,
    totalPages,
    isPaginationVisible,
    isLoading,
    getList,
    clearSubscriptions,
    deleteOrder,
    isDeletingOrder,
    onRecordClick,
  };
};
