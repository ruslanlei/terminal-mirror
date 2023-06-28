export { default as UiFieldError } from '@/components/fieldError/FieldError.vue';
export type FieldErrorSize = 'sm' | 'lg';

export interface FieldErrorProps {
  text?: string,
  size: FieldErrorSize,
  showIcon?: boolean,
  offset?: number,
}
