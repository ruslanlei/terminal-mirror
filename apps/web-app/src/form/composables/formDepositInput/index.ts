import { DepositInputProps } from '@/components/core/depositInput';

export { default as FormDepositInput } from './FormDepositInput.vue';

export interface FormDepositInputProps extends Omit<DepositInputProps, 'modelValue'> {
  name: string,
  formKey?: string,
}
