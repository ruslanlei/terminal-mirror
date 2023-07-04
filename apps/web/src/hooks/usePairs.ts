import { useI18n } from 'vue-i18n';
import { useToastStore } from '@/stores/toasts';
import { useStorage } from '@vueuse/core';
import { Pair } from '@/api/types/pair';
import { computed, nextTick, ref } from 'vue';
import { isEmpty } from '@terminal/common/utils/object';
import { getPairs } from '@/api/endpoints/marketdata/stats';
import { FavoritePair, getFavorites } from '@/api/endpoints/profile/getFavorites';
import { processServerErrors } from '@/api/common';
import { addToFavorites } from '@/api/endpoints/profile/addToFavorites';
import { removeFromFavorites } from '@/api/endpoints/profile/removeFromFavorites';
import { findAndDelete } from '@terminal/common/utils/array';

export type PairsMap = Record<Pair['id'], Pair>;

export const usePairs = () => {
  const { t } = useI18n();

  const toastStore = useToastStore();

  const pairs = useStorage<Pair[]>('pairs', []);

  const pairsMap = computed<PairsMap>(
    () => pairs.value.reduce((acc, pair: Pair) => ({
      ...acc,
      [pair.id]: pair,
    }), {}),
  );

  const isFetchingPairs = ref(false);

  const isPairsPreFetched = computed(() => !isEmpty(pairs.value));

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
      // wait for fetch if not prefetched
      await handleFetchPairs();
      return;
    }

    // fetch at the background
    handleFetchPairs();
  };

  const activePair = useStorage<Pair['id']>('activePair', 1);

  const activePairData = computed<Pair | undefined>(
    () => pairsMap.value[activePair.value],
  );

  const isSettingPair = ref(false);
  const setPair = async (pairId: Pair['id']) => {
    isSettingPair.value = true;
    activePair.value = pairId;
    await nextTick();
    isSettingPair.value = false;
  };

  const getPairData = (pairId: Pair['id']) => pairsMap.value?.[pairId] || null;

  const favoritePairs = useStorage<FavoritePair[]>('favoritePairs', []);

  const fetchFavoritePairs = async () => {
    const { result, data } = await getFavorites();

    if (!result) {
      processServerErrors(data, t);
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

  return {
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
  };
};
