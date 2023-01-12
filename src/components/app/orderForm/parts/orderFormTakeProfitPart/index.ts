import { BaseCurrency } from '@/hooks/useExchange';
import { CreateOrderDTO } from '@/api/endpoints/orders/create';

export interface OrderFormTakeProfitPartProps {
  baseCurrency: BaseCurrency,
  model: CreateOrderDTO,
}

export interface OrderFormTakeProfitPartEmits {
  (e: 'submit'): void,
}
