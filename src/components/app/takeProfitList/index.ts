import { Currency } from '@/types/currency';
import { TakeProfit } from '@/stores/market';

export interface TakeProfitListProps {
  modelValue: TakeProfit[],
  takeProfitsAmount: number,
  orderPrice: number,
  orderQuantity: number,
  currency: Currency,
}

export interface TakeProfitListEmit {
  (e: 'update:modelValue', value: TakeProfit[]): void,
  (e: 'update:takeProfitsAmount', value: number): void,
}
