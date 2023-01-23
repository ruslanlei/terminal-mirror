export type TableColumn<S = string> = {
  label: string,
  slug: S,
  isSelect?: boolean,

  // string when value in px, rems etc.
  // and number when value equals to count of 'fr' (css fractions grid column).
  // example: { size: '10px' } or { size: 1 }
  size?: string | number,
  sortable?: boolean,
  align?: 'left' | 'center' | 'right',
  data?: any,
}

export type TableRecord<
  Columns extends string = string,
  Data = Record<Columns, any>,
> = {
  id: string | number,
  data: Data,
  children?: any,
}

export type InnerTableRecord = TableRecord & {
  isSelected?: boolean,
}

export type SelectedRecords = Array<TableRecord['id']>

export enum tableType {
  LIST = 'list',
  GRID = 'grid',
}

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export type TableState = 'scrollable'
  | 'defaultSize'
  | 'tinySize'
  | 'ordersListColor'
  | 'secondaryColor3';

export interface TableProps {
  type: tableType,
  columns: TableColumn[],
  records: Omit<TableRecord, 'isSelected'>[],
  selectedRecords?: SelectedRecords,
  isSelectable?: boolean,
  gridColumns?: number,
  sortBy?: TableColumn['slug'] | null,
  sortDirection?: SortDirection,
  state?: TableState | TableState[],
  isRowsClickable?: boolean,
  isHeadVisible?: boolean,
}
