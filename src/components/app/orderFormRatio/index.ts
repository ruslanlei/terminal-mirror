import { QuoteCurrency } from '@/hooks/useExchange';

export interface OrderFormRatioProps {
  ratio: string,
  profit: string,
  risk: string,
  quoteCurrency: QuoteCurrency,
}
