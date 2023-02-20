import { get } from '@/api';
import { PairData } from '@/api/types/pair';

export interface FavoritePair {
    id: number,
    pair: PairData['id'],
    user: number,
}

export const getFavorites = () => get<FavoritePair[]>('/members/favorites');
