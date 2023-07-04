import { post } from '@/api';
import { Pair } from '@terminal/common/types/pair';
import { FavoritePair } from '@/api/endpoints/profile/getFavorites';

export const addToFavorites = (
  pairId: Pair['id'],
) => post<FavoritePair>('/members/favorites', {
  pair: pairId,
});
