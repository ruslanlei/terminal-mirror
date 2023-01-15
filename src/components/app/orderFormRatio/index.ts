import { QuoteCurrency } from '@/hooks/useExchange';

export interface OrderFormRatioProps {
  profit: number,
  risk: number,
  quoteCurrency: QuoteCurrency,
}
