import { SelectorOption } from './index';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    label: {
        type: import("vue").PropType<string>;
    };
    state: {
        type: import("vue").PropType<("default" | "primaryColor" | "vertical" | "primaryColor2" | "defaultSize" | "mdSize" | "tabsShape" | "secondaryColor2" | "secondaryColor5" | "simpleColor" | "lgSize" | "blueGlassVerticalRight" | "specialFavoritesSize") | ("default" | "primaryColor" | "vertical" | "primaryColor2" | "defaultSize" | "mdSize" | "tabsShape" | "secondaryColor2" | "secondaryColor5" | "simpleColor" | "lgSize" | "blueGlassVerticalRight" | "specialFavoritesSize")[]>;
        default: string;
    };
    isDisabled: {
        type: import("vue").PropType<boolean>;
    };
    modelValue: {
        type: import("vue").PropType<string>;
        required: true;
    };
    options: {
        type: import("vue").PropType<SelectorOption<string>[]>;
        required: true;
    };
    thickening: {
        type: import("vue").PropType<number>;
        default: number;
    };
    isGhostAppearAnimation: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
    selectNext: () => void;
    selectPrev: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: import("vue").PropType<string>;
    };
    state: {
        type: import("vue").PropType<("default" | "primaryColor" | "vertical" | "primaryColor2" | "defaultSize" | "mdSize" | "tabsShape" | "secondaryColor2" | "secondaryColor5" | "simpleColor" | "lgSize" | "blueGlassVerticalRight" | "specialFavoritesSize") | ("default" | "primaryColor" | "vertical" | "primaryColor2" | "defaultSize" | "mdSize" | "tabsShape" | "secondaryColor2" | "secondaryColor5" | "simpleColor" | "lgSize" | "blueGlassVerticalRight" | "specialFavoritesSize")[]>;
        default: string;
    };
    isDisabled: {
        type: import("vue").PropType<boolean>;
    };
    modelValue: {
        type: import("vue").PropType<string>;
        required: true;
    };
    options: {
        type: import("vue").PropType<SelectorOption<string>[]>;
        required: true;
    };
    thickening: {
        type: import("vue").PropType<number>;
        default: number;
    };
    isGhostAppearAnimation: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onSelectNext?: (() => any) | undefined;
    onSelectPrev?: (() => any) | undefined;
}, {
    state: ("default" | "primaryColor" | "vertical" | "primaryColor2" | "defaultSize" | "mdSize" | "tabsShape" | "secondaryColor2" | "secondaryColor5" | "simpleColor" | "lgSize" | "blueGlassVerticalRight" | "specialFavoritesSize") | ("default" | "primaryColor" | "vertical" | "primaryColor2" | "defaultSize" | "mdSize" | "tabsShape" | "secondaryColor2" | "secondaryColor5" | "simpleColor" | "lgSize" | "blueGlassVerticalRight" | "specialFavoritesSize")[];
    thickening: number;
    isGhostAppearAnimation: boolean;
}, {}>, {
    option?(_: {
        option: SelectorOption<string>;
        activeOption: string;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
