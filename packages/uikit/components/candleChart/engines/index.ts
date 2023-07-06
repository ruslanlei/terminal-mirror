export interface AbstractCandleChartEngineProps {
  dateFrom: string,
  dateTo: string,
  candles: any[],
}

export interface AbstractCandleChartEngineEmits {
  (e: 'update:dateFrom', value: string): void,
  (e: 'update:dateTo', value: string): void,
}
