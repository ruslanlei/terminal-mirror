import { BaseCurrency, QuoteCurrency } from '@/hooks/useExchange';

export interface TakeProfitInputValue {
  price: number,
  quantity: number,
}

export interface TakeProfitInputProps {
  // modelValue: TakeProfitInputValue,
  baseCurrency: BaseCurrency,
  quoteCurrency: QuoteCurrency,
  orderPrice: number,
  orderQuantity: number,

  price: number,
  quantity: number,
}

export interface TakeProfitInputEmits {
  // (e: 'update:modelValue', value: TakeProfitInputValue): void,
  (e: 'update:price', value: number): void,
  (e: 'update:quantity', value: number): void,
  (e: 'quantityInput'): void,
}
