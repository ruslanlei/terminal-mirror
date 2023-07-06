export type SelectOption = {
  label: string,
  value: string,
  isSelected: boolean,
};

export type InputSelectOption = Omit<SelectOption, 'isSelected'>;

export type SelectValue = string | string[];

export enum selectDropdownPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export enum selectState {
  PRIMARY = 'primary'
}

export enum selectSize {
  MD = 'md'
}

export interface SelectProps {
  label?: string,
  placeholder?: string,
  isDisabled?: boolean,
  tabIndex?: number,
  disableTabNavigation?: boolean,
  modelValue: SelectValue,
  options: InputSelectOption[],
  error?: string,
  isSearchable?: boolean,
  searchPlaceholder?: string,
  dropdownPosition?: selectDropdownPosition,
  state?: selectState,
  size?: selectSize,
}
