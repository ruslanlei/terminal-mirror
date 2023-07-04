import {
  InputProps,
} from '@terminal/uikit/components/input';

export { default as FormInput } from './FormInput.vue';

export interface FormInputProps extends Omit<InputProps, 'modelValue'> {
  name: string,
  formKey?: string,
}
