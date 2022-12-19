export type SelectorOption = {
  label: string,
  value: string,
} & Record<any, any>;

export interface SelectorProps {
  options: SelectorOption[],
  modelValue: string,
  state?: 'primary' | 'primaryUnderline' | 'underline',
  label?: string,
  thickening?: number,
}

export interface SelectorEmits {
  (e: 'update:modelValue', value: string): void,
}
