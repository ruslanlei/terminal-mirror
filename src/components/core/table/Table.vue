<template>
  <div
    :class="[
      $style.root,
      $style[type],
    ]"
    :style="computedRootStyles"
  >
    <template v-if="type === tableType.LIST">
      <div
        :style="computedRowStyles"
        :class="$style.head"
      >
        <div
          v-for="column in columns"
          :key="column.slug"
          :class="[
            $style.column,
            $style[column.align],
          ]"
          @click="onColumnClick(column.slug, column.isSelect)"
        >
          <slot
            :name="`column(${column.slug})`"
            :column="column"
            :label="column.label"
            :slug="column.slug"
            :is-all-records-selected="isAllRecordsSelected"
          >
            {{ column.label }}
          </slot>
        </div>
      </div>
      <div :class="$style.records">
        <div
          v-for="record in computedRecords"
          :key="record.id"
          :class="[
            $style.record,
            record.isSelected && $style.selected
          ]"
          :style="computedRowStyles"
          @click="onRowClick(record.id)"
        >
          <div
            v-for="column in columns"
            :key="column.slug"
            :class="[
              $style.recordColumn,
              $style[column.align],
            ]"
            @click="onCellClick(record.id, column.isSelect)"
          >
            <slot
              :name="`cell(${column.slug})`"
              :record="record"
              :data="record.data[column.slug]"
              :is-selected="record.isSelected"
            />
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="type === tableType.GRID">
      <div
        v-for="record in computedRecords"
        :key="record.id"
        :class="$style.gridItem"
      >
        <slot
          name="grid-item"
          :record="record"
          :is-selected="record.isSelected"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTable } from '@/hooks/useTable';
import {
  tableType,
  TableRecord,
  TableProps,
  TableColumn,
  SelectedRecords,
} from './index';

const props = withDefaults(
  defineProps<TableProps>(),
  {
    type: 'list' as tableType.LIST,
  },
);
const emit = defineEmits<{(e: 'update:selectedRecords', value: SelectedRecords): void,
  (e: 'record-click', value: TableRecord['id']): void,
}>();

const computedListColumns = computed(() => props.columns.reduce(
  (acc: string, column: TableColumn) => {
    const columnSize = typeof column.size === 'string'
      ? column.size
      : `${column.size}fr`;

    return `${acc} ${columnSize}`;
  },
  '',
));
const computedRowStyles = computed(() => ({
  gridTemplateColumns: computedListColumns.value,
}));

const computedGridColumns = computed(() => Array(props.gridColumns ?? 1)
  .fill('1fr')
  .reduce((acc, value) => `${acc} ${value}`, ''));

const computedRootStyles = computed(() => ({
  ...(props.type === tableType.GRID ? {
    gridTemplateColumns: computedGridColumns.value,
  } : {}),
}));

const {
  isAllRecordsSelected,
  onColumnClick,
  onCellClick,
  computedRecords,
  onRowClick,
} = useTable(props, emit);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.root {
  color: white;
  background-color: rgb(var(--color-black-2));
  border-radius: 10px;
  &.list {
    .head {
      display: grid;
      padding: 16px;
    }
    .records {
      padding: 14px 0;
    }
    .record {
      display: grid;
      padding: 16px;
      &.selected {
        background-color: rgb(var(--color-black-3));
      }
      .recordColumn {}
    }
    .column, .recordColumn {
      display: flex;
      align-items: center;
      &.center {
        justify-content: center;
      }
      &.left {
        justify-content: flex-start;
      }
      &.right {
        justify-content: flex-end;
      }
    }
  }
  &.grid {
    display: grid;
    grid-gap: 16px;
    padding: 16px;
    .gridItem {}
  }
}

.recordColumn {}
</style>
