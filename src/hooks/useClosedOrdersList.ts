import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useMarketStore } from '@/stores/market';
import { Order, SubOrder } from '@/api/types/order';
import { ActiveSubOrderTableItem } from '@/components/app/activeOrdersList/activeSubOrdersTable';
import { multiply, roundToDecimalPoint } from '@/math/float';
import { humanizeDate } from '@/utils/date';
import { compose } from '@/utils/fp';
import { ClosedOrdersTableColumn, ClosedOrdersTableRecord } from '@/components/app/closedOrdersList';

export const useClosedOrdersList = () => {
  const { t } = useI18n();
  const marketStore = useMarketStore();

  const columns = computed<ClosedOrdersTableColumn[]>(() => [
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
      size: 1.7,
    },
    {
      label: '',
      slug: 'results',
      size: 1.7,
    },
    {
      label: t('ordersList.column.date'),
      slug: 'date',
      size: 1.7,
    },
    {
      label: '',
      slug: 'options',
      size: 0.7,
      align: 'center',
    },
  ]);

  const groupOrdersToTableRecords = (orders: Order[]) => {
    const limitOrders = orders.filter((order: Order) => order.order_type === 'limit');

    return limitOrders.map((order: Order) => {
      const pairData = marketStore.pairsMap?.[order.pair];

      if (!pairData) {
        throw new Error('[Active orders list]: pair data not found');
      }

      const relatedTakeProfits = orders.filter(
        (targetOrder: Order) => targetOrder.order_type === 'tp' && targetOrder.master === order.id,
      ) as SubOrder[];
      const sortedRelatedTakeProfits = relatedTakeProfits.sort(
        (orderA: SubOrder, orderB: SubOrder) => orderB.price - orderA.price,
      );

      const relatedStopLoss = orders.filter(
        (targetOrder: Order) => targetOrder.order_type === 'sl' && targetOrder.master === order.id,
      )[0] as SubOrder;

      const orderVolume = compose(
        roundToDecimalPoint(6), /* TODO: change to base currency decimals */
        multiply,
      )(order.quantity, order.price);

      return {
        id: order.id,
        data: {
          pair: pairData.base,
          type: order.side,
          volume: orderVolume,
          coins: order.quantity,
          prices: {
            orderPrice: order.price,
            current: marketStore.activePairPrice,
          },
          results: {
            pnl: 0,
            pnlPercent: 0,
          },
          date: {
            open: humanizeDate(order.created),
            close: humanizeDate(order.created),
          },
          options: order,
        },
        children: [
          ...sortedRelatedTakeProfits.map((subOrder: Order, index: number) => ({
            ...subOrder,
            pairData,
            masterData: order,
            orderIndex: sortedRelatedTakeProfits.length - index,
          })) as ActiveSubOrderTableItem[],

          ...(relatedStopLoss ? [{
            ...relatedStopLoss,
            pairData,
            masterData: order,
          }] : []),
        ],
      };
    });
  };

  const orders = ref<Order[]>([]);

  const records = computed<ClosedOrdersTableRecord[]>(
    () => groupOrdersToTableRecords(orders.value),
  );

  const isLoading = ref(false);

  const getList = async (showLoading: boolean) => {
    if (showLoading) {
      isLoading.value = true;
    }

    const { result, data } = await marketStore.getOrderList('new');

    isLoading.value = false;

    if (!result) return;

    orders.value = data;
  };

  return {
    columns,
    records,
    isLoading,
    getList,
  };
};
