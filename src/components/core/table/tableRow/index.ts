import { InnerTableRecord, TableColumn, TableState } from '@/components/core/table';

export type TableRowState =
    TableState
    | 'semiTransparent';

export interface TableRowProps {
  columns: TableColumn[],
  record: InnerTableRecord,
  gridColumns: string,
  state:
    | TableRowState
    | TableRowState[],
}
