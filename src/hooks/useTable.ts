import { computed } from 'vue';
import {
  SelectedRecords, TableColumn, TableProps, TableRecord,
} from '@/components/core/table';

export const useTable = (
  props: TableProps,
  emit: any,
) => {
  const localSelectedRecords = computed({
    get: () => props.selectedRecords || [],
    set: (value: SelectedRecords) => emit('update:selectedRecords', value),
  });
  const isAllRecordsSelected = computed(
    () => localSelectedRecords.value.length === props.records.length,
  );

  const toggleSelectAll = () => {
    if (isAllRecordsSelected.value) {
      localSelectedRecords.value = [];
    } else {
      localSelectedRecords.value = props.records.map((record: TableRecord) => record.id);
    }
  };

  const onColumnClick = (slug: TableColumn['slug'], isSelect: TableColumn['isSelect']) => {
    if (isSelect) {
      toggleSelectAll();
    }
  };

  const toggleRecordSelect = (id: TableRecord['id']) => {
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
    id: TableRecord['id'],
    isSelectColumn: TableColumn['isSelect'],
  ) => {
    if (isSelectColumn) {
      toggleRecordSelect(id);
    }
  };

  const computedRecords = computed<TableRecord[]>(() => props.records.map(
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
