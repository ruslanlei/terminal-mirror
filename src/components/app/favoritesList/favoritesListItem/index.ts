import { PairData } from '@/api/types/pair';

export interface FavoritesListItemProps {
    pairData: PairData,

    last24HoursPercentChange: number | null,
}
