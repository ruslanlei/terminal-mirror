import { BaseCurrency, QuoteCurrency } from '@/hooks/useExchange';
import { NumberInputProps } from '@/components/core/numberInput';

export interface ExchangeInputProps {
  modelValue: number,
  isDisabled?: boolean,

  baseCurrency: BaseCurrency,
  quoteCurrency: QuoteCurrency,
  saveOn: NumberInputProps['saveOn'],
}

export interface ExchangeInputEmits {
  (e: 'update:modelValue', value: number): void,
  (e: 'input', value: InputEvent): void,
  (e: 'focus'): void,
  (e: 'blur'): void,
}
