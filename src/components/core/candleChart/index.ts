export type ChartCandle = [
  number, // open price
  number, // low price
  number, // high price
  number, // close price
  number, // volume (amount of coins sold)
  number, // amount of orders in candle
  string // iso date string of candle
]

export interface CandleChartProps {
  engine: 'tradingView' /* | 'dxCharts' */
  isLoading: boolean,
  dateFrom: string,
  dateTo: string,
  candles: ChartCandle[],
  noDataBadgeText?: string,
}

export interface CandleChartEmits {
  (e: 'update:dateFrom', value: string): void,
  (e: 'update:dateTo', value: string): void,
}
