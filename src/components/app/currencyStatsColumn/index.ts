export interface CurrencyStat {
  label: string,
  value: number | string | null,
  valueState: 'default' | 'positive' | 'negative'
}

export interface CurrencyStatsColumnProps {
  columnData: CurrencyStat[]
}
