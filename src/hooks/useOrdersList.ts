import {
  ref,
  watch,
  computed,
  Ref,
} from 'vue';
import {
  ActiveOrdersTableRecord,
  ClosedOrdersTableRecord,
} from '@/components/app/ordersList';
import { useMarketStore } from '@/stores/market';
import {
  Order,
} from '@/api/types/order';
import { awaitTimeout } from '@/utils/promise';
import { useEmulatorStore } from '@/stores/emulator';
import { storeToRefs } from 'pinia';
import { findAndDelete, findAndUpdateObject } from '@/utils/array';

export const useOrdersList = (
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

  const isLoading = ref(false);

  const getList = async (showLoading: boolean) => {
    if (showLoading) {
      isLoading.value = true;
    }

    if (listType.value === 'active') {
      await marketStore.getActiveOrdersList();
    }
    if (listType.value === 'closed') {
      await marketStore.getClosedOrdersList();
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
    isLoading,
    getList,
    clearSubscriptions,
    deleteOrder,
    isDeletingOrder,
    onRecordClick,
  };
};
