import { InnerTableRecord, TableColumn, TableState } from '../index';
export type TableRowState = TableState | 'semiTransparent';
export interface TableRowProps {
    columns: TableColumn[];
    record: InnerTableRecord;
    gridColumns: string;
    state: TableRowState | TableRowState[];
}
