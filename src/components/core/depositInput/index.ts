export interface DepositInputProps {
  modelValue: number,
  balance: number,
  baseCurrencyPrice: number,
  leverage?: number,
  decimals?: number,
}

export interface DepositInputEmits {
  (e: 'update:modelValue', value: number): void,
}
