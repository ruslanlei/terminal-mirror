export type NumberInputState = 'smSize' | 'defaultColor'

export interface NumberInputProps {
  modelValue: number,
  min?: number,
  max?: number,
  state?: NumberInputState | NumberInputState[],

  isDisabled?: boolean,
  tabIndex?: number,
}

export interface NumberInputEmits {
  (e: 'update:modelValue', value: number): void,
  (e: 'input', value: InputEvent): void,
  (e: 'focus', value: InputEvent): void,
  (e: 'blur', value: InputEvent): void,
}
