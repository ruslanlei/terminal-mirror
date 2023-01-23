import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useMarketStore } from '@/stores/market';
import debounce from 'lodash/debounce';
import { Pair } from '@/api/types/pair';

export const usePairSelect = () => {
  const marketStore = useMarketStore();
  const {
    pairs,
  } = storeToRefs(marketStore);

  const query = ref<string>('');

  const computedPairs = ref<Pair[]>(pairs.value);

  watch(query, debounce(async () => {
    computedPairs.value = pairs.value.filter(
      (pair) => pair.alias.toLowerCase().includes(query.value.toLowerCase()),
    );
  }, 300));

  const setPair = (id: Pair['id']) => {
    marketStore.setPair(id);
  };

  return {
    query,
    pairs: computedPairs,
    getPairs: marketStore.getPairs,
    setPair,
  };
};
