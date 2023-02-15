import { currency } from '@/api/types/currency';

export interface IPairStats {
  currency: currency,
  price: number,
  amount: number | string,
  change: number,
  changePercents: number | string,
  max: number,
  min: number,
}

export interface CurrencyStatsProps {
  stats: IPairStats,
}
