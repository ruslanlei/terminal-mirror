import {
  ref,
} from 'vue';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { useOrders } from '@/hooks/useOrders';
import { usePairs } from '@/hooks/usePairs';

export type MarketType = 'emulator' | 'combat';

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
    getActiveorderList,

    closedOrders,
    isClosedOrdersFetched,
    getClosedorderList,

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
    getActiveorderList,

    closedOrders,
    isClosedOrdersFetched,
    getClosedorderList,

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
