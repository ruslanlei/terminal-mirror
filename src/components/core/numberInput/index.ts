export type NumberInputState = 'smSize' | 'defaultColor'

export interface NumberInputProps {
  modelValue: number,
  min?: number,
  max?: number,
  state?: NumberInputState | NumberInputState[],
}

export interface NumberInputEmits {
  (e: 'update:modelValue'): void,
}
