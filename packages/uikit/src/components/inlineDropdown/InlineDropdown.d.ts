declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    state: {
        type: import("vue").PropType<import("./index").InlineDropdownState | import("./index").InlineDropdownState[]>;
        required: true;
    };
    size: {
        type: import("vue").PropType<"lg">;
        required: true;
    };
    gap: {
        type: import("vue").PropType<number>;
        required: true;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    state: {
        type: import("vue").PropType<import("./index").InlineDropdownState | import("./index").InlineDropdownState[]>;
        required: true;
    };
    size: {
        type: import("vue").PropType<"lg">;
        required: true;
    };
    gap: {
        type: import("vue").PropType<number>;
        required: true;
        default: number;
    };
}>>, {
    gap: number;
}, {}>, {
    trigger?(_: {}): any;
    content?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
