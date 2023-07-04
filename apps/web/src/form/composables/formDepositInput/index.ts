import { DepositInputProps } from '../../../../../../packages/uikit/components/depositInput';

export { default as FormDepositInput } from './FormDepositInput.vue';

export interface FormDepositInputProps extends Omit<DepositInputProps, 'modelValue'> {
  name: string,
  formKey?: string,
}
