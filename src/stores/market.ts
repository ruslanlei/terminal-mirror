import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { getPairs } from '@/api/endpoints/marketdata/stats';
import { useToastStore } from '@/stores/toasts';
import { createOrder, CreateOrderDTO } from '@/api/endpoints/orders/create';
import {
  Order,
  StopLoss,
  TakeProfit,
} from '@/api/types/order';
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
import { FavoritePair, getFavorites } from '@/api/endpoints/profile/getFavorites';
import { addToFavorites } from '@/api/endpoints/profile/addToFavorites';
import { removeFromFavorites } from '@/api/endpoints/profile/removeFromFavorites';
import { findAndDelete } from '@/helpers/array';

export type MarketType = 'emulator' | 'real';

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

  const favoritePairs = useStorage<FavoritePair[]>('favoritePairs', []);

  const fetchFavoritePairs = async () => {
    const { result, data } = await getFavorites();

    if (!result) {
      processServerErrors(data);
      return;
    }

    favoritePairs.value = data;
  };

  const handleAddToFavorites = async (
    id: PairData['id'],
  ) => {
    const response = await addToFavorites(id);

    if (!response.result) {
      processServerErrors(response.data);
    } else {
      favoritePairs.value.push(response.data);
    }

    return response;
  };

  const handleRemoveFromFavorites = async (
    id: FavoritePair['id'],
  ) => {
    const response = await removeFromFavorites(id);

    if (!response.result) {
      processServerErrors(response.data);
    } else {
      findAndDelete(
        (favoritePair: FavoritePair) => favoritePair.id === id,
        favoritePairs.value,
      );
    }

    return response;
  };

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
        ...takeProfit,
        pair: activePair.value,
        side,
        order_type: 'tp',
      })),
    );

    if (!response.result) {
      toastStore.showDanger({
        text: t('order.failedToCreateTakeProfits'),
      });
    }

    return response;
  };

  const createStopLoss = async (stopLoss: Pick<StopLoss, 'price' | 'quantity'>, side: Order['side']) => {
    const response = await createOrder({
      ...stopLoss,
      pair: activePair.value,
      side,
      order_type: 'sl',
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

  const activeOrders = ref<Order[]>([]);

  const closedOrders = ref<Order[]>([]);

  const isActiveOrdersForCurrentPairExists = computed(
    () => activeOrders.value.some((order: Order) => order.pair === activePair.value),
  );

  const getActiveOrdersList = async () => {
    const response = await requestMany<Order[][]>([
      getOrdersList('new'),
      getOrdersList('filled'),
    ]);

    if (!response.result) {
      processServerErrors(response.data, t('order.failedToGetList'));
    }

    activeOrders.value = flatten(response.data);
  };

  const getClosedOrdersList = async () => {
    const response = await requestMany<Order[][]>([
      getOrdersList('expired'),
      getOrdersList('canceled'),
      getOrdersList('executed'),
      getOrdersList('closed'),
    ]);

    if (!response.result) {
      processServerErrors(response.data, t('order.failedToGetList'));
    }

    closedOrders.value = flatten(response.data);
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
    takeProfits: TakeProfit[] | undefined,
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
    isFetchingPairs,
    favoritePairs,
    fetchFavoritePairs,
    getPairs: handleGetPairs,
    createOrder: handleCreateOrder,
    createListOfTakeProfits,
    createStopLoss,
    activeOrders,
    closedOrders,
    isActiveOrdersForCurrentPairExists,
    getActiveOrdersList,
    getClosedOrdersList,
    deleteOrder: handleDeleteOrder,
    closeOrder: handleCloseOrder,
    createOrderGroup,
    removeOrder,
    addToFavorites: handleAddToFavorites,
    removeFromFavorites: handleRemoveFromFavorites,
  };
});
