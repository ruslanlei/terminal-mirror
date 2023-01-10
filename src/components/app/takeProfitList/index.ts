export interface TakeProfit {
  price: number,
  quantity: number,
}

export interface TakeProfitListProps {
  modelValue: TakeProfit[],
  orderPrice: number,
  orderQuantity: number,
}

export interface TakeProfitListEmit {
  (e: 'update:modelValue', value: TakeProfit[]): void,
}
