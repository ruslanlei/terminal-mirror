import { DropdownProps } from '@/components/core/dropdown';

export interface DatepickerProps {
  modelValue: string,
  displayDataFormatter?: (unformattedDate: string) => string,
  state?: 'default',
  placement: DropdownProps['placement'],
  maxDate?: Date | string,
  minDate?: Date | string,
  blockCalendar?: boolean,
}

export interface DatepickerEmits {
  (e: 'update:modelValue', value: string): void,
  (e: 'triggerClick'): void,
}
