import { TableColumn, TableRecord } from '@/components/core/table';
import { currency } from '@/api/types/currency';
import { MasterOrder, SubOrder } from '@/api/types/order';
import { PairServerData } from '@/api/types/pairServerData';
import { OrdersListProps } from '@/components/app/ordersList';

export type ActiveSubOrdersColumnSlug =
  'type'
  | 'masterType'
  | 'quantity'
  | 'volume'
  | 'date'
  | 'options'

export type ActiveSubOrdersColumn = TableColumn<ActiveSubOrdersColumnSlug>;

export type ActiveSubOrderRecord = TableRecord<ActiveSubOrdersColumnSlug, {
  type: {
    value: 'tp' | 'sl',
    index: number,
  },
  masterType: string,
  quantity: {
    value: number,
    percent: number,
  },
  volume: {
    value: number,
    currency: currency,
  },
  date: string,
  options: SubOrder,
}>;

export interface SubOrderTableItem extends SubOrder {
  masterOrder: MasterOrder,
  pairData: PairServerData,
  orderIndex?: number,
}

export interface ActiveSubOrdersTableProps {
  orders: SubOrderTableItem[],
  listType?: OrdersListProps['listType'],
}

export type ClosedSubOrdersColumnSlug =
    'type'
    | 'masterType'
    | 'quantity'
    | 'pnl'
    | 'date';

export type ClosedSubOrdersColumn = TableColumn<ClosedSubOrdersColumnSlug>;

export type ClosedSubOrdersRecord = TableRecord<ClosedSubOrdersColumnSlug, {
  type: {
    value: 'tp' | 'sl',
    index: number,
  },
  masterType: string,
  quantity: {
    value: number,
    percent: string,
  },
  pnl: {
    value: number,
    currency: currency,
  },
  date: string,
}>;
