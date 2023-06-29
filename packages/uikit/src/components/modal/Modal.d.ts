declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    label: {
        type: import("vue").PropType<string>;
    };
    isLoading: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    contentClass: {
        type: import("vue").PropType<string>;
    };
    showClose: {
        type: import("vue").PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: import("vue").PropType<string>;
    };
    isLoading: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    contentClass: {
        type: import("vue").PropType<string>;
    };
    showClose: {
        type: import("vue").PropType<boolean>;
    };
}>>, {
    isLoading: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
