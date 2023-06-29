import { inputType } from './index';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<inputType>;
        default: inputType.TEXT;
    };
    label: {
        type: import("vue").PropType<string>;
        default: undefined;
    };
    mask: {
        type: import("vue").PropType<string>;
    };
    placeholder: {
        type: import("vue").PropType<string>;
        default: undefined;
    };
    inputmode: {
        type: import("vue").PropType<string>;
        default: undefined;
    };
    state: {
        type: import("vue").PropType<import("./index").InputState | import("./index").InputState[]>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("./index").InputSize>;
        default: string;
    };
    isDisabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: import("vue").PropType<string | number>;
        required: true;
        default: string;
    };
    disableTabNavigation: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    tabIndex: {
        type: import("vue").PropType<number>;
        default: number;
    };
    error: {
        type: import("vue").PropType<string>;
    };
    autocomplete: {
        type: import("vue").PropType<string>;
        default: undefined;
    };
    showErrorIcon: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {
    focus: () => Promise<void>;
    togglePassword: () => void;
    isPasswordVisible: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => void;
    input: (value: InputEvent) => void;
    focus: () => void;
    blur: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<inputType>;
        default: inputType.TEXT;
    };
    label: {
        type: import("vue").PropType<string>;
        default: undefined;
    };
    mask: {
        type: import("vue").PropType<string>;
    };
    placeholder: {
        type: import("vue").PropType<string>;
        default: undefined;
    };
    inputmode: {
        type: import("vue").PropType<string>;
        default: undefined;
    };
    state: {
        type: import("vue").PropType<import("./index").InputState | import("./index").InputState[]>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("./index").InputSize>;
        default: string;
    };
    isDisabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: import("vue").PropType<string | number>;
        required: true;
        default: string;
    };
    disableTabNavigation: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    tabIndex: {
        type: import("vue").PropType<number>;
        default: number;
    };
    error: {
        type: import("vue").PropType<string>;
    };
    autocomplete: {
        type: import("vue").PropType<string>;
        default: undefined;
    };
    showErrorIcon: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    onFocus?: (() => any) | undefined;
    onBlur?: (() => any) | undefined;
    onInput?: ((value: InputEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}, {
    type: inputType;
    label: string;
    placeholder: string;
    inputmode: string;
    state: import("./index").InputState | import("./index").InputState[];
    size: import("./index").InputSize;
    isDisabled: boolean;
    modelValue: string | number;
    disableTabNavigation: boolean;
    tabIndex: number;
    autocomplete: string;
    showErrorIcon: boolean;
}, {}>, {
    label?(_: {}): any;
    prepend?(_: {}): any;
    append?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
