export type NumberInputState = 'xsSize' | 'smSize' | 'defaultColor' | 'alignRight';

export type NumberInputNormalizer = (number: number, direction?: 'increment' | 'decrement') => number;

export interface NumberInputProps {
  modelValue: number,
  min?: number,
  max?: number,

  step?: number,
  decimals?: number,
  normalizer?: NumberInputNormalizer,
  saveOn?: 'input' | 'blur',
  normalizeOnKeydown?: boolean,
  state?: NumberInputState | NumberInputState[],

  isDisabled?: boolean,
  tabIndex?: number,
  roundToDecimalPoint?: boolean,
  error?: string,
  label?: string,
  hideArrows?: boolean,
  showErrorIcon?: boolean,
}

export interface NumberInputEmits {
  (e: 'update:modelValue', value: number): void,
  (e: 'input', value: InputEvent | KeyboardEvent): void,
  (e: 'focus', value: InputEvent): void,
  (e: 'blur', value: InputEvent): void,
}
