export interface Pair {
  id: number,
  alias: string,
  base: string,
  quote: string,
  from_date: string,
  to_date: string,
  total_trades: number,
}

export type PairMap = Record<Pair['id'], Pair>;
