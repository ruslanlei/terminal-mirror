import { SelectorProps } from '@/components/core/selector';

export { default as FormSelector } from './FormSelector.vue';
export interface FormSelectorProps extends Omit<SelectorProps, 'modelValue'> {
  name: string,
  formKey?: string,
}
