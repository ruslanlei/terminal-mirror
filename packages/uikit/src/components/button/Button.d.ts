declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    state: {
        type: import("vue").PropType<import("./index").ButtonState | import("./index").ButtonState[]>;
        default: string;
    };
    size: {
        type: import("vue").PropType<"sm" | "md" | "lg" | "xl">;
    };
    isWide: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    isDisabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    isLoading: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    hideLoaderOnHover: {
        type: import("vue").PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    state: {
        type: import("vue").PropType<import("./index").ButtonState | import("./index").ButtonState[]>;
        default: string;
    };
    size: {
        type: import("vue").PropType<"sm" | "md" | "lg" | "xl">;
    };
    isWide: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    isDisabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    isLoading: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    hideLoaderOnHover: {
        type: import("vue").PropType<boolean>;
    };
}>>, {
    state: import("./index").ButtonState | import("./index").ButtonState[];
    isWide: boolean;
    isDisabled: boolean;
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
