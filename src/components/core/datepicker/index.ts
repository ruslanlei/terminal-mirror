export interface DatepickerProps {
  modelValue: string,
  displayDataFormatter?: (unformattedDate: string) => string,
  state?: 'default',
}

export interface DatepickerEmits {
  (e: 'update:modelValue', value: string): void,
}
