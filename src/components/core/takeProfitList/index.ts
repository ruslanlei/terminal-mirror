export interface TakeProfit {
  price: number,
  quantity: number,
}

export interface TakeProfitListProps {
  modelValue: TakeProfit[],
}

export interface TakeProfitListEmit {
  (e: 'update:modelValue', value: TakeProfit[]): void,
}
