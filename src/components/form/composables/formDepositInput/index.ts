import { DepositInputProps } from '@/components/core/depositInput';

export interface FormDepositInputProps extends Omit<DepositInputProps, 'modelValue'> {
  name: string,
  formKey?: string,
}
