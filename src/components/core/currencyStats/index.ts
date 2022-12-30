import { Currency } from '@/api/endpoints/marketdata/stats';

export interface ICurrencyStats {
  currency: Currency,
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
