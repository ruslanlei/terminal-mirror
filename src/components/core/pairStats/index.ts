import { currency } from '@/api/types/currency';

export interface IPairStats {
  currency: currency,
  price: number | null,
  amount: number | string | null,
  change: number | null,
  changePercents: number | string | null,
  max: number | null,
  min: number | null,
}

export interface CurrencyStatsProps {
  stats: IPairStats,
}
