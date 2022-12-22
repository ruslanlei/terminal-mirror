export type DatepickerValue = Date | string;

export interface DatepickerProps {
  modelValue: DatepickerValue,
}

export interface DatepickerEmits {
  (e: 'update:modelValue', value: DatepickerValue): void,
}
