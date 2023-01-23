<template>
  <div>
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
    <div v-if="'children' in $slots">
      <slot name="children" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useComputedState } from '@/hooks/useComputedState';
import { TableRowProps } from './index';

const props = defineProps<TableRowProps>();

const computedRowStyles = computed(() => ({
  gridTemplateColumns: props.gridColumns,
}));

const computedStates = useComputedState(props);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.record {
  display: grid;
}
.recordColumn {}

// states
.defaultSize {
  padding: 16px;
}

.tinySize {
  padding: 5px 0;
}
</style>
