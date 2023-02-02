import { TableColumn, TableRecord } from '@/components/core/table';
import { currency } from '@/api/types/currency';
import { Order, SubOrder } from '@/api/types/order';
import { PairServerData } from '@/api/types/pairServerData';

export type ClosedSubOrdersColumnSlug =
  'type'
  | 'masterType'
  | 'quantity'
  | 'volume'
  | 'date'
  | 'options'

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
  volume: {
    value: number,
    currency: currency,
  },
  date: string,
  options: any,
}>;

export interface ClosedSubOrderTableItem extends SubOrder {
  masterData: Order,
  pairData: PairServerData,
  orderIndex?: number,
}

export interface ClosedSubOrdersTableProps {
  orders: ClosedSubOrderTableItem[],
}
