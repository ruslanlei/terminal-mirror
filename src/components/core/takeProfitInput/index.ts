import { BaseCurrency, QuoteCurrency } from '@/hooks/useExchange';

export interface TakeProfitInputValue {
  price: number,
  quantity: number,
}

export interface TakeProfitInputProps {
  modelValue: TakeProfitInputValue,
  baseCurrency: BaseCurrency,
  quoteCurrency: QuoteCurrency,
  orderPrice: number,
  orderQuantity: number,
}

export interface TakeProfitInputEmits {
  (e: 'update:modelValue', value: TakeProfitInputValue): void,
}
