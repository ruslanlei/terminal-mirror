import { BaseCurrency, QuoteCurrency } from '@/hooks/useExchange';
import { NumberInputProps } from '@/components/core/numberInput';

export interface DepositInputProps {
  modelValue: number,
  // balance: number,
  leverage?: number,

  quoteCurrency: QuoteCurrency,
  baseCurrency: BaseCurrency,
  saveOn?: NumberInputProps['saveOn'],

  // quoteCurrencyBalance: number,
  // baseCurrencyPrice: number,
  // baseCurrencyDecimals: number,
}

export interface DepositInputEmits {
  (e: 'update:modelValue', value: number): void,
}
