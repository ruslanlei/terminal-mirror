import { Pair } from '@/api/types/pair';
import { del } from '@/api';

export const removeFromFavorites = (
  id: Pair['id'],
) => del(`/members/favorites/${id}`);
