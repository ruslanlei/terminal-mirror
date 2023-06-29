declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    text: {
        type: import("vue").PropType<string>;
    };
    isInline: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    state: {
        type: import("vue").PropType<import("./index").TypographyState | import("./index").TypographyState[] | null>;
        default: () => never[];
    };
    size: {
        type: import("vue").PropType<import("./index").TypographySize | import("./index").TypographySize[] | null>;
        default: () => null;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: import("vue").PropType<string>;
    };
    isInline: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    state: {
        type: import("vue").PropType<import("./index").TypographyState | import("./index").TypographyState[] | null>;
        default: () => never[];
    };
    size: {
        type: import("vue").PropType<import("./index").TypographySize | import("./index").TypographySize[] | null>;
        default: () => null;
    };
}>>, {
    isInline: boolean;
    state: import("./index").TypographyState | import("./index").TypographyState[] | null;
    size: import("./index").TypographySize | import("./index").TypographySize[] | null;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
