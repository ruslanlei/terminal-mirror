declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    state: {
        type: import("vue").PropType<import("./index").BadgeState | import("./index").BadgeState[]>;
    };
    size: {
        type: import("vue").PropType<import("./index").BadgeSize>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    state: {
        type: import("vue").PropType<import("./index").BadgeState | import("./index").BadgeState[]>;
    };
    size: {
        type: import("vue").PropType<import("./index").BadgeSize>;
    };
}>>, {}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
