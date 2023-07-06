import { TableColumn, TableRecord } from '@terminal/uikit/components/table';
import { OrderListProps } from '@/components/orderList';
import { MasterOrder, SubOrder } from '@/api/types/order';
import { Pair } from '@/api/types/pair';

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
  pairData: Pair,
  orderIndex?: number,
}

export interface SubOrderListProps {
  orders: SubOrderTableItem[],
  listType: OrderListProps['listType'],
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
