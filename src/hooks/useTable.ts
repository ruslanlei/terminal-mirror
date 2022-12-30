import {computed} from 'vue';
import {InnerTableRecord, SortDirection, TableColumn, TableProps, TableRecord,} from '@/components/core/table';
import {useLocalValue} from '@/hooks/useLocalValue';

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
    id: InnerTableRecord['id'],
    isSelectColumn: TableColumn['isSelect'],
  ) => {
    if (isSelectColumn) {
      toggleRecordSelect(id);
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

  const onRowClick = (id: TableRecord['id']) => {
    emit('record-click', id);
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
