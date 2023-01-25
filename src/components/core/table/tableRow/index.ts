import { InnerTableRecord, TableColumn, TableState } from '@/components/core/table';

export interface TableRowProps {
  columns: TableColumn[],
  record: InnerTableRecord,
  gridColumns: string,
  state: TableState | TableState[],
}
