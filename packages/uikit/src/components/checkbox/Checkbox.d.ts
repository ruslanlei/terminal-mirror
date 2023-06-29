declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    label: {
        type: import("vue").PropType<string>;
    };
    state: {
        type: import("vue").PropType<"default">;
        required: true;
        default: string;
    };
    size: {
        type: import("vue").PropType<"md">;
        required: true;
        default: string;
    };
    isDisabled: {
        type: import("vue").PropType<boolean>;
    };
    modelValue: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    labelAlignment: {
        type: import("vue").PropType<"top" | "center">;
        required: true;
        default: string;
    };
    disableTabNavigation: {
        type: import("vue").PropType<boolean>;
    };
    tabIndex: {
        type: import("vue").PropType<number>;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
    toggle: () => void;
    focus: () => void;
    blur: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: import("vue").PropType<string>;
    };
    state: {
        type: import("vue").PropType<"default">;
        required: true;
        default: string;
    };
    size: {
        type: import("vue").PropType<"md">;
        required: true;
        default: string;
    };
    isDisabled: {
        type: import("vue").PropType<boolean>;
    };
    modelValue: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    labelAlignment: {
        type: import("vue").PropType<"top" | "center">;
        required: true;
        default: string;
    };
    disableTabNavigation: {
        type: import("vue").PropType<boolean>;
    };
    tabIndex: {
        type: import("vue").PropType<number>;
        default: number;
    };
}>> & {
    onFocus?: (() => any) | undefined;
    onBlur?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onToggle?: (() => any) | undefined;
}, {
    state: "default";
    size: "md";
    modelValue: boolean;
    labelAlignment: "top" | "center";
    tabIndex: number;
}, {}>, {
    label?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
