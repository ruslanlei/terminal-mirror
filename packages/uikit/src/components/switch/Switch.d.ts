declare const _default: import("vue").DefineComponent<{
    state: {
        type: import("vue").PropType<"primaryColor" | "primaryColor"[]>;
        required: true;
        default: string;
    };
    isDisabled: {
        type: import("vue").PropType<boolean>;
    };
    modelValue: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    state: {
        type: import("vue").PropType<"primaryColor" | "primaryColor"[]>;
        required: true;
        default: string;
    };
    isDisabled: {
        type: import("vue").PropType<boolean>;
    };
    modelValue: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {
    state: "primaryColor" | "primaryColor"[];
}, {}>;
export default _default;
