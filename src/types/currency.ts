import { currency } from '@/api/types/currency';

export interface Currency {
  name: currency,
  decimals: number,
  step: number,
}
