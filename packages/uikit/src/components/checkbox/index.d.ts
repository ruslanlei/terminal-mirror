export { default as UiCheckbox } from "../../../components/checkbox/Checkbox";
export interface CheckboxProps {
    modelValue?: boolean;
    label?: string;
    labelAlignment: 'center' | 'top';
    disableTabNavigation?: boolean;
    isDisabled?: boolean;
    tabIndex?: number;
    state: 'default';
    size: 'md';
}
export interface CheckboxEmits {
    (e: 'update:modelValue', value: boolean): void;
    (e: 'toggle'): void;
    (e: 'focus'): void;
    (e: 'blur'): void;
}
