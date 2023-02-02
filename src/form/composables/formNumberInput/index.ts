import { NumberInputEmits, NumberInputProps } from '@/components/core/numberInput';

export { default as FormNumberInput } from './FormNumberInput.vue';
export interface FormNumberInputProps extends Omit<NumberInputProps, 'modelValue'> {
  name: string,
  formKey?: string,
}

export interface FormNumberInputEmits extends NumberInputEmits {}
