declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<string>;
        required: true;
    };
    contentClass: {
        type: import("vue").PropType<string>;
    };
    tabs: {
        type: import("vue").PropType<import("./index").Tab<string>[]>;
        required: true;
    };
    selectorProps: {
        type: import("vue").PropType<Partial<import("..").SelectorProps>>;
        default: () => {
            state: string[];
        };
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<string>;
        required: true;
    };
    contentClass: {
        type: import("vue").PropType<string>;
    };
    tabs: {
        type: import("vue").PropType<import("./index").Tab<string>[]>;
        required: true;
    };
    selectorProps: {
        type: import("vue").PropType<Partial<import("..").SelectorProps>>;
        default: () => {
            state: string[];
        };
    };
}>> & {
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}, {
    selectorProps: Partial<import("..").SelectorProps>;
}, {}>, Partial<Record<string, (_: {}) => any>>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
