export { default as UiFieldError } from './FieldError.vue';
export type FieldErrorSize = 'sm' | 'lg';

export interface FieldErrorProps {
  text?: string,
  size: FieldErrorSize,
  showIcon?: boolean,
  offset?: number,
}
