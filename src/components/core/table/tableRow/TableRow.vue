<template>
  <div
    :class="$style.recordWrapper"
    @click="toggleChildren"
  >
    <div
      :class="[
        $style.record,
        record.isSelected && $style.selected,
        ...computedStates,
      ]"
      :style="computedRowStyles"
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
        <slot name="children" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  watch,
  reactive, onMounted, onBeforeUnmount,
} from 'vue';
import { useComputedState } from '@/hooks/useComputedState';
import { useEnvironmentObserver } from '@/hooks/useEnvironmentObserver';
import { TableRowProps } from './index';

const props = defineProps<TableRowProps>();

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

watch(isChildrenVisible, calculateChildrenStyle);

const {
  setListeners,
  removeListeners,
} = useEnvironmentObserver(calculateChildrenStyle);

onMounted(setListeners);
onBeforeUnmount(removeListeners);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.recordWrapper {}

.record {
  display: grid;
}
.recordColumn {}

.childrenContainer {
  position: relative;
  overflow: hidden;
}

.children {
  position: absolute;
  bottom: 0;
}

// states
.defaultSize {
  padding: 16px;
}

.tinySize {
  padding: 5px 0;
}
</style>
