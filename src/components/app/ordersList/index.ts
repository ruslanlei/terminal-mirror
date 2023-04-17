import { TableColumn, TableRecord } from '@/components/core/table';
import { Order, TakeProfit } from '@/api/types/order';
import { SubOrderTableItem } from '@/components/app/ordersList/subOrdersTable';
import { Pair } from '@/api/types/pair';

export interface OrdersListProps {
  listType: 'active' | 'closed',
}

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
  pair: Pair,
  type: Order['side'],
  volume: number,
  coins: number,
  prices: {
    orderPrice: number,
    current: number | null,
  },
  sl: number | null,
  pnl: {
    value: number | null,
    currency: string,
  },
  tp: number | null,
  date: string,
  comment: Order,
  options: {
    order: Order,
    takeProfits: TakeProfit[] | undefined,
  },
}, SubOrderTableItem[]>;

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
  pair: Pair,
  type: Order['side'],
  volume: number,
  coins: number,
  prices: {
    order: number,
    close: number,
  },
  results: {
    pnl: {
      value: number,
      currency: string,
    },
    pnlPercent: number,
    isPositive: boolean,
    isCancelled: boolean,
    orderStatus: Order['status']
  },
  date: {
    open: string,
    close: string,
  },
  options: {
    order: Order,
    takeProfits: TakeProfit[] | undefined,
  },
}, SubOrderTableItem[]>;
