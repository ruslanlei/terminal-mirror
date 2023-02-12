import { currency } from '@/api/types/currency';

export interface PairData {
  id: number,
  alias: string,
  base: currency,
  quote: currency,
  from_date: string,
  to_date: string,
  total_trades: number,
}
