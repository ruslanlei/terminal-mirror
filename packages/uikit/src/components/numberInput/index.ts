export { default as UiNumberInput } from '@/components/numberInput/NumberInput.vue';
export type NumberInputState = /* 'xsSize' | 'smSize' | */ 'defaultColor' | 'alignRight';

export type NumberInputSize = 'xs' | 'sm';

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
  state?: null | NumberInputState | NumberInputState[],
  size?: NumberInputSize,

  isDisabled?: boolean,
  tabIndex?: number,
  roundToDecimalPlaces?: boolean,
  error?: string,
  label?: string,
  hideArrows?: boolean,
  showErrorIcon?: boolean,
  appendMinWidth?: number,
}

export interface NumberInputEmits {
  (e: 'update:modelValue', value: number): void,
  (e: 'input', value: InputEvent | KeyboardEvent): void,
  (e: 'focus', value: InputEvent): void,
  (e: 'blur', value: InputEvent): void,
}
