export { default as UiToggleButton } from "../../../components/toggleButton/ToggleButton";
export type ToggleButtonState = 'gradientColor';
export interface ToggleButtonProps {
    modelValue: boolean;
    state?: ToggleButtonState | ToggleButtonState[];
}
export interface ToggleButtonEmits {
    (e: 'update:modelValue', value: boolean): void;
}
