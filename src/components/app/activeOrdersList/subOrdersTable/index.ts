import { TableColumn, TableRecord } from '@/components/core/table';
import { currency } from '@/api/types/currency';

export interface SubOrdersTableProps {}

export type SubOrdersColumnSlug =
  'type'
  | 'masterType'
  | 'quantity'
  | 'volume'
  | 'date'
  | 'options'

export type SubOrdersColumn = TableColumn<SubOrdersColumnSlug>;

export type SubOrdersRecord = TableRecord<SubOrdersColumnSlug, {
  type: {
    value: 'tp' | 'sl',
    label: string,
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
  options: any,
}>;
