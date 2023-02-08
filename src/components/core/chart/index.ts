// { open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 }

import { UTCTimestamp } from 'lightweight-charts';

export interface ChartCandle {
  high: number,
  open: number,
  close: number,
  low: number,
  time: number,
}
export interface ChartProps {
  isLoading: boolean,
  dateFrom: UTCTimestamp,
  dateTo: UTCTimestamp,
  data: any[],
}

export interface ChartEmits {
  (e: 'update:dateFrom', value: number): void,
  (e: 'update:dateTo', value: number): void,
}
