export { default as FormCheckbox } from './FormCheckbox.vue';

export interface FormCheckboxProps {
  name: string,
  formKey: string,
  label?: string,
  disableTabNavigation?: boolean,
  isDisabled?: boolean,
  tabIndex?: number,
}
