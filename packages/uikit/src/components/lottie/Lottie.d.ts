declare const _default: import("vue").DefineComponent<{
    path: {
        type: import("vue").PropType<string>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    dataReady: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    path: {
        type: import("vue").PropType<string>;
        required: true;
    };
}>> & {
    onDataReady?: (() => any) | undefined;
}, {}, {}>;
export default _default;
