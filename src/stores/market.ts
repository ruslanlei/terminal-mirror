import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { getPairs } from '@/api/endpoints/marketdata/stats';
import { useToastStore } from '@/stores/toasts';
import { createOrder, CreateOrderDTO } from '@/api/endpoints/orders/create';
import { Order, OrderStatus } from '@/api/types/order';
import { processServerErrors, requestMany } from '@/api/common';
import { getOrdersList } from '@/api/endpoints/orders/getList';
import { PairServerData } from '@/api/types/pairServerData';
import { flatten } from '@/utils/array';
import { getCandles, GetCandlesDTO } from '@/api/endpoints/marketdata/candles';

export type MarketType = 'emulator' | 'real';

export interface TakeProfit {
  price: number,
  quantity: number,
}

export interface StopLoss {
  price: number,
  quantity: number,
}

export const useMarketStore = defineStore('market', () => {
  const { t } = useI18n();

  const toastStore = useToastStore();

  const marketType = useStorage<MarketType>('marketType', 'emulator');

  const pairs = useStorage<PairServerData[]>('pairs', []);

  const pairsMap = computed<Record<PairServerData['id'], PairServerData>>(
    () => pairs.value.reduce((acc, pair: PairServerData) => ({
      ...acc,
      [pair.id]: pair,
    }), {}),
  );

  const activePair = useStorage<PairServerData['id']>('activePair', 1);

  const setPair = (pairId: PairServerData['id']) => {
    activePair.value = pairId;
  };

  const activePairData = computed<PairServerData | undefined>(
    () => pairsMap.value[activePair.value],
  );

  const activePairPrice = ref(0);

  const isFetchingPairs = ref(false);
  const handleGetPairs = async () => {
    isFetchingPairs.value = true;
    const { result, data } = await getPairs();
    isFetchingPairs.value = false;

    if (!result) {
      toastStore.showDanger({
        text: t('market.failedToGetPairs'),
      });
      return;
    }

    pairs.value = data;
  };

  const handleGetCandles = async (
    payload: GetCandlesDTO,
  ) => {
    const response = await getCandles(payload);

    if (!response.result) {
      console.log('Failed to get candles');
    }

    return response;
  };

  const handleCreateOrder = async (dto: CreateOrderDTO) => {
    const response = await createOrder(dto);

    if (!response.result) {
      processServerErrors(response.data, t('order.failedToCreate'));
    }

    return response;
  };

  const createListOfTakeProfits = async (
    takeProfits: TakeProfit[],
    side: Order['side'],
  ) => {
    const response = await requestMany(
      takeProfits.map((takeProfit: TakeProfit) => createOrder({
        pair: activePair.value,
        side,
        order_type: 'tp',
        ...takeProfit,
      })),
    );

    if (!response.result) {
      toastStore.showDanger({
        text: t('order.failedToCreateTakeProfits'),
      });
    }

    return response;
  };

  const createStopLoss = async (stopLoss: StopLoss, side: Order['side']) => {
    const response = await createOrder({
      pair: activePair.value,
      side,
      order_type: 'sl',
      ...stopLoss,
    });

    if (!response.result) {
      processServerErrors(response.data, t('order.failedToCreateStopLoss'));
    }

    return response;
  };

  const getOrderList = async (
    orderType?: 'active' | 'closed',
  ) => {
    let response;
    if (orderType === 'closed') {
      response = await requestMany<Order[][]>([
        getOrdersList('expired'),
        getOrdersList('canceled'),
        getOrdersList('executed'),
        getOrdersList('closed'),
      ]);
    } else {
      response = await requestMany<Order[][]>([
        getOrdersList('new'),
        getOrdersList('filled'),
      ]);
    }

    if (!response.result) {
      processServerErrors(response.data, t('order.failedToGetList'));
    }

    return {
      result: response.result,
      data: flatten(response.data),
    };
  };

  return {
    pairs,
    pairsMap,
    marketType,
    activePair,
    setPair,
    activePairData,
    activePairPrice,
    isFetchingPairs,
    getPairs: handleGetPairs,
    getCandles: handleGetCandles,
    createOrder: handleCreateOrder,
    createListOfTakeProfits,
    createStopLoss,
    getOrderList,
  };
});
