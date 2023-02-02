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
  | 'results'
  | 'date'
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
  results: {
    income: number,
    pnl: number,
  },
  date: {
    open: string,
    close: string,
  },
  options: Order,
}, ClosedSubOrderTableItem[]>;
