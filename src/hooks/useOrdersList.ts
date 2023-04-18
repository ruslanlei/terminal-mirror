import {
  ref,
  watch,
  computed,
  Ref,
} from 'vue';
import { useI18n } from 'vue-i18n';
import {
  ActiveOrdersTableRecord,
  ClosedOrdersTableRecord,
} from '@/components/app/ordersList';
import { useMarketStore } from '@/stores/market';
import {
  MasterOrder,
  Order,
  StopLoss,
  TakeProfit,
} from '@/api/types/order';
import { compose } from '@/utils/fp';
import { collectActiveOrderRecord, collectClosedOrderRecord } from '@/components/app/ordersList/collectTableRecord';
import { createEmptyRecord } from '@/components/core/table/helpers';
import { awaitTimeout } from '@/utils/promise';
import { useEmulatorStore } from '@/stores/emulator';
import { useChartDataStore } from '@/stores/chartData';
import { storeToRefs } from 'pinia';
import { findAndDelete, findAndUpdateObject } from '@/utils/array';

interface GroupedOrder {
  order: MasterOrder,
  takeProfits: TakeProfit[],
  stopLoss: StopLoss | undefined,
}

export const useOrdersList = (
  listType: Ref<'active' | 'closed'>,
) => {
  const marketStore = useMarketStore();
  const {
    activeOrders,
    closedOrders,
  } = storeToRefs(marketStore);

  const chartDataStore = useChartDataStore();
  const emulatorStore = useEmulatorStore();

  const groupOrders = (
    orders: Order[],
  ): GroupedOrder[] => (
    orders.filter((order: Order) => order.order_type === 'limit') as MasterOrder[]
  )
    .map((order: MasterOrder) => {
      const relatedTakeProfits = (
        orders.filter(
          (targetOrder: Order) => targetOrder.order_type === 'tp' && targetOrder.master === order.id,
        ) as TakeProfit[]
      ).sort((orderA: TakeProfit, orderB: TakeProfit) => orderB.price - orderA.price);

      const relatedStopLoss = orders.filter(
        (targetOrder: Order) => targetOrder.order_type === 'sl' && targetOrder.master === order.id,
      )[0] as StopLoss | undefined;

      return {
        order,
        takeProfits: relatedTakeProfits,
        stopLoss: relatedStopLoss,
      };
    });

  const mapOrdersToActiveOrderTableRecords = (
    orders: GroupedOrder[],
  ) => orders
    .map(({ order, takeProfits, stopLoss }: GroupedOrder) => {
      const pairData = marketStore.pairsMap?.[order.pair];

      if (!pairData) {
        throw new Error('[Orders list]: pair data not found');
      }

      return compose(
        collectActiveOrderRecord({
          pairData,
          pairPrice: chartDataStore.getCurrentPriceByPairId(pairData.id),
          takeProfits,
          stopLoss,
          order,
        }),
        createEmptyRecord,
      )(order.id);
    });

  const mapOrdersToClosedOrderTableRecords = (
    orders: GroupedOrder[],
  ) => orders
    .map(({ order, takeProfits, stopLoss }: GroupedOrder) => {
      const pairData = marketStore.pairsMap?.[order.pair];

      if (!pairData) {
        throw new Error('[Orders list]: pair data not found');
      }

      return compose(
        collectClosedOrderRecord({
          pairData,
          takeProfits,
          stopLoss,
          order,
          pairPrice: 0,
        }),
        createEmptyRecord,
      )(order.id);
    });

  const orders = computed<Order[]>(() => ({
    active: activeOrders.value,
    closed: closedOrders.value,
  }[listType.value]));

  const activeOrderRecords = computed<ActiveOrdersTableRecord[]>(
    () => compose(
      mapOrdersToActiveOrderTableRecords,
      groupOrders,
    )(activeOrders.value),
  );

  const closedOrderRecords = computed<ClosedOrdersTableRecord[]>(
    () => compose(
      mapOrdersToClosedOrderTableRecords,
      groupOrders,
    )(closedOrders.value),
  );

  const records = computed(() => ({
    active: activeOrderRecords.value,
    closed: closedOrderRecords.value,
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
    records,
    isLoading,
    getList,
    clearSubscriptions,
    deleteOrder,
    isDeletingOrder,
    onRecordClick,
  };
};
