import { TableRowState } from './tableRow';
export { default as UiTable } from "../../../components/table/Table";
export type TableColumn<S = string> = {
    label: string;
    slug: S;
    isSelect?: boolean;
    size?: string | number;
    sortable?: boolean;
    isClickable?: boolean;
    align?: 'left' | 'center' | 'right';
    data?: any;
};
export type TableRecord<Columns extends string = string, Data = Record<Columns, any>, Children = any> = {
    id: string | number;
    data: Data;
    children?: Children;
    state?: TableRowState | TableRowState[];
};
export type InnerTableRecord = TableRecord & {
    isSelected?: boolean;
};
export type SelectedRecords = Array<TableRecord['id']>;
export declare enum SortDirection {
    ASC = "asc",
    DESC = "desc"
}
export type TableState = 'scrollable' | 'defaultSize' | 'smSize' | 'tinySize' | 'orderListColor' | 'secondaryColor3' | 'subOrdersColor';
export interface TableProps {
    columns: TableColumn[];
    records: Omit<TableRecord, 'isSelected'>[];
    selectedRecords?: SelectedRecords;
    isSelectable?: boolean;
    gridColumns?: number;
    sortBy?: TableColumn['slug'] | null;
    sortDirection?: SortDirection;
    state?: TableState | TableState[];
    isRowsClickable?: boolean;
    isHeadVisible?: boolean;
    showHeadWhileEmpty?: boolean;
    animationDelay?: number;
    appearanceAnimationType?: 'bubbling' | 'elevating';
}
