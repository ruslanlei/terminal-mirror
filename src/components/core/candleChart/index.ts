import { Time } from 'lightweight-charts';

export interface ChartCandle {
  high: number,
  open: number,
  close: number,
  low: number,
  time: Time,
}
export interface CandleChartProps {
  isLoading: boolean,
  dateFrom: string,
  dateTo: string,
  data: ChartCandle[],
  noDataBadgeText?: string,
}

export interface CandleChartEmits {
  (e: 'update:dateFrom', value: string): void,
  (e: 'update:dateTo', value: string): void,
}
