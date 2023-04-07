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
import {
  filter, findAndDelete, flatten, map,
} from '@/utils/array';
import { deleteOrder } from '@/api/endpoints/orders/delete';
import { closeOrder } from '@/api/endpoints/orders/cancel';
import { OrderModel } from '@/hooks/useOrderCreate';
import { modalType, useModalStore } from '@/stores/modals';
import { FavoritePair, getFavorites } from '@/api/endpoints/profile/getFavorites';
import { addToFavorites } from '@/api/endpoints/profile/addToFavorites';
import { removeFromFavorites } from '@/api/endpoints/profile/removeFromFavorites';
import { getBalance } from '@/api/endpoints/profile/getBalance';
import { isEmpty } from '@/utils/object';
import { useOrders } from '@/hooks/useOrders';
import { usePairs } from '@/hooks/usePairs';

export type MarketType = 'emulator' | 'real';

export const useMarketStore = defineStore('market', () => {
  const marketType = useStorage<MarketType>('marketType', 'emulator');

  const baseCurrencyDecimals = ref(Number(import.meta.env.VITE_APP_BASE_CURRENCY_DECIMALS));
  const quoteCurrencyDecimals = ref(Number(import.meta.env.VITE_APP_QUOTE_CURRENCY_DECIMALS));

  const baseCurrencyStep = ref(0.001);

  const {
    pairs,
    pairsMap,
    isFetchingPairs,
    isPairsPreFetched,
    fetchPairs,

    activePair,
    activePairData,
    isSettingPair,
    setPair,
    getPairData,

    favoritePairs,
    fetchFavoritePairs,
    handleAddToFavorites,
    handleRemoveFromFavorites,
  } = usePairs();

  const {
    activeOrders,
    isActiveOrdersFetched,
    isActiveOrdersForCurrentPairExists,
    getActiveOrdersList,

    closedOrders,
    isClosedOrdersFetched,
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
    marketType,
    quoteCurrencyDecimals,
    baseCurrencyDecimals,
    baseCurrencyStep,

    pairs,
    pairsMap,
    isFetchingPairs,
    isPairsPreFetched,
    fetchPairs,

    activePair,
    activePairData,
    isSettingPair,
    setPair,
    getPairData,

    favoritePairs,
    fetchFavoritePairs,
    handleAddToFavorites,
    handleRemoveFromFavorites,

    activeOrders,
    isActiveOrdersFetched,
    isActiveOrdersForCurrentPairExists,
    getActiveOrdersList,

    closedOrders,
    isClosedOrdersFetched,
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

    createOrder: handleCreateOrder,
    deleteOrder: handleDeleteOrder,
    closeOrder: handleCloseOrder,
    addToFavorites: handleAddToFavorites,
    removeFromFavorites: handleRemoveFromFavorites,
  };
});
