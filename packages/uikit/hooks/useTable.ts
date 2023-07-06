import { computed } from 'vue';
import {
  InnerTableRecord,
  SortDirection,
  TableColumn,
  TableProps,
  TableRecord,
} from '../components/table';
import { useLocalValue } from './useLocalValue';

export const useTable = (
  props: TableProps,
  emit: any,
) => {
  const localSelectedRecords = useLocalValue<Array<TableRecord['id']>>(
    props,
    emit,
    'selectedRecords',
  );
  const isAllRecordsSelected = computed(
    () => localSelectedRecords.value?.length === props.records.length,
  );

  const toggleSelectAll = () => {
    if (isAllRecordsSelected.value) {
      localSelectedRecords.value = [];
    } else {
      localSelectedRecords.value = props.records.map((record: TableRecord) => record.id);
    }
  };

  const localSortBy = useLocalValue<TableProps['sortBy']>(props, emit, 'sortBy');
  const localSortDirection = useLocalValue<TableProps['sortDirection']>(props, emit, 'sortDirection');

  const onColumnClick = (column: TableColumn) => {
    if (column.isSelect) {
      toggleSelectAll();
    }
    if (column.sortable) {
      if (localSortBy.value === null) {
        localSortBy.value = column.slug;
        localSortDirection.value = SortDirection.ASC;
      } else if (localSortDirection.value === SortDirection.ASC) {
        localSortDirection.value = SortDirection.DESC;
      } else {
        localSortBy.value = null;
        localSortDirection.value = SortDirection.ASC;
      }
    }
  };

  const toggleRecordSelect = (id: InnerTableRecord['id']) => {
    if (!props.isSelectable) return;
    const isSelected = localSelectedRecords.value.includes(id);

    if (isSelected) {
      localSelectedRecords.value = localSelectedRecords.value.filter(
        (recordId) => recordId !== id,
      );
    } else {
      localSelectedRecords.value.push(id);
    }
  };

  const onCellClick = (
    event: Event,
    tableColumn: TableColumn,
    tableRecord: InnerTableRecord,
    toggleChildren?: () => void,
  ) => {
    if (tableColumn.isSelect) {
      toggleRecordSelect(tableRecord.id);
    }
    if (tableColumn.isClickable) {
      event.stopPropagation();
    } else {
      toggleChildren?.();
    }
  };

  const computedRecords = computed<InnerTableRecord[]>(() => props.records.map(
    (record) => ({
      ...record,
      ...(props.isSelectable ? {
        isSelected: localSelectedRecords.value.includes(record.id),
      } : {}),
    }),
  ));

  const onRowClick = (record: TableRecord) => {
    if (!props.isRowsClickable) return;

    emit('record-click', record);
  };

  return {
    localSelectedRecords,
    isAllRecordsSelected,
    onColumnClick,
    toggleRecordSelect,
    onCellClick,
    computedRecords,
    onRowClick,
  };
};
