import { TableColumn, TableProps, TableRecord } from '@/components/core/table';
import { Pair } from '@/api/types/pair';

export type PairsTableColumnSlug = 'pairs' | 'priceAndVolume';

export type PairsTableColumn = TableColumn<PairsTableColumnSlug>;

export type PairsTableRecord = TableRecord<PairsTableColumnSlug, {
  pairs: {
    base: Pair['base'],
    quote: Pair['quote'],
  },
  priceAndVolume: {
    totalTrades: Pair['total_trades'] | string,
  }
}>;

export interface PairsTableProps {
  pairs: Pair[],
  state?: TableProps['state'],
}

export interface PairsTableEmits {
  (e: 'selectPair', value: Pair['id']): void,
}
