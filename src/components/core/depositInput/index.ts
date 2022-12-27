export interface DepositInputProps {
  modelValue: number,
  balance: number,
}

export interface DepositInputEmits {
  (e: 'update:modelValue'): void,
}
