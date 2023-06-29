declare const _default: import("vue").DefineComponent<{
    toast: {
        type: import("vue").PropType<import("./index").IToast>;
        required: true;
    };
    smoothAppearance: {
        type: import("vue").PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    toast: {
        type: import("vue").PropType<import("./index").IToast>;
        required: true;
    };
    smoothAppearance: {
        type: import("vue").PropType<boolean>;
    };
}>> & {
    onClose?: (() => any) | undefined;
}, {}, {}>;
export default _default;
