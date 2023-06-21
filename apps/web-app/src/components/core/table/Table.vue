<template>
  <table
    :class="[
      $style.table,
      isRowsClickable && $style.rowsClickable,
      ...computedState,
    ]"
  >
    <transition
      mode="out-in"
      name="skeletonTransition"
    >
      <template v-if="computedRecords.length">
        <div :class="$style.tableContent">
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
            <tr
              v-for="record in computedRecords"
              :key="record.id"
              :class="$style.tableRowContainer"
              :data-table-element-id="tableId"
            >
              <TableRow
                :grid-columns="computedListColumns"
                :record="record"
                :columns="columns"
                :state="[
                  ...state,
                  ...(record?.state
                    ? record.state
                    : []),
                ]"
                :class="$style.tableRow"
                @click="onRowClick(record)"
              >
                <template #default="{ toggleChildren }">
                  <button
                    v-for="column in columns"
                    :key="column.slug"
                    type="button"
                    :class="[
                      $style.recordColumn,
                      $style[column.align],
                    ]"
                    @click="onCellClick($event, column, record, toggleChildren)"
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
            </tr>
          </transition-group>
        </div>
      </template>
      <template v-else>
        <div :class="$style.placeholder">
          <slot name="placeholder" />
        </div>
      </template>
    </transition>
  </table>
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
import { compose, log } from '@/utils/fp';
import {
  toCssPxValue,
} from '@/utils/style';
import { awaitTimeout } from '@/utils/promise';
import { filter, forEach, toArray } from '@/utils/array';
import {
  addCssProperty, arrayOfElements, getRect, removeCssProperty,
} from '@/utils/dom';
import {
  TableRecord,
  TableProps,
  TableColumn,
  SelectedRecords,
} from './index';

const props = withDefaults(
  defineProps<TableProps>(),
  {
    isHeadVisible: true,
    showHeadWhileEmpty: false,
    appearanceAnimationType: 'elevating',
    animationDelay: 0,
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

const computedTableRowSelector = computed(
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

const playAppearAnimation = async () => {
  const onAnimationComplete = () => {
    anime.remove(computedTableRowSelector.value);

    compose(
      removeCssProperty(['opacity', 'transform']),
      arrayOfElements,
    )(computedTableRowSelector.value);
  };

  // @ts-ignore
  const visibleTargets = compose(
    filter((element: HTMLElement) => {
      if (!element.offsetParent) return false;

      const {
        height: containerHeight,
      } = getRect(element.offsetParent as HTMLElement);

      const {
        top: elementTop,
      } = getRect(element);

      // elements that not hidden by parent or window
      return (element.offsetTop < containerHeight) && (elementTop < window.innerHeight);
    }),
    arrayOfElements,
  )(computedTableRowSelector.value) as HTMLElement[];

  forEach((element: HTMLElement) => {
    element.style.opacity = '0';
  }, visibleTargets);

  if (props.animationDelay) {
    await awaitTimeout(props.animationDelay);
  }

  await playAnimation({
    targets: visibleTargets,
    translateY: [200, 0],
    opacity: {
      value: [0, 1],
      delay: 100,
    },
    ...(props.appearanceAnimationType === 'bubbling' ? {
      scale: [0, 1],
    } : {}),
    duration: 700,
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
  display: flex;
  flex-direction: column;
  .head {
    display: grid;
    position: relative;
    z-index: 2;
  }
  .records {
    width: 100%;
    flex-grow: 1;
  }
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

.tableContent {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.placeholder {
  width: 100%;
  flex-grow: 1;
  display: flex;
  & > * {
    width: 100%;
    flex-grow: 1;
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
  //opacity: 0;
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
    z-index: 3;
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
    padding: 4px 0;
  }
  &.scrollable {
    @include scrollbarPrimary(4px, 2px);
    padding-right: 18px;
  }
  .column {
    @include title4;
    font-weight: 600;
  }
  .records {
    margin-top: 10px;
  }
}

.secondaryColor3 {
  background-color: rgb(var(--color-background-3));
  .head {
    background-color: rgb(var(--color-background-3));
  }
}

.orderListColor {
  .head {
    background-color: rgb(var(--color-background-2));
  }
}
</style>

<style lang="scss">
@import "src/assets/styles";

.tableElementAppearance {
  &-enter-active,
  &-leave-active {
    transition: opacity 270ms, transform 300ms, height 300ms;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scale(0.9) translateY(-42px);
    height: 0 !important;
  }
}
</style>
