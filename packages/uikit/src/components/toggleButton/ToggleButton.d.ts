declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    state: {
        type: import("vue").PropType<"gradientColor" | "gradientColor"[]>;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    state: {
        type: import("vue").PropType<"gradientColor" | "gradientColor"[]>;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {
    state: "gradientColor" | "gradientColor"[];
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
