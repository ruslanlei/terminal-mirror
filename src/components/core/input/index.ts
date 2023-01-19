export enum inputType {
  TEXT = 'text',
  PASSWORD = 'password',
  NUMBER = 'number'
}

export type InputState =
  'defaultColor'
  | 'secondary2Color'
  | 'smSize'
  | 'mdSize'
  | 'lgSize'

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
  state?: InputState | InputState[],
  showErrorIcon?: boolean,
}

export interface InputEmits {
  (e: 'update:modelValue', value: string | number): void,
  (e: 'input', value: InputEvent): void,
  (e: 'focus'): void,
  (e: 'blur'): void,
}
