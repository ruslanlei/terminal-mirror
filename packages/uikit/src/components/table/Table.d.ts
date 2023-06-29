import { TableRecord, TableColumn, SelectedRecords } from './index';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    state: {
        type: import("vue").PropType<import("./index").TableState | import("./index").TableState[]>;
    };
    animationDelay: {
        type: import("vue").PropType<number>;
        default: number;
    };
    columns: {
        type: import("vue").PropType<TableColumn<string>[]>;
        required: true;
    };
    selectedRecords: {
        type: import("vue").PropType<SelectedRecords>;
    };
    sortBy: {
        type: import("vue").PropType<string | null>;
    };
    sortDirection: {
        type: import("vue").PropType<import("./index").SortDirection>;
    };
    gridColumns: {
        type: import("vue").PropType<number>;
    };
    records: {
        type: import("vue").PropType<Omit<TableRecord<string, Record<string, any>, any>, "isSelected">[]>;
        required: true;
    };
    isSelectable: {
        type: import("vue").PropType<boolean>;
    };
    isRowsClickable: {
        type: import("vue").PropType<boolean>;
    };
    isHeadVisible: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showHeadWhileEmpty: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    appearanceAnimationType: {
        type: import("vue").PropType<"bubbling" | "elevating">;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:selectedRecords": (value: SelectedRecords) => void;
    "record-click": (value: string | number) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    state: {
        type: import("vue").PropType<import("./index").TableState | import("./index").TableState[]>;
    };
    animationDelay: {
        type: import("vue").PropType<number>;
        default: number;
    };
    columns: {
        type: import("vue").PropType<TableColumn<string>[]>;
        required: true;
    };
    selectedRecords: {
        type: import("vue").PropType<SelectedRecords>;
    };
    sortBy: {
        type: import("vue").PropType<string | null>;
    };
    sortDirection: {
        type: import("vue").PropType<import("./index").SortDirection>;
    };
    gridColumns: {
        type: import("vue").PropType<number>;
    };
    records: {
        type: import("vue").PropType<Omit<TableRecord<string, Record<string, any>, any>, "isSelected">[]>;
        required: true;
    };
    isSelectable: {
        type: import("vue").PropType<boolean>;
    };
    isRowsClickable: {
        type: import("vue").PropType<boolean>;
    };
    isHeadVisible: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showHeadWhileEmpty: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    appearanceAnimationType: {
        type: import("vue").PropType<"bubbling" | "elevating">;
        default: string;
    };
}>> & {
    "onRecord-click"?: ((value: string | number) => any) | undefined;
    "onUpdate:selectedRecords"?: ((value: SelectedRecords) => any) | undefined;
}, {
    animationDelay: number;
    isHeadVisible: boolean;
    showHeadWhileEmpty: boolean;
    appearanceAnimationType: "bubbling" | "elevating";
}, {}>, Partial<Record<string, (_: {
    column: TableColumn<string>;
    data: any;
    label: string;
    slug: string;
    isAllRecordsSelected: boolean;
    isSortedBy: boolean;
    sortDirection: import("./index").SortDirection | undefined;
    isSortedAsc: boolean;
    isSortedDesc: boolean;
}) => any>> & Partial<Record<string, (_: {
    record: import("./index").InnerTableRecord;
    data: any;
    isSelected: boolean | undefined;
}) => any>> & {
    recordChildren?(_: {
        children: any;
    }): any;
    placeholder?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
