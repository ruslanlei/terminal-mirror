import { currency } from '@/api/types/currency';

export interface ICurrencyStats {
  currency: currency,
  price: number,
  amount: number | string,
  change: number,
  changePercents: number | string,
  max: number,
  min: number,
}

export interface CurrencyStatsProps {
  stats: ICurrencyStats,
}
