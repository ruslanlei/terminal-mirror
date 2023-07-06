export { default as UiSwitch } from './Switch.vue';
export type SwitchState = 'primaryColor';

export interface SwitchProps {
  modelValue: boolean,
  state: SwitchState | SwitchState[],
  isDisabled?: boolean,
}

export interface SwitchEmits {
  (e: 'update:modelValue', value: boolean): void,
}
