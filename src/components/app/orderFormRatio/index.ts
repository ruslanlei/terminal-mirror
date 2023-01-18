import { QuoteCurrency } from '@/hooks/useExchange';

export interface OrderFormRatioProps {
  ratio: string,
  profit: number,
  risk: number,
  quoteCurrency: QuoteCurrency,
}
