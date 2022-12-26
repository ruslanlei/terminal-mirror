export interface PlayButtonProps {
  modelValue: boolean,
}

export interface PlayButtonEmits {
  (e: 'update:modelValue', value: boolean): void,
}
