import { del } from '@/api';
import { Pair } from '@/api/types/pair';

export const removeFromFavorites = (
  id: Pair['id'],
) => del(`/members/favorites/${id}`);
