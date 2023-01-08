export interface DepositInputProps {
  modelValue: number,
  // balance: number,
  quoteCurrencyBalance: number,
  baseCurrencyPrice: number,
  leverage?: number,
  baseCurrencyDecimals: number,
}

export interface DepositInputEmits {
  (e: 'update:modelValue', value: number): void,
}
