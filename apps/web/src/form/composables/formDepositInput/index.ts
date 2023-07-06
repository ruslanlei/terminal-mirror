import { DepositInputProps } from '@terminal/uikit/components/depositInput/depositInput';

export { default as FormDepositInput } from './FormDepositInput.vue';

export interface FormDepositInputProps extends Omit<DepositInputProps, 'modelValue'> {
  name: string,
  formKey?: string,
}
