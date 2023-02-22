import { del } from '@/api';
import { PairData } from '@/api/types/pair';

export const removeFromFavorites = (
  id: PairData['id'],
) => del(`/members/favorites/${id}`);
