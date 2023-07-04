import { Pair } from '@terminal/common/types/pair';

export interface FavoritesListItemProps {
    pairData: Pair,

    last24HoursPercentChange: number | null,
    isActive?: boolean,
}
