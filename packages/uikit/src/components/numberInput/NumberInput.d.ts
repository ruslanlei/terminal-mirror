import { NumberInputNormalizer } from './index';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    label: {
        type: import("vue").PropType<string>;
    };
    state: {
        type: import("vue").PropType<import("./index").NumberInputState | import("./index").NumberInputState[] | null>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("./index").NumberInputSize>;
        default: string;
    };
    isDisabled: {
        type: import("vue").PropType<boolean>;
    };
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
    tabIndex: {
        type: import("vue").PropType<number>;
        default: number;
    };
    error: {
        type: import("vue").PropType<string>;
    };
    showErrorIcon: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    step: {
        type: import("vue").PropType<number>;
        default: number;
    };
    decimals: {
        type: import("vue").PropType<number>;
    };
    normalizer: {
        type: import("vue").PropType<NumberInputNormalizer>;
    };
    saveOn: {
        type: import("vue").PropType<"input" | "blur">;
        default: string;
    };
    normalizeOnKeydown: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    roundToDecimalPlaces: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    hideArrows: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    appendMinWidth: {
        type: import("vue").PropType<number>;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: number) => void;
    input: (value: KeyboardEvent | InputEvent) => void;
    focus: (value: InputEvent) => void;
    blur: (value: InputEvent) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: import("vue").PropType<string>;
    };
    state: {
        type: import("vue").PropType<import("./index").NumberInputState | import("./index").NumberInputState[] | null>;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("./index").NumberInputSize>;
        default: string;
    };
    isDisabled: {
        type: import("vue").PropType<boolean>;
    };
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
    tabIndex: {
        type: import("vue").PropType<number>;
        default: number;
    };
    error: {
        type: import("vue").PropType<string>;
    };
    showErrorIcon: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    step: {
        type: import("vue").PropType<number>;
        default: number;
    };
    decimals: {
        type: import("vue").PropType<number>;
    };
    normalizer: {
        type: import("vue").PropType<NumberInputNormalizer>;
    };
    saveOn: {
        type: import("vue").PropType<"input" | "blur">;
        default: string;
    };
    normalizeOnKeydown: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    roundToDecimalPlaces: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    hideArrows: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    appendMinWidth: {
        type: import("vue").PropType<number>;
        default: number;
    };
}>> & {
    onFocus?: ((value: InputEvent) => any) | undefined;
    onBlur?: ((value: InputEvent) => any) | undefined;
    onInput?: ((value: KeyboardEvent | InputEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}, {
    state: import("./index").NumberInputState | import("./index").NumberInputState[] | null;
    size: import("./index").NumberInputSize;
    max: number;
    min: number;
    tabIndex: number;
    showErrorIcon: boolean;
    step: number;
    saveOn: "input" | "blur";
    normalizeOnKeydown: boolean;
    roundToDecimalPlaces: boolean;
    hideArrows: boolean;
    appendMinWidth: number;
}, {}>, {
    label?(_: {}): any;
    append?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
