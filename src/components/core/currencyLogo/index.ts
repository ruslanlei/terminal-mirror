import { currency } from '@/api/types/currency';

export interface CurrencyLogoProps {
  currency: currency,
  state: 'circle' | 'square',
}
