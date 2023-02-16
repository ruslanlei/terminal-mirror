import { TableColumn, TableRecord } from '@/components/core/table';
import { MasterOrder, SubOrder } from '@/api/types/order';
import { PairData } from '@/api/types/pair';
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
    currency: string,
  },
  date: string,
  options: SubOrder,
}>;

export interface SubOrderTableItem extends SubOrder {
  masterOrder: MasterOrder,
  pairData: PairData,
  orderIndex?: number,
}

export interface ActiveSubOrdersTableProps {
  orders: SubOrderTableItem[],
  listType: OrdersListProps['listType'],
}

export type ClosedSubOrdersColumnSlug =
    'type'
    | 'masterType'
    | 'quantity'
    | 'volume'
    | 'date'
    | 'options';

export type ClosedSubOrdersColumn = TableColumn<ClosedSubOrdersColumnSlug>;

export type ClosedSubOrdersRecord = TableRecord<ClosedSubOrdersColumnSlug, {
  type: {
    orderType: 'tp' | 'sl',
    value: 'tp' | 'sl',
    index: number,
  },
  masterType: string,
  quantity: {
    value: number,
    percent: number,
  },
  volume: {
    value: number | null,
    currency: string,
  },
  date: string,
}>;
