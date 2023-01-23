<template>
  <div
    :class="[
      $style.table,
      $style[type],
      isRowsClickable && $style.rowsClickable,
      ...computedState,
    ]"
  >
    <div
      v-if="isHeadVisible"
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
      <TableRow
        v-for="record in computedRecords"
        :key="record.id"
        :grid-columns="computedListColumns"
        :record="record"
        :columns="columns"
        :state="state"
        @click="onRowClick(record.id)"
        @cell-click="onCellClick(record.id, $event)"
      >
        <template #default>
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
        </template>
        <template
          v-if="record.children && 'recordChildren' in $slots"
          #children="data"
        >
          <slot
            name="recordChildren"
            v-bind="data"
          />
        </template>
      </TableRow>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTable } from '@/hooks/useTable';
import TableRow from '@/components/core/table/tableRow/TableRow.vue';
import { useComputedState } from '@/hooks/useComputedState';
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
    isHeadVisible: true,
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

const computedState = useComputedState(props);

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
