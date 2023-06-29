declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    label: {
        type: import("vue").PropType<string>;
    };
    src: {
        type: import("vue").PropType<string>;
    };
    state: {
        type: import("vue").PropType<"success" | "danger">;
    };
    size: {
        type: import("vue").PropType<"sm" | "md">;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: import("vue").PropType<string>;
    };
    src: {
        type: import("vue").PropType<string>;
    };
    state: {
        type: import("vue").PropType<"success" | "danger">;
    };
    size: {
        type: import("vue").PropType<"sm" | "md">;
        default: string;
    };
}>>, {
    size: "sm" | "md";
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
