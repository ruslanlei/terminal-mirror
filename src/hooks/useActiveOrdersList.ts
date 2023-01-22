import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { CurrentOrdersTableColumn, CurrentOrdersTableRecord } from '@/components/app/activeOrdersList';
import { useMarketStore } from '@/stores/market';
import { Order } from '@/api/types/order';
import { multiply } from '@/utils/float';

export const useActiveOrdersList = () => {
  const { t } = useI18n();
  const marketStore = useMarketStore();

  const columns = computed<CurrentOrdersTableColumn[]>(() => [
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

  const records = ref<CurrentOrdersTableRecord[]>([]);

  const isLoading = ref(false);
  const getList = async () => {
    isLoading.value = true;
    const { result, data } = await marketStore.getOrderList();
    isLoading.value = false;

    if (!result) return;

    const limitOrders = data.filter((order: Order) => order.order_type === 'limit');

    records.value = limitOrders.map((order: Order) => {
      const pairData = marketStore.pairsMap?.[order.pair];

      if (!pairData) {
        throw new Error('[Active orders list]: pair data not found');
      }

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
      };
    });
    console.log(records.value);
  };

  return {
    columns,
    records,
    isLoading,
    getList,
  };
};
