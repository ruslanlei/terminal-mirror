export enum TableAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

export type TableColumn = {
  label: string,
  slug: string,
  isSelect?: boolean,
  // string when value in or rems
  // and number when value equals to count of 'fr' (css fractions grid column).
  // For example { size: '10px' } or { size: 1 }
  size?: string | number,
  sortable?: boolean,
  align?: TableAlign,
}

export type TableRecord = {
  id: string,
  isSelected?: boolean,
  data: Record<string, TableColumn['slug']>
}

export type SelectedRecords = Array<TableRecord['id']>

export enum tableType {
  LIST = 'list',
  GRID = 'grid',
}

export interface TableProps {
  type: tableType,
  columns: TableColumn[],
  records: Omit<TableRecord, 'isSelected'>[],
  selectedRecords?: SelectedRecords,
  isSelectable?: boolean,
  gridColumns?: number,
}
