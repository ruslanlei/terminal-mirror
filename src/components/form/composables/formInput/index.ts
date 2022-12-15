import {
  InputProps,
} from '@/components/core/input';

export { default as FormInput } from './FormInput.vue';

export interface FormInputProps extends Omit<InputProps, 'modelValue'> {
  name: string,
  formKey?: string,
}
