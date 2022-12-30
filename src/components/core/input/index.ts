export enum inputType {
  TEXT = 'text',
  PASSWORD = 'password',
  NUMBER = 'number'
}

export interface InputProps {
  modelValue: string | number,
  label?: string,
  placeholder?: string,
  isDisabled?: boolean,
  tabIndex?: number,
  disableTabNavigation?: boolean,
  type?: inputType,
  autocomplete?: string,
  inputmode?: string,
  mask?: string,
  error?: string,
  state?: 'default' | 'secondary2',
  size?: 'sm' | 'md' | 'lg',
}

export interface InputEmits {
  (e: 'update:modelValue', value: string | number): void,
  (e: 'input', value: InputEvent): void,
  (e: 'focus'): void,
  (e: 'blur'): void,
}
