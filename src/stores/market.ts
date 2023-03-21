import { computed, nextTick, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { Subject } from 'rxjs';
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
import { compose } from '@/utils/fp';
import { filter, flatten, map } from '@/utils/array';
import { deleteOrder } from '@/api/endpoints/orders/delete';
import { closeOrder } from '@/api/endpoints/orders/cancel';
import { OrderModel } from '@/hooks/useOrderCreate';
import { modalType, useModalStore } from '@/stores/modals';
import { FavoritePair, getFavorites } from '@/api/endpoints/profile/getFavorites';
import { addToFavorites } from '@/api/endpoints/profile/addToFavorites';
import { removeFromFavorites } from '@/api/endpoints/profile/removeFromFavorites';
import { findAndDelete } from '@/helpers/array';
import { getBalance } from '@/api/endpoints/profile/getBalance';
import { isEmpty } from '@/utils/object';

export type MarketType = 'emulator' | 'real';

export const useMarketStore = defineStore('market', () => {
  const { t } = useI18n();

  const toastStore = useToastStore();
  const modalStore = useModalStore();

  const orderDeleteSubject = new Subject<Order>();

  const subscribeOrderDelete = (
    callback: (order: Order) => any,
  ) => orderDeleteSubject.subscribe(callback);

  const emitOrderDeleteOrClose = (order: Order) => {
    orderDeleteSubject.next(order);
  };

  const orderCreatedEventSubject = new Subject<Order>();
  const subscribeOrderCreated = (
    callback: (order: Order) => void,
  ) => orderCreatedEventSubject.subscribe(callback);
  const emitOrderCreated = (order: Order) => {
    orderCreatedEventSubject.next(order);
  };

  const marketType = useStorage<MarketType>('marketType', 'emulator');

  const pairs = useStorage<PairData[]>('pairs', []);

  const isPairsPreFetched = computed(() => !isEmpty(pairs.value));

  const pairsMap = computed<Record<PairData['id'], PairData>>(
    () => pairs.value.reduce((acc, pair: PairData) => ({
      ...acc,
      [pair.id]: pair,
    }), {}),
  );

  const activePair = useStorage<PairData['id']>('activePair', 1);

  const isSettingPair = ref(false);
  const setPair = async (pairId: PairData['id']) => {
    isSettingPair.value = true;
    activePair.value = pairId;
    await nextTick();
    isSettingPair.value = false;
  };

  const getPairData = (pairId: PairData['id']) => pairsMap.value?.[pairId] || null;

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
  const handleFetchPairs = async () => {
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

  const fetchPairs = async () => {
    if (!isPairsPreFetched.value) {
      await handleFetchPairs();
      return;
    }

    handleFetchPairs();
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

    if (response.result) {
      // @ts-ignore
      emitOrderCreated(response.data);
    }

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
    order: Order,
  ) => {
    const response = await deleteOrder(order.id);

    if (response.result) {
      emitOrderDeleteOrClose({
        ...order,
        status: 'canceled',
      });
    } else {
      processServerErrors(response);
    }

    return response;
  };

  const handleCloseOrder = async (
    order: Order,
  ) => {
    const response = await closeOrder(order.id);

    if (response.result) {
      emitOrderDeleteOrClose({
        ...order,
        status: 'closed',
      });
    } else {
      processServerErrors(response);
    }

    return response;
  };

  const deleteOrCloseAllExistingOrdersForCurrentPair = async () => {
    const activePairActiveOrders = filter(
      (order: Order) => order.pair === activePair.value,
      activeOrders.value,
    );

    const response = await compose(
      requestMany,
      map((order: Order) => (
        order.status === 'new'
          ? deleteOrder(order.id)
          : closeOrder(order.id)
      )),
      filter((order: Order) => order.order_type === 'limit'),
    )(activePairActiveOrders);

    if (response.result) {
      activePairActiveOrders.forEach((order: Order) => {
        emitOrderDeleteOrClose(order);
      });
      await getBalance();
    } else {
      processServerErrors(response.result);
    }

    return response;
  };

  const removeOrder = async (
    order: Order,
  ) => {
    const isOrderFilled = order.status === 'filled';

    const { result, data } = await (
      isOrderFilled
        ? handleCloseOrder
        : handleDeleteOrder
    )(order);

    if (result) {
      toastStore.showSuccess({
        text: t('order.successfullyClosed', {
          pair: pairsMap.value?.[order.pair]?.alias,
        }),
        duration: 7000,
      });
    } else {
      processServerErrors(data);
    }
  };

  const showRemoveOrderModal = (
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
    subscribeOrderDelete,
    subscribeOrderCreated,
    pairs,
    isPairsPreFetched,
    pairsMap,
    marketType,
    activePair,
    isSettingPair,
    setPair,
    getPairData,
    quoteCurrencyDecimals,
    baseCurrencyDecimals,
    baseCurrencyStep,
    activePairData,
    isFetchingPairs,
    favoritePairs,
    fetchFavoritePairs,
    fetchPairs,
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
    deleteOrCloseAllExistingOrdersForCurrentPair,
    showRemoveOrderModal,
  };
});
