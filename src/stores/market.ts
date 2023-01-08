import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { getPairs } from '@/api/endpoints/marketdata/stats';
import { Pair } from '@/api/types/pair';
import { useToastStore } from '@/stores/toasts';
import { createOrder, CreateOrderDTO } from '@/api/endpoints/orders/create';

export type MarketType = 'emulator' | 'real';

export const useMarketStore = defineStore('market', () => {
  const { t } = useI18n();

  const toastStore = useToastStore();

  const marketType = useStorage<MarketType>('marketType', 'emulator');

  const pairs = useStorage<Pair[]>('pairs', []);

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
      toastStore.showDanger({
        text: t('order.failedToCreate'),
      });
    }

    return response;
  };

  return {
    pairs,
    marketType,
    activePair,
    setPair,
    activePairData,
    getPairs: handleGetPairs,
    createOrder: handleCreateOrder,
  };
});
