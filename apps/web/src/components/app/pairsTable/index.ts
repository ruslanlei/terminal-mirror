import { TableColumn, TableProps, TableRecord } from '@terminal/uikit/components/table';
import { Pair } from '@/api/types/pair';

export type PairsTableColumnSlug = 'common' | 'priceAndVolume' | 'last24HoursPercentChange';

export type PairsTableColumn = TableColumn<PairsTableColumnSlug>;

export type PairsTableRecord = TableRecord<PairsTableColumnSlug, {
  common: {
    isFavorite: boolean,
    pairId: Pair['id'],
    base: Pair['base'],
    quote: Pair['quote'],
  },
  priceAndVolume: {
    currentPrice: number,
    totalTrades: Pair['total_trades'] | string,
  }
  last24HoursPercentChange: number | null,
}>;

export interface PairsTableProps {
  pairs: Pair[],
  state?: TableProps['state'],
}

export interface PairsTableEmits {
  (e: 'selectPair', value: Pair['id']): void,
  (e: 'toggleFavorite', value: Pair['id']): void,
}
