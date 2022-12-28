export interface DepositInputProps {
  modelValue: number,
  balance: number,
  leveragedBalance: number,
  decimals?: number,
}

export interface DepositInputEmits {
  (e: 'update:modelValue'): void,
}
