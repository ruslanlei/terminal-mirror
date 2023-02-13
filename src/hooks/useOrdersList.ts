import { computed, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { ActiveOrdersTableRecord, ClosedOrdersTableRecord, OrdersListProps } from '@/components/app/ordersList';
import { useMarketStore } from '@/stores/market';
import { MasterOrder, Order, SubOrder } from '@/api/types/order';
import { add, roundToDecimalPoint } from '@/helpers/number';
import { compose } from '@/utils/fp';
import { collectActiveOrderRecord, collectClosedOrderRecord } from '@/components/app/ordersList/collectTableRecord';
import { createEmptyRecord } from '@/components/core/table/helpers';
import { modalType, useModalStore } from '@/stores/modals';
import { awaitTimeout } from '@/utils/promise';

interface GroupedOrder {
  order: MasterOrder,
  takeProfits: SubOrder[],
  stopLoss: SubOrder | undefined,
}

export const useOrdersList = (
  props: OrdersListProps,
) => {
  const { t } = useI18n();
  const marketStore = useMarketStore();
  const modalStore = useModalStore();

  const columns = computed(() => [
    {
      label: t('ordersList.column.pair'),
      slug: 'pair',
      size: 1,
    },
    {
      label: t('ordersList.column.type'),
      slug: 'type',
      size: 0.7,
    },
    {
      label: '',
      slug: 'volume',
      size: 1.1,
    },
    {
      label: t('ordersList.column.coins'),
      slug: 'coins',
      size: 1,
    },
    {
      label: '',
      slug: 'prices',
      size: 1.4,
    },
    ...(props.listType === 'active' ? [
      {
        label: t('ordersList.column.sl'),
        slug: 'sl',
        size: 0.7,
        align: 'center',
      },
      {
        label: '',
        slug: 'pnl',
        size: 1,
        align: 'center',
      },
      {
        label: t('ordersList.column.tp'),
        slug: 'tp',
        size: 0.7,
        align: 'center',
      },
    ] : []),
    ...(props.listType === 'closed' ? [
      {
        label: '',
        slug: 'results',
        size: 1,
      },
    ] : []),
    {
      label: '',
      slug: 'date',
      size: 1,
    },
    ...(props.listType === 'active' ? [
      {
        label: t('ordersList.column.comment'),
        slug: 'comment',
        size: 0.7,
        align: 'center',
      },
    ] : []),
    {
      label: t('ordersList.column.parameters'),
      slug: 'options',
      size: 0.7,
      align: 'center',
    },
  ]);

  const groupOrders = (
    orders: Order[],
  ): GroupedOrder[] => (
    orders.filter((order: Order) => order.order_type === 'limit') as MasterOrder[]
  )
    .map((order: MasterOrder) => {
      const relatedTakeProfits = (
        orders.filter(
          (targetOrder: Order) => targetOrder.order_type === 'tp' && targetOrder.master === order.id,
        ) as SubOrder[]
      ).sort((orderA: SubOrder, orderB: SubOrder) => orderB.price - orderA.price);

      const relatedStopLoss = orders.filter(
        (targetOrder: Order) => targetOrder.order_type === 'sl' && targetOrder.master === order.id,
      )[0] as SubOrder | undefined;

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
          pairPrice: marketStore.activePairPrice,
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

  const orders = ref<Order[]>([]);

  const activeOrderRecords = computed<ActiveOrdersTableRecord[]>(
    () => compose(
      mapOrdersToActiveOrderTableRecords,
      groupOrders,
    )(orders.value),
  );

  const commonPnl = computed(() => activeOrderRecords.value.reduce((
    commonPnl: number,
    record: ActiveOrdersTableRecord,
  ) => compose(
    roundToDecimalPoint(2),
    add,
  )(commonPnl, record.data.pnl.value), 0));

  const closedOrderRecords = computed<ClosedOrdersTableRecord[]>(
    () => compose(
      mapOrdersToClosedOrderTableRecords,
      groupOrders,
    )(orders.value),
  );

  const records = computed(() => ({
    active: activeOrderRecords.value,
    closed: closedOrderRecords.value,
  }[props.listType]));

  const isLoading = ref(false);

  const getList = async (showLoading: boolean) => {
    if (showLoading) {
      isLoading.value = true;
    }

    const { result, data } = await marketStore.getOrderList(props.listType);

    isLoading.value = false;

    if (!result) return;

    orders.value = data;
  };

  watch(() => props.listType, () => getList(true));

  const deleteOrder = async (
    order: Order,
    takeProfits: SubOrder[] | undefined,
  ) => {
    modalStore.showModal({
      type: modalType.DELETE_ORDER,
      payload: {
        order,
        takeProfits,
      },
    });
  };

  const onOrderCreate = async () => {
    await getList(false);
  };

  const onOrderDelete = async (
    orderId: Order['id'],
  ) => {
    await awaitTimeout(300);
    orders.value = orders.value.filter(
      (order: Order) => order.id !== orderId && order.master !== orderId,
    );
  };

  const subscribeOrderCreate = () => {
    marketStore.subscribeOrderCreated(onOrderCreate);
    marketStore.subscribeOrderDelete(onOrderDelete);
  };

  const unsubscribeOrderCreate = () => {
    marketStore.unsubscribeOrderCreated(onOrderCreate);
    marketStore.unsubscribeOrderDelete(onOrderDelete);
  };

  return {
    columns,
    orders,
    records,
    commonPnl,
    isLoading,
    getList,
    subscribeOrderCreate,
    unsubscribeOrderCreate,
    deleteOrder,
  };
};
