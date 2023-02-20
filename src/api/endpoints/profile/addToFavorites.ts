import { post } from '@/api';
import { PairData } from '@/api/types/pair';

export const addToFavorites = (
  pairId: PairData['id'],
) => post('/members/favorites', {
  pair: pairId,
});
