declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    text: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
    animationType: {
        type: import("vue").PropType<"verticalAuto" | "verticalBack" | "verticalForward">;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
    animationType: {
        type: import("vue").PropType<"verticalAuto" | "verticalBack" | "verticalForward">;
        default: string;
    };
}>>, {
    animationType: "verticalAuto" | "verticalBack" | "verticalForward";
}, {}>, {
    default?(_: {
        value: string | number;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
