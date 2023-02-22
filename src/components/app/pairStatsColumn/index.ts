export interface PairStat {
  label: string,
  value: number | string | null,
  valueState: 'default' | 'positive' | 'negative' | 'auto',
}

export interface PairStatsColumnProps {
  columnData: PairStat[]
}
