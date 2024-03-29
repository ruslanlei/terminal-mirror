import { TableColumn, TableRecord } from '@terminal/uikit/components/table';
import { SubOrderTableItem } from '@/components/orderList/subOrderList';
import { Order, TakeProfit } from '@/api/types/order';
import { Pair } from '@/api/types/pair';
import { PairsMap } from '@/hooks/usePairs';

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

export interface OrderListProps {
  listType: 'active' | 'closed',
  orders: Order[],
  pairsMap: PairsMap,
  page: number,
  perPage: number,
  totalPages: number,
}

export interface OrderListEmits {
  (e: 'deleteOrder', payload: Order): void,
  (e: 'recordClick', payload: ActiveOrdersTableRecord | ClosedOrdersTableRecord): void,
  (e: 'update:page', value: number): void,
  (e: 'update:perPage', value: number): void,
  (e: 'update:totalPages', value: number): void,
}
