import { Pair } from '@/api/types/pair';

export interface FavoritesListItemProps {
    pairData: Pair,

    last24HoursPercentChange: number | null,
    isActive?: boolean,
}
