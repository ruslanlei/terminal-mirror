declare const _default: import("vue").DefineComponent<{
    state: {
        type: import("vue").PropType<"circle" | "square">;
        required: true;
        default: string;
    };
    coin: {
        type: import("vue").PropType<string>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    state: {
        type: import("vue").PropType<"circle" | "square">;
        required: true;
        default: string;
    };
    coin: {
        type: import("vue").PropType<string>;
        required: true;
    };
}>>, {
    state: "circle" | "square";
}, {}>;
export default _default;
