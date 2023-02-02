import { TableColumn, TableRecord } from '@/components/core/table';
import { currency } from '@/api/types/currency';
import { Order } from '@/api/types/order';
import { ActiveSubOrderTableItem } from '@/components/app/activeOrdersList/activeSubOrdersTable';

export type ActiveOrdersTableColumnSlug =
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

export type ActiveOrdersTableColumn = TableColumn<ActiveOrdersTableColumnSlug>;

export type ActiveOrdersTableRecord = TableRecord<ActiveOrdersTableColumnSlug, {
  pair: currency,
  type: Order['side'],
  volume: number,
  coins: number,
  prices: {
    orderPrice: number,
    current: number,
  },
  sl: number | null,
  pnl: {
    value: number,
    currency: string,
  },
  tp: number | null,
  date: string,
  comment: Order,
  options: Order,
}, ActiveSubOrderTableItem[]>;
