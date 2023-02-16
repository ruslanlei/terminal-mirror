import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { getPairs } from '@/api/endpoints/marketdata/stats';
import { useToastStore } from '@/stores/toasts';
import { createOrder, CreateOrderDTO } from '@/api/endpoints/orders/create';
import { Order, SubOrder } from '@/api/types/order';
import { processServerErrors, requestMany } from '@/api/common';
import { getOrdersList } from '@/api/endpoints/orders/getList';
import { PairData } from '@/api/types/pair';
import { flatten } from '@/utils/array';
import { createEventBus } from '@/utils/eventBus';
import { deleteOrder } from '@/api/endpoints/orders/delete';
import { closeOrder } from '@/api/endpoints/orders/cancel';
import { curry } from '@/utils/fp';
import { OrderModel } from '@/hooks/useOrderCreate';
import { modalType, useModalStore } from '@/stores/modals';

export type MarketType = 'emulator' | 'real';

export interface TakeProfit {
  price: number,
  quantity: number,
}

export interface StopLoss {
  price: number,
  quantity: number,
}

export enum marketEvent {
  ORDER_CREATED = 'orderCreated',
  ORDER_DELETED_OR_CLOSED = 'orderDeletedOrClosed',
}

export const useMarketStore = defineStore('market', () => {
  const { t } = useI18n();

  const toastStore = useToastStore();
  const modalStore = useModalStore();

  const {
    subscribeEvent,
    unsubscribeEvent,
    emitEvent,
  } = createEventBus<marketEvent>();

  const subscribeOrderDelete = curry(subscribeEvent<Order['id']>)(marketEvent.ORDER_DELETED_OR_CLOSED);
  const unsubscribeOrderDelete = curry(unsubscribeEvent)(marketEvent.ORDER_DELETED_OR_CLOSED);
  const emitOrderDeleteOrClose = curry(emitEvent<Order['id']>)(marketEvent.ORDER_DELETED_OR_CLOSED);

  const subscribeOrderCreated = curry(subscribeEvent<Order['id']>)(marketEvent.ORDER_CREATED);
  const unsubscribeOrderCreated = curry(unsubscribeEvent)(marketEvent.ORDER_CREATED);
  const emitOrderCreated = curry(emitEvent<Order['id'] | null>)(marketEvent.ORDER_CREATED);

  const marketType = useStorage<MarketType>('marketType', 'emulator');

  const pairs = useStorage<PairData[]>('pairs', []);

  const pairsMap = computed<Record<PairData['id'], PairData>>(
    () => pairs.value.reduce((acc, pair: PairData) => ({
      ...acc,
      [pair.id]: pair,
    }), {}),
  );

  const activePair = useStorage<PairData['id']>('activePair', 1);

  const setPair = (pairId: PairData['id']) => {
    activePair.value = pairId;
  };

  const activePairData = computed<PairData | undefined>(
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

  const baseCurrencyDecimals = ref(Number(import.meta.env.VITE_APP_BASE_CURRENCY_DECIMALS));
  const quoteCurrencyDecimals = ref(Number(import.meta.env.VITE_APP_QUOTE_CURRENCY_DECIMALS));

  const baseCurrencyStep = ref(0.001);

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

  const createOrderGroup = async (
    orderModel: OrderModel,
    takeProfits?: TakeProfit[],
    stopLossPrice?: number,
  ) => {
    const response = await createOrder(orderModel);

    const subOrderSide = orderModel.side === 'buy' ? 'sell' : 'buy';

    if (takeProfits) {
      const response = await createListOfTakeProfits(
        takeProfits,
        subOrderSide,
      );

      if (!response.result) return response;
    }

    if (stopLossPrice) {
      const response = await createStopLoss({
        price: stopLossPrice,
        quantity: orderModel.quantity,
      }, subOrderSide);

      if (!response.result) return response;
    }

    toastStore.showSuccess({
      text: t('order.successfullyCreated'),
    });

    emitOrderCreated(null);

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

  const handleDeleteOrder = async (
    orderId: Order['id'],
  ) => {
    const response = await deleteOrder(orderId);

    if (response.result) {
      emitOrderDeleteOrClose(orderId);
    }

    return response;
  };

  const handleCloseOrder = async (
    orderId: Order['id'],
  ) => {
    const response = await closeOrder(orderId);

    if (response.result) {
      emitOrderDeleteOrClose(orderId);
    }

    return response;
  };

  const removeOrder = async (
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

  return {
    subscribeEvent,
    unsubscribeEvent,
    emitEvent,
    subscribeOrderDelete,
    unsubscribeOrderDelete,
    subscribeOrderCreated,
    unsubscribeOrderCreated,
    pairs,
    pairsMap,
    marketType,
    activePair,
    setPair,
    quoteCurrencyDecimals,
    baseCurrencyDecimals,
    baseCurrencyStep,
    activePairData,
    activePairPrice,
    isFetchingPairs,
    getPairs: handleGetPairs,
    createOrder: handleCreateOrder,
    createListOfTakeProfits,
    createStopLoss,
    getOrderList,
    deleteOrder: handleDeleteOrder,
    closeOrder: handleCloseOrder,
    createOrderGroup,
    removeOrder,
  };
});
