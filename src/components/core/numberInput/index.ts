import { roundToDecimalPoint } from '@/utils/number';

export type NumberInputState = 'smSize' | 'defaultColor';

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
}

export interface NumberInputEmits {
  (e: 'update:modelValue', value: number): void,
  (e: 'input', value: InputEvent): void,
  (e: 'focus', value: InputEvent): void,
  (e: 'blur', value: InputEvent): void,
}
