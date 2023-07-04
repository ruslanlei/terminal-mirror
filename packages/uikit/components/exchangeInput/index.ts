import { NumberInputProps } from '../numberInput';

export interface ExchangeInputProps {
  modelValue: number,
  isDisabled?: boolean,
  quoteCurrencyDecimals: number,
  baseCurrencyDecimals: number,
  baseCurrencyStep: number,
  price: number,
  balance: number,
  leverage: number,
  saveOn: NumberInputProps['saveOn'],
}

export interface ExchangeInputEmits {
  (e: 'update:modelValue', value: number): void,
  (e: 'input', value: InputEvent): void,
  (e: 'focus'): void,
  (e: 'blur'): void,
}
