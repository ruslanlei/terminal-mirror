import { Currency } from '@/components/core/currencyLogo';

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
