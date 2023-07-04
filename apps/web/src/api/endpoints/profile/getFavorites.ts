import { get } from '@/api';
import { Pair } from '@terminal/common/types/pair';

export interface FavoritePair {
    id: number,
    pair: Pair['id'],
    user: number,
}

export const getFavorites = () => get<FavoritePair[]>('/members/favorites');
