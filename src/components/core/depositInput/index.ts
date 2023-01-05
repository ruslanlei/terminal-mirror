export interface DepositInputProps {
  modelValue: number,
  decimals?: number,
  balance: number,
  leverage?: number,
  // leveragedBalance: number,
}

export interface DepositInputEmits {
  (e: 'update:modelValue', value: number): void,
}
