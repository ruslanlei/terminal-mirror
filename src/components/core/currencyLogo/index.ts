import { Currency } from '@/api/endpoints/marketdata/stats';

export interface CurrencyLogoProps {
  currency: Currency,
  state: 'circle' | 'square',
}
