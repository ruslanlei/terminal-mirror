declare const _default: import("vue").DefineComponent<{
    max: {
        type: import("vue").PropType<number>;
        default: number;
    };
    min: {
        type: import("vue").PropType<number>;
        default: number;
    };
    modelValue: {
        type: import("vue").PropType<number>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: number) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    max: {
        type: import("vue").PropType<number>;
        default: number;
    };
    min: {
        type: import("vue").PropType<number>;
        default: number;
    };
    modelValue: {
        type: import("vue").PropType<number>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}, {
    max: number;
    min: number;
}, {}>;
export default _default;
