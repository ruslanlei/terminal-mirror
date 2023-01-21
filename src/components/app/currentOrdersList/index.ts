import { TableColumn, TableRecord } from '@/components/core/table';
import { currency } from '@/api/types/currency';
import { Order } from '@/api/types/order';

export type CurrentOrdersTableColumnSlug =
  'pair'
  | 'type'
  | 'volume'
  | 'coins'
  | 'prices'
  | 'sl'
  | 'pnl'
  | 'tp'
  | 'date'
  | 'comment'
  | 'options';

export type CurrentOrdersTableColumn = TableColumn<CurrentOrdersTableColumnSlug>;

export type PairsTableRecord = TableRecord<CurrentOrdersTableColumnSlug, {
  pair: currency,
  type: Order['side'],
  volume: number,
  coins: number,
  prices: {
    orderPrice: number,
    current: number,
  },
  sl: number,
  pnl: number,
  tp: number,
  date: string,
  comment: Order,
  options: Order,
}>;
