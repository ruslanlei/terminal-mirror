import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { ActiveOrdersTableColumn, ActiveOrdersTableRecord } from '@/components/app/activeOrdersList';
import { useMarketStore } from '@/stores/market';
import { Order, SubOrder } from '@/api/types/order';
import { multiply } from '@/utils/float';
import { SubOrderTableItem } from '@/components/app/activeOrdersList/subOrdersTable';
import { awaitTimeout } from '@/utils/promise';

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

      const relatedStopLoss = orders.filter(
        (targetOrder: Order) => targetOrder.order_type === 'sl' && targetOrder.master === order.id,
      ) as SubOrder[];

      return {
        id: order.id,
        data: {
          pair: pairData.base,
          type: order.side,
          volume: multiply(order.quantity, order.price, 6), /* FIXME */
          coins: order.quantity,
          prices: {
            orderPrice: order.price,
            current: 0, /* FIXME */
          },
          sl: 0, /* FIXME */
          pnl: 0, /* FIXME */
          tp: 0, /* FIXME */
          date: '',
          comment: order,
          options: order,
        },
        children: [
          ...relatedTakeProfits.map((order: Order) => ({
            ...order,
            pairData,
            masterData: order,
          })) as SubOrderTableItem[],
          ...relatedStopLoss.map((order: Order) => ({
            ...order,
            pairData,
            masterData: order,
          })) as SubOrderTableItem[],
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
