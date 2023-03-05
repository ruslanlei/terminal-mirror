export interface PlayButtonProps {
  modelValue: boolean,
  isDisabled?: boolean,
}

export interface PlayButtonEmits {
  (e: 'update:modelValue', value: boolean): void,
}
