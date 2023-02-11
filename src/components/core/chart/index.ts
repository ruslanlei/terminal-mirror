export interface ChartCandle {
  high: number,
  open: number,
  close: number,
  low: number,
  time: number,
}
export interface ChartProps {
  isLoading: boolean,
  dateFrom: string,
  dateTo: string,
  data: any[],
}

export interface ChartEmits {
  (e: 'update:dateFrom', value: string): void,
  (e: 'update:dateTo', value: string): void,
}
