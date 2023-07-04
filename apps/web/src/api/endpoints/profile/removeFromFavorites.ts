import { del } from '@/api';
import { Pair } from '@terminal/common/types/pair';

export const removeFromFavorites = (
  id: Pair['id'],
) => del(`/members/favorites/${id}`);
