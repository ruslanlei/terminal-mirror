export interface DatepickerProps {
  modelValue: string,
  displayDataFormatter?: (unformattedDate: string) => string,
}

export interface DatepickerEmits {
  (e: 'update:modelValue', value: string): void,
}
