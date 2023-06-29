declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    state: {
        type: import("vue").PropType<"blueGradient" | "background1" | "background3" | "background2" | "accent3Transparent">;
        required: true;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    state: {
        type: import("vue").PropType<"blueGradient" | "background1" | "background3" | "background2" | "accent3Transparent">;
        required: true;
        default: string;
    };
}>>, {
    state: "blueGradient" | "background1" | "background3" | "background2" | "accent3Transparent";
}, {}>, {
    head?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
