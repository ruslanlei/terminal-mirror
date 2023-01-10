import { Currency } from '@/types/currency';

export interface TakeProfit {
  price: number,
  quantity: number,
}

export interface TakeProfitListProps {
  modelValue: TakeProfit[],
  orderPrice: number,
  orderQuantity: number,
  currency: Currency,
}

export interface TakeProfitListEmit {
  (e: 'update:modelValue', value: TakeProfit[]): void,
}
