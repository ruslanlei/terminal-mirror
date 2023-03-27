import { get } from '@/api';
import { Pair } from '@/api/types/pair';

export interface FavoritePair {
    id: number,
    pair: Pair['id'],
    user: number,
}

export const getFavorites = () => get<FavoritePair[]>('/members/favorites');
