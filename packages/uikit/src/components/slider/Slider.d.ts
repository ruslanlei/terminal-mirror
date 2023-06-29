
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    gap: {
        type: import("vue").PropType<number>;
        required: true;
    };
    slidesPerView: {
        type: import("vue").PropType<number>;
        required: true;
        default: number;
    };
    slides: {
        type: import("vue").PropType<import("./index").SliderElement[]>;
        required: true;
    };
}, {
    prev: () => any;
    next: () => any;
    isBeginning: import("vue").ComputedRef<any>;
    isEnd: import("vue").ComputedRef<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    gap: {
        type: import("vue").PropType<number>;
        required: true;
    };
    slidesPerView: {
        type: import("vue").PropType<number>;
        required: true;
        default: number;
    };
    slides: {
        type: import("vue").PropType<import("./index").SliderElement[]>;
        required: true;
    };
}>>, {
    slidesPerView: number;
}, {}>, {
    slide?(_: {
        slideData: any;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
