import { Currency } from '@/types/currency';

export interface TakeProfitInputValue {
  price: number,
  quantity: number,
}

export interface TakeProfitInputProps {
  currency: Currency,
  orderPrice: number,
  orderQuantity: number,

  price: number,
  quantity: number,
}

export interface TakeProfitInputEmits {
  (e: 'update:price', value: number): void,
  (e: 'update:quantity', value: number): void,
  (e: 'quantityInput'): void,
}
