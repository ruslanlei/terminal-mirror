export interface DepositInputProps {
  modelValue: number,
  balance: number,
  decimals?: number,
}

export interface DepositInputEmits {
  (e: 'update:modelValue'): void,
}
