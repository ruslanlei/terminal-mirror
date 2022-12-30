import { Pair } from '@/api/endpoints/marketdata/stats';
import { TableColumn, TableProps, TableRecord } from '@/components/core/table';

export type PairsTableColumnSlug = 'pairs' | 'priceAndVolume';

export type PairsTableColumn = TableColumn<PairsTableColumnSlug>;

export type PairsTableRecord = TableRecord<PairsTableColumnSlug, {
  pairs: {
    base: Pair['base'],
    quote: Pair['quote'],
  },
  priceAndVolume: {
    totalTrades: Pair['total_trades'],
  }
}>;

export interface PairsTableProps {
  pairs: Pair[],
  state?: TableProps['state'],
}
