export interface CurrencyStat {
  label: string,
  value: number | string,
  valueState: 'default' | 'positive' | 'negative'
}

export interface CurrencyStatsColumnProps {
  columnData: CurrencyStat[]
}
