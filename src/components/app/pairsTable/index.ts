import { TableColumn, TableProps, TableRecord } from '@/components/core/table';
import { PairData } from '@/api/types/pair';

export type PairsTableColumnSlug = 'common' | 'priceAndVolume' | 'last24HoursPercentChange';

export type PairsTableColumn = TableColumn<PairsTableColumnSlug>;

export type PairsTableRecord = TableRecord<PairsTableColumnSlug, {
  common: {
    isFavorite: boolean,
    pairId: PairData['id'],
    base: PairData['base'],
    quote: PairData['quote'],
  },
  priceAndVolume: {
    currentPrice: number,
    totalTrades: PairData['total_trades'] | string,
  }
  last24HoursPercentChange: number | null,
}>;

export interface PairsTableProps {
  pairs: PairData[],
  state?: TableProps['state'],
}

export interface PairsTableEmits {
  (e: 'selectPair', value: PairData['id']): void,
  (e: 'toggleFavorite', value: PairData['id']): void,
}
