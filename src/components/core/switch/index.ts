export type SwitchState = 'primaryColor';

export interface SwitchProps {
  modelValue: boolean,
  state: SwitchState | SwitchState[],
}

export interface SwitchEmits {
  (e: 'update:modelValue', value: boolean): void,
}
