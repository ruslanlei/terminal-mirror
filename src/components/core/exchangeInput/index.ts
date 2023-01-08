export interface ExchangeInputProps {
  modelValue: number,
  baseCurrencyPrice: number,
  baseCurrencyDecimals: number,
  baseCurrencyStep: number,
  quoteCurrencyDecimals: number,
  min?: number,
  max: number,
  isDisabled?: boolean,
}

export interface ExchangeInputEmits {
  (e: 'update:modelValue', value: number): void,
  (e: 'input', value: InputEvent): void,
  (e: 'focus'): void,
  (e: 'blur'): void,
}
