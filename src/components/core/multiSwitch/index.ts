export type MultiSwitchOption = {
  label: string,
  value: string,
} & Record<any, any>;

export interface MultiSwitchProps {
  options: MultiSwitchOption[],
  modelValue: string,
  state?: 'primary' | 'primaryUnderline' | 'underline',
  label?: string,
}

export interface MultiSwitchEmits {
  (e: 'update:modelValue', value: string): void,
}
