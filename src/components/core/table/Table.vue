<template>
  <div
    :class="[
      $style.table,
      $style[type],
      isRowsClickable && $style.rowsClickable,
      ...computedStates.map((s) => $style[s]),
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
            (column.sortable || column.isSelect) && $style.clickable,
          ]"
          @click="onColumnClick(column)"
        >
          <slot
            :name="`column(${column.slug})`"
            :column="column"
            :data="column.data"
            :label="column.label"
            :slug="column.slug"
            :is-all-records-selected="isAllRecordsSelected"
            :is-sorted-by="sortBy === column.slug"
            :sort-direction="sortDirection"
            :is-sorted-asc="sortBy === column.slug && sortDirection === 'asc'"
            :is-sorted-desc="sortBy === column.slug && sortDirection === 'desc'"
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
import { arrayFrom } from '@/utils/array';
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

const computedStates = computed(() => arrayFrom(props.state));

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

// default state
.table {
  color: white;
  &.list {
    .head {
      display: grid;
    }
    .records {}
    &.rowsClickable {
      .records {
        cursor: pointer;
      }
    }
    .record {
      display: grid;
      &.selected {}
      .recordColumn {}
    }
    .column {
      &.clickable {
        cursor: pointer;
        user-select: none;
      }
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
    .gridItem {}
  }
}

.recordColumn {}

// states
.scrollable {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: auto;
  @include scrollbarPrimary();
  .head {
    position: sticky;
    top: 0;
    z-index: 2;
  }
  .records {
    flex-grow: 1;
  }
}

.defaultSize {
  border-radius: 10px;
  &.list {
    .head {
      padding: 15px 20px;
      border-radius: 5px;
      @include title3;
      font-weight: 400;
    }
    .records {
      padding: 14px 0;
    }
    .record {
      padding: 16px;
    }
  }
  &.grid {
    grid-gap: 16px;
    padding: 16px;
  }
}

.tinySize {
  .head {
    padding-bottom: 4px;
  }
  &.list {
    margin-top: -4px;
    &.scrollable {
      @include scrollbarPrimary(4px, 2px);
      padding-right: 10px;
    }
    .column {
      @include title4;
      font-weight: 600;
    }
    .records {
      margin-top: 15px;
    }
    .record {
      padding: 5px 0;
    }
  }
}

.secondaryColor3 {
  background-color: rgb(var(--color-background-3));
  .head {
    background-color: rgb(var(--color-background-3));
  }
}

.ordersListColor {
  .head {
    background-color: rgb(var(--color-background-2));
  }
}
</style>
