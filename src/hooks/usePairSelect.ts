import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useMarketStore } from '@/stores/market';
import debounce from 'lodash/debounce';
import { PairData } from '@/api/types/pair';

export const usePairSelect = () => {
  const marketStore = useMarketStore();
  const {
    pairs,
  } = storeToRefs(marketStore);

  const query = ref<string>('');

  const computedPairs = ref<PairData[]>(pairs.value);

  watch(query, debounce(async () => {
    computedPairs.value = pairs.value.filter(
      (pair) => pair.alias.toLowerCase().includes(query.value.toLowerCase()),
    );
  }, 300));

  const setPair = (id: PairData['id']) => {
    marketStore.setPair(id);
  };

  const isTogglingFavorite = ref(false);

  const onToggleFavorite = async (
    id: PairData['id'],
  ) => {
    if (isTogglingFavorite.value) return;

    const favoritePair = marketStore.favoritePairs.find(
      (favoritePair) => favoritePair.pair === id,
    );

    isTogglingFavorite.value = true;

    if (favoritePair) {
      await marketStore.removeFromFavorites(favoritePair.id);
    } else {
      await marketStore.addToFavorites(id);
    }

    isTogglingFavorite.value = false;
  };

  return {
    query,
    pairs: computedPairs,
    getPairs: marketStore.getPairs,
    setPair,
    isTogglingFavorite,
    onToggleFavorite,
  };
};
