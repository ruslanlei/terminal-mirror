import { TakeProfit } from '@terminal/common';

export { default as UiTakeProfitList } from './TakeProfitList.vue';

export interface TakeProfitListProps {
  modelValue: TakeProfit[],
  takeProfitsAmount: number,
  orderPrice: number,
  orderQuantity: number,
  baseCurrencyStep: number,
  baseCurrencyDecimals: number,
  orderSide: 'buy' | 'sell',
}

export interface TakeProfitListEmit {
  (e: 'update:modelValue', value: TakeProfit[]): void,
  (e: 'update:takeProfitsAmount', value: number): void,
}
