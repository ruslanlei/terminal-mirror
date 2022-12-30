import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { getPairs, Pair } from '@/api/endpoints/marketdata/stats';
import { useToastStore } from '@/stores/toasts';

export type MarketType = 'emulator' | 'real';

export const useMarketStore = defineStore('market', () => {
  const { t } = useI18n();

  const toastStore = useToastStore();

  const marketType = useStorage<MarketType>('marketType', 'emulator');

  const pairs = useStorage<Pair[]>('pairs', []);

  const activePair = useStorage<Pair['id']>('activePair', 1);

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

  return {
    marketType,
    activePair,
    activePairData,
    getPairs: handleGetPairs,
  };
});
