import { Pair } from '@terminal/common/types/pair';
import { post } from '@/api';
import { FavoritePair } from '@/api/endpoints/profile/getFavorites';

export const addToFavorites = (
  pairId: Pair['id'],
) => post<FavoritePair>('/members/favorites', {
  pair: pairId,
});
