import {
  InputSelectOption,
  selectDropdownPosition,
  selectSize,
  selectState,
} from '@/components/core/select';

export { default as FormSelect } from './FormSelect.vue';

export interface FormSelectProps {
  name: string,
  formKey: string,
  label?: string,
  placeholder?: string,
  isDisabled?: boolean,
  tabIndex?: number,
  disableTabNavigation?: boolean,
  options: InputSelectOption[],
  isSearchable?: boolean,
  searchPlaceholder?: string,
  dropdownPosition?: selectDropdownPosition,
  state?: selectState,
  size?: selectSize,
}
