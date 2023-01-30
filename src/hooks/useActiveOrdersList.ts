import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { ActiveOrdersTableColumn, ActiveOrdersTableRecord } from '@/components/app/activeOrdersList';
import { useMarketStore } from '@/stores/market';
import { Order, SubOrder } from '@/api/types/order';
import { SubOrderTableItem } from '@/components/app/activeOrdersList/subOrdersTable';
import { multiply, roundToDecimalPoint } from '@/math/float';
import { humanizeDate } from '@/utils/date';
import { compose } from '@/utils/fp';
import { calculatePercentOfDifference } from '@/math/helpers/percents';

export const useActiveOrdersList = () => {
  const { t } = useI18n();
  const marketStore = useMarketStore();

  const columns = computed<ActiveOrdersTableColumn[]>(() => [
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
      label: t('ordersList.column.sl'),
      slug: 'sl',
      size: 0.5,
      align: 'center',
    },
    {
      label: '',
      slug: 'pnl',
      size: 1.5,
      align: 'center',
    },
    {
      label: t('ordersList.column.tp'),
      slug: 'tp',
      size: 0.5,
      align: 'center',
    },
    {
      label: t('ordersList.column.date'),
      slug: 'date',
      size: 1,
    },
    {
      label: t('ordersList.column.comment'),
      slug: 'comment',
      size: 0.5,
      align: 'center',
    },
    {
      label: '',
      slug: 'options',
      size: 0.7,
      align: 'center',
    },
  ]);

  const records = ref<ActiveOrdersTableRecord[]>([]);

  const isLoading = ref(false);

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

      const stopLossPercent = relatedStopLoss?.price
        ? compose(
          roundToDecimalPoint(2),
          calculatePercentOfDifference,
        )(order.price, relatedStopLoss.price)
        : null;

      return {
        id: order.id,
        data: {
          pair: pairData.base,
          type: order.side,
          volume: orderVolume,
          coins: order.quantity,
          prices: {
            orderPrice: order.price,
            current: 0, /* TODO: add current price */
          },
          sl: stopLossPercent,
          pnl: 0, /* FIXME */
          tp: 0, /* FIXME */
          date: humanizeDate(order.created),
          comment: order,
          options: order,
        },
        children: [
          ...sortedRelatedTakeProfits.map((subOrder: Order, index: number) => ({
            ...subOrder,
            pairData,
            masterData: order,
            orderIndex: sortedRelatedTakeProfits.length - index,
          })) as SubOrderTableItem[],

          ...(relatedStopLoss ? [{
            ...relatedStopLoss,
            pairData,
            masterData: order,
          }] : []),
        ],
      };
    });
  };

  const getList = async () => {
    isLoading.value = true;
    const { result, data: orders } = await marketStore.getOrderList();
    isLoading.value = false;

    if (!result) return;

    records.value = groupOrdersToTableRecords(orders);
  };

  return {
    columns,
    records,
    isLoading,
    getList,
  };
};
