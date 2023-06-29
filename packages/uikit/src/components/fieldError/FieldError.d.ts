declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    text: {
        type: import("vue").PropType<string>;
    };
    size: {
        type: import("vue").PropType<import("./index").FieldErrorSize>;
        required: true;
        default: string;
    };
    offset: {
        type: import("vue").PropType<number>;
        default: number;
    };
    showIcon: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: import("vue").PropType<string>;
    };
    size: {
        type: import("vue").PropType<import("./index").FieldErrorSize>;
        required: true;
        default: string;
    };
    offset: {
        type: import("vue").PropType<number>;
        default: number;
    };
    showIcon: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>>, {
    size: import("./index").FieldErrorSize;
    offset: number;
    showIcon: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
