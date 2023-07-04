import { NumberInputProps } from '../numberInput';

export { default as UiDepositInput } from './DepositInput.vue';

export interface DepositInputProps {
  modelValue: number,
  quoteCurrencyDecimals: number,
  baseCurrencyDecimals: number,
  baseCurrencyStep: number,
  price: number,
  balance: number,
  leverage: number,
  saveOn?: NumberInputProps['saveOn'],
}

export interface DepositInputEmits {
  (e: 'update:modelValue', value: number): void,
}
