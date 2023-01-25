import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { getPairs } from '@/api/endpoints/marketdata/stats';
import { Pair } from '@/api/types/pair';
import { useToastStore } from '@/stores/toasts';
import { createOrder, CreateOrderDTO } from '@/api/endpoints/orders/create';
import { Order } from '@/api/types/order';
import { processServerErrors, requestMany } from '@/api/common';
import { getOrdersList } from '@/api/endpoints/orders/getList';

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

  const pairs = useStorage<Pair[]>('pairs', []);

  const pairsMap = computed<Record<Pair['id'], Pair>>(() => pairs.value.reduce((acc, pair: Pair) => ({
    ...acc,
    [pair.id]: pair,
  }), {}));

  const activePair = useStorage<Pair['id']>('activePair', 1);

  const setPair = (pairId: Pair['id']) => {
    activePair.value = pairId;
  };

  const activePairData = computed(() => pairs.value.find(
    (pair) => pair.id === activePair.value,
  ));

  const handleGetPairs = async () => {
    const { result, data } = await getPairs();

    if (!result) {
      toastStore.showDanger({
        text: t('market.failedToGetPairs'),
      });
      return;
    }

    pairs.value = data;
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

  const getOrderList = async () => {
    const response = await getOrdersList();

    if (!response.result) {
      processServerErrors(response.data, t('order.failedToGetList'));
    }

    return response;
  };

  return {
    pairs,
    pairsMap,
    marketType,
    activePair,
    setPair,
    activePairData,
    getPairs: handleGetPairs,
    createOrder: handleCreateOrder,
    createListOfTakeProfits,
    createStopLoss,
    getOrderList,
  };
});
