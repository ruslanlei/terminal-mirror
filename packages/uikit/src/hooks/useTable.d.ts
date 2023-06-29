import { InnerTableRecord, TableColumn, TableProps, TableRecord } from '../../components/table';
export declare const useTable: (props: TableProps, emit: any) => {
    localSelectedRecords: import("vue").WritableComputedRef<(string | number)[]>;
    isAllRecordsSelected: import("vue").ComputedRef<boolean>;
    onColumnClick: (column: TableColumn) => void;
    toggleRecordSelect: (id: InnerTableRecord['id']) => void;
    onCellClick: (event: Event, tableColumn: TableColumn, tableRecord: InnerTableRecord, toggleChildren?: () => void) => void;
    computedRecords: import("vue").ComputedRef<InnerTableRecord[]>;
    onRowClick: (record: TableRecord) => void;
};
