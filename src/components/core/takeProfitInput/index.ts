export interface TakeProfitInputProps {
  baseCurrencyStep: number,
  baseCurrencyDecimals: number,
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
