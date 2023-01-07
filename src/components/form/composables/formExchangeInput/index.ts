import { ExchangeInputEmits, ExchangeInputProps } from '@/components/core/exchangeInput';
import { NumberInputProps } from '@/components/core/numberInput';

export { default as FormExchangeInput } from './FormExchangeInput.vue';

export interface FormExchangeInputProps extends Omit<ExchangeInputProps, 'modelValue'> {
  name: string,
  formKey?: string,
  min: number,
  max: number,
  saveOn?: NumberInputProps['saveOn'],
}

export interface FormExchangeInputEmits extends ExchangeInputEmits {}
