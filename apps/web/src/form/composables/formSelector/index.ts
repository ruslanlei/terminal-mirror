import { SelectorProps } from '@terminal/uikit/components/selector';

export { default as FormSelector } from './FormSelector.vue';
export interface FormSelectorProps extends Omit<SelectorProps, 'modelValue'> {
  name: string,
  formKey?: string,
}
