import { TableColumn, TableRecord } from '@/components/core/table';
import { currency } from '@/api/types/currency';
import { Order } from '@/api/types/order';
import { ClosedSubOrderTableItem } from '@/components/app/closedOrdersList/closedSubOrdersTable';

export type ClosedOrdersTableColumnSlug =
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

export type ClosedOrdersTableColumn = TableColumn<ClosedOrdersTableColumnSlug>;

export type ClosedOrdersTableRecord = TableRecord<ClosedOrdersTableColumnSlug, {
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
}, ClosedSubOrderTableItem[]>;
