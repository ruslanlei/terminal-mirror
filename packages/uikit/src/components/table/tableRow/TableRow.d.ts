declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    columns: {
        type: import("vue").PropType<import("..").TableColumn<string>[]>;
        required: true;
    };
    record: {
        type: import("vue").PropType<import("..").InnerTableRecord>;
        required: true;
    };
    gridColumns: {
        type: import("vue").PropType<string>;
        required: true;
    };
    state: {
        type: import("vue").PropType<import("./index").TableRowState | import("./index").TableRowState[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    columns: {
        type: import("vue").PropType<import("..").TableColumn<string>[]>;
        required: true;
    };
    record: {
        type: import("vue").PropType<import("..").InnerTableRecord>;
        required: true;
    };
    gridColumns: {
        type: import("vue").PropType<string>;
        required: true;
    };
    state: {
        type: import("vue").PropType<import("./index").TableRowState | import("./index").TableRowState[]>;
        required: true;
    };
}>>, {}, {}>, {
    default?(_: {
        toggleChildren: () => void;
    }): any;
    children?(_: {
        data: any;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
