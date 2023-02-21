import { post } from '@/api';
import { PairData } from '@/api/types/pair';
import { FavoritePair } from '@/api/endpoints/profile/getFavorites';

export const addToFavorites = (
  pairId: PairData['id'],
) => post<FavoritePair>('/members/favorites', {
  pair: pairId,
});
