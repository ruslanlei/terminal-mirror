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
      <button
        v-for="column in columns"
        :key="column.slug"
        type="button"
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
      </button>
    </div>
    <transition-group
      tag="div"
      :class="$style.records"
      name="tableElementAppearance"
      @before-leave="onElementRemove"
    >
      <div
        v-for="record in computedRecords"
        :key="record.id"
        :class="$style.tableRowContainer"
        :data-table-element-id="tableId"
      >
        <TableRow
          :grid-columns="computedListColumns"
          :record="record"
          :columns="columns"
          :state="state"
          :class="$style.tableRow"
          @click="onRowClick(record.id)"
          @cell-click="onCellClick(record.id, $event)"
        >
          <template #default>
            <button
              v-for="column in columns"
              :key="column.slug"
              type="button"
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
            </button>
          </template>
          <template
            v-if="record.children && 'recordChildren' in $slots"
            #children="{ data }"
          >
            <slot
              name="recordChildren"
              :children="data"
            />
          </template>
        </TableRow>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
} from 'vue';
import { useTable } from '@/hooks/useTable';
import TableRow from '@/components/core/table/tableRow/TableRow.vue';
import { useComputedState } from '@/hooks/useComputedState';
import { playAnimation } from '@/utils/animation';
import anime from 'animejs';
import { uuid } from '@/utils/uuid';
import { arrayOfElements } from '@/helpers/dom';
import { compose } from '@/utils/fp';
import {
  addCssProperty,
  getRect,
  removeCssProperty,
  toCssPxValue,
} from '@/helpers/style';
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

const tableId = ref(uuid());

const computedElementSelector = computed(
  () => `[data-table-element-id="${tableId.value}"]`,
);

const onElementRemove = (removingElement: HTMLElement) => {
  // add exact height to make element
  // animate it on remove animation.

  const {
    height,
  } = getRect(removingElement);

  compose(
    addCssProperty(['zIndex', 1]),
    addCssProperty(['height', toCssPxValue(height)]),
  )(removingElement);
};

const playAppearAnimation = () => {
  const onAnimationComplete = () => {
    anime.remove(computedElementSelector.value);

    compose(
      removeCssProperty(['opacity', 'transform']),
      arrayOfElements,
    )(computedElementSelector.value);
  };

  playAnimation({
    targets: computedElementSelector.value,
    translateY: [200, 0],
    opacity: {
      value: [0, 1],
      delay: 100,
    },
    duration: 800,
    easing: 'easeOutQuint',
    delay: anime.stagger(40, { from: 'first' }),
    loopComplete: onAnimationComplete,
  });
};

onMounted(() => {
  playAppearAnimation();
});
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

// default state
.table {
  color: white;
  overflow: hidden;
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
}

.tableRow {
  width: 100%;
}

.tableRowContainer {
  width: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  position: relative;
}

.recordColumn {}

.row {
  display: block;
}

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
  .head {
    padding: 15px 20px;
    border-radius: 5px;
    @include title3;
    font-weight: 400;
  }
  .column {
    @include title2;
    font-weight: 600;
  }
  .records {
    padding: 14px 0;
  }
}

.smSize {
  border-radius: 10px;
  .head {
    padding: 10px;
    border-radius: 5px;
    @include title3;
    font-weight: 400;
  }
  .records {
    padding: 0;
  }
}

.tinySize {
  .head {
    padding-bottom: 4px;
  }
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

<style lang="scss">
.tableElementAppearance {
  &-enter-active,
  &-leave-active {
    transition: opacity 300ms, transform 300ms, height 300ms;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scale(0.8) translateY(26px);
    height: 0 !important;
  }
}
</style>
