import {
  computed, nextTick, Ref, ref,
} from 'vue';
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
import { Pair } from '@/api/types/pair';
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
import { useOrders } from '@/hooks/useOrders';

export type MarketType = 'emulator' | 'real';

export const useMarketStore = defineStore('market', () => {
  const { t } = useI18n();

  const toastStore = useToastStore();

  const marketType = useStorage<MarketType>('marketType', 'emulator');

  const pairs = useStorage<Pair[]>('pairs', []);

  const isPairsPreFetched = computed(() => !isEmpty(pairs.value));

  const pairsMap = computed<Record<Pair['id'], Pair>>(
    () => pairs.value.reduce((acc, pair: Pair) => ({
      ...acc,
      [pair.id]: pair,
    }), {}),
  );

  const activePair = useStorage<Pair['id']>('activePair', 1);

  const isSettingPair = ref(false);
  const setPair = async (pairId: Pair['id']) => {
    isSettingPair.value = true;
    activePair.value = pairId;
    await nextTick();
    isSettingPair.value = false;
  };

  const getPairData = (pairId: Pair['id']) => pairsMap.value?.[pairId] || null;

  const activePairData = computed<Pair | undefined>(
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
    id: Pair['id'],
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

  const {
    activeOrders,
    isActiveOrdersForCurrentPairExists,
    getActiveOrdersList,

    closedOrders,
    getClosedOrdersList,

    handleCreateOrder,
    createListOfTakeProfits,
    createStopLoss,
    subscribeOrderCreated,
    createOrderGroup,

    subscribeOrderDelete,
    handleDeleteOrder,
    handleCloseOrder,
    deleteOrCloseAllExistingOrdersForCurrentPair,
    removeOrder,
    showRemoveOrderModal,
  } = useOrders(activePair);

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
