import { BaseCurrency, QuoteCurrency } from '@/hooks/useExchange';

export interface ExchangeInputProps {
  modelValue: number,
  isDisabled?: boolean,

  baseCurrency: BaseCurrency,
  quoteCurrency: QuoteCurrency,
}

export interface ExchangeInputEmits {
  (e: 'update:modelValue', value: number): void,
  (e: 'input', value: InputEvent): void,
  (e: 'focus'): void,
  (e: 'blur'): void,
}
