declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<number>;
        required: true;
    };
    totalPages: {
        type: import("vue").PropType<number>;
        required: true;
    };
    visiblePageCount: {
        type: import("vue").PropType<number>;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<number>;
        required: true;
    };
    totalPages: {
        type: import("vue").PropType<number>;
        required: true;
    };
    visiblePageCount: {
        type: import("vue").PropType<number>;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: (() => any) | undefined;
}, {
    visiblePageCount: number;
}, {}>;
export default _default;
