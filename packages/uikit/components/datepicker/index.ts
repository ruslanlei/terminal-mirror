import { DropdownProps } from '../dropdown';

export { default as UiDatepicker } from './Datepicker.vue';

export interface DatepickerProps {
  modelValue: string,
  displayDataFormatter?: (unformattedDate: string) => string,
  state?: 'default',
  placement: DropdownProps['placement'],
  maxDate?: Date | string,
  minDate?: Date | string,
  blockCalendar?: boolean,
  locale: string,
}

export interface DatepickerEmits {
  (e: 'update:modelValue', value: string): void,
  (e: 'triggerClick'): void,
}
