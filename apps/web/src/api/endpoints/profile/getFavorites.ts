import { Pair } from '@terminal/common/types/pair';
import { get } from '@/api';

export interface FavoritePair {
    id: number,
    pair: Pair['id'],
    user: number,
}

export const getFavorites = () => get<FavoritePair[]>('/members/favorites');
