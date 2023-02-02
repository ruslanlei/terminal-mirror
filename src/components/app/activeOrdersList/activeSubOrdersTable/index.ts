import { TableColumn, TableRecord } from '@/components/core/table';
import { currency } from '@/api/types/currency';
import { Order, SubOrder } from '@/api/types/order';
import { PairServerData } from '@/api/types/pairServerData';

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

export interface ActiveSubOrderTableItem extends SubOrder {
  masterData: Order,
  pairData: PairServerData,
  orderIndex?: number,
}

export interface ActiveSubOrdersTableProps {
  orders: ActiveSubOrderTableItem[],
}
