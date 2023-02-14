<template>
  <div
    ref="row"
    :class="[
      $style.recordWrapper,
      isChildrenVisible && $style.childrenVisible,
      ...computedStates,
    ]"
  >
    <div
      :class="[
        $style.record,
        record.isSelected && $style.selected,
      ]"
      :style="computedRowStyles"
      @click="toggleChildren"
    >
      <slot />
    </div>
    <div
      v-if="'children' in $slots"
      :class="$style.childrenContainer"
      :style="computedChildrenContainerStyle"
    >
      <div
        ref="children"
        :class="$style.children"
      >
        <slot
          v-if="isChildrenVisible"
          name="children"
          :data="record.children"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  watch,
  reactive, onMounted, onBeforeUnmount, nextTick,
} from 'vue';
import { useComputedState } from '@/hooks/useComputedState';
import { useEnvironmentObserver } from '@/hooks/useEnvironmentObserver';
import { TableRowProps } from './index';

const props = defineProps<TableRowProps>();

const row = ref();

const children = ref<HTMLElement>();

const computedRowStyles = computed(() => ({
  gridTemplateColumns: props.gridColumns,
}));

const computedStates = useComputedState(props);

const computedChildrenContainerStyle = reactive({
  height: '0px',
  transition: 'height 160ms',
});

const isChildrenVisible = ref(false);
const toggleChildren = () => {
  isChildrenVisible.value = !isChildrenVisible.value;
};

const calculateChildrenStyle = () => {
  if (isChildrenVisible.value && children.value) {
    const { height } = children.value.getBoundingClientRect();
    computedChildrenContainerStyle.height = `${height}px`;
    computedChildrenContainerStyle.transition = `height ${Math.min(Math.max(height * 3, 160), 300)}ms`;
  } else {
    computedChildrenContainerStyle.height = '0px';
  }
};

watch(isChildrenVisible, async () => {
  await nextTick();
  calculateChildrenStyle();
});

const {
  setListeners,
  removeListeners,
} = useEnvironmentObserver(row, calculateChildrenStyle);

onMounted(setListeners);
onBeforeUnmount(removeListeners);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.recordWrapper {}

.record {
  display: grid;
  cursor: pointer;
}
.recordColumn {}

.childrenContainer {
  position: relative;
  overflow: hidden;
}

.children {
  position: absolute;
  bottom: 0;
  width: 100%;
}

// states
.defaultSize {
  border-radius: 5px;
  .record {
    padding: 16px;
  }
  .childrenContainer {
    border-radius: 0 0 5px 5px;
  }
}

.smSize {
  .record {
    padding: 10px 0;
  }
}

.tinySize {
  .record {
    padding: 5px 0;
  }
}

.ordersListColor {
  transition: background-color 150ms;
  background-color: rgb(var(--color-background-1));
  &:hover {
    background-color: rgb(var(--color-background-3));
  }
  &.childrenVisible {
    background-color: rgb(var(--color-background-3));
  }
  .childrenContainer {
    transition: background-color 150ms;
    background-color: rgb(var(--color-background-2));
  }
}

.subOrdersColor {
  &:not(:first-child) {
    .record {
      border-top: 1px solid rgb(var(--color-background-3));
    }
  }
}

.semiTransparent {
  opacity: 0.5;
}
</style>
