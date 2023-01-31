import { TableColumn, TableProps, TableRecord } from '@/components/core/table';
import { PairServerData } from '@/api/types/pairServerData';

export type PairsTableColumnSlug = 'pairs' | 'priceAndVolume';

export type PairsTableColumn = TableColumn<PairsTableColumnSlug>;

export type PairsTableRecord = TableRecord<PairsTableColumnSlug, {
  pairs: {
    base: PairServerData['base'],
    quote: PairServerData['quote'],
  },
  priceAndVolume: {
    totalTrades: PairServerData['total_trades'] | string,
  }
}>;

export interface PairsTableProps {
  pairs: PairServerData[],
  state?: TableProps['state'],
}

export interface PairsTableEmits {
  (e: 'selectPair', value: PairServerData['id']): void,
}
