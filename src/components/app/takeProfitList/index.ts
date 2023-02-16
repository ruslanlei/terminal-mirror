import { TakeProfit } from '@/stores/market';

export interface TakeProfitListProps {
  modelValue: TakeProfit[],
  takeProfitsAmount: number,
  orderPrice: number,
  orderQuantity: number,
  baseCurrencyStep: number,
  baseCurrencyDecimals: number,
}

export interface TakeProfitListEmit {
  (e: 'update:modelValue', value: TakeProfit[]): void,
  (e: 'update:takeProfitsAmount', value: number): void,
}
