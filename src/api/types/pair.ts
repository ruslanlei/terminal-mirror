import { Currency } from '@/api/types/currency';

export interface Pair {
  id: number,
  alias: string,
  base: Currency,
  quote: string,
  from_date: string,
  to_date: string,
  total_trades: number,
}
