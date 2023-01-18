import { BaseCurrency, QuoteCurrency } from '@/hooks/useExchange';
import { NumberInputProps } from '@/components/core/numberInput';

export interface DepositInputProps {
  modelValue: number,
  // balance: number,
  leverage?: number,

  quoteCurrency: QuoteCurrency,
  baseCurrency: BaseCurrency,
  saveOn?: NumberInputProps['saveOn'],
}

export interface DepositInputEmits {
  (e: 'update:modelValue', value: number): void,
}
