import { NumberInputProps } from '@/components/core/numberInput';

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
