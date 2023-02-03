import { TableColumn, TableRecord } from '@/components/core/table';
import { currency } from '@/api/types/currency';
import { Order, SubOrder } from '@/api/types/order';
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

export type ActiveSubOrdersRecord = TableRecord<ActiveSubOrdersColumnSlug, {
  type: {
    value: 'tp' | 'sl',
    label: string,
  },
  masterType: string,
  quantity: {
    value: number,
    percent: string,
  },
  volume: {
    value: number,
    currency: currency,
  },
  date: string,
  options: any,
}>;

export interface SubOrderTableItem extends SubOrder {
  masterData: Order,
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
    label: string,
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
