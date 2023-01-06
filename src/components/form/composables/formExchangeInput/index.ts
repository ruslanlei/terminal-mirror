import { ExchangeInputEmits, ExchangeInputProps } from '@/components/core/exchangeInput';

export { default as FormExchangeInput } from './FormExchangeInput.vue';

export interface FormExchangeInputProps extends Omit<ExchangeInputProps, 'modelValue'> {
  name: string,
  formKey?: string,
  min: number,
  max: number,
}

export interface FormExchangeInputEmits extends ExchangeInputEmits {}
