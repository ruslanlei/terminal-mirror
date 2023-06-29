declare const _default: import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<"slim" | "full">;
        required: true;
        default: string;
    };
    state: {
        type: import("vue").PropType<import("./index").LogoState | import("./index").LogoState[]>;
        default: string;
    };
    size: {
        type: import("vue").PropType<"sm" | "md" | "lg" | "xl">;
        default: string;
    };
    shape: {
        type: import("vue").PropType<"circle" | "square">;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<"slim" | "full">;
        required: true;
        default: string;
    };
    state: {
        type: import("vue").PropType<import("./index").LogoState | import("./index").LogoState[]>;
        default: string;
    };
    size: {
        type: import("vue").PropType<"sm" | "md" | "lg" | "xl">;
        default: string;
    };
    shape: {
        type: import("vue").PropType<"circle" | "square">;
        default: string;
    };
}>>, {
    type: "slim" | "full";
    state: import("./index").LogoState | import("./index").LogoState[];
    size: "sm" | "md" | "lg" | "xl";
    shape: "circle" | "square";
}, {}>;
export default _default;
