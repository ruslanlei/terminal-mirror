<template>
  <div
    ref="container"
    :class="$style.barChart"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useResizeObserver } from '@vueuse/core';
import { setMaximalScrollLeft } from '@/utils/element';
import { getRectField } from '@/utils/dom';
import { getCssRgbColor } from '@/utils/style';
import { isMoreThan } from '@/utils/boolean';
import { BarChartProps } from './index';
import { createBarChart } from './createBarChart';

const props = withDefaults(
  defineProps<BarChartProps>(),
  {
    data: () => [],
    barLabelFormatter: (value: any) => value,
  },
);

const container = ref<HTMLElement>();
const renderChart = () => {
  if (!container.value) return;

  createBarChart({
    container: container.value,
    data: props.data,
    barLabelFormatter: props.barLabelFormatter,
    positiveBarColor: getCssRgbColor('--color-success'),
    negativeBarColor: getCssRgbColor('--color-danger'),
    barNameColor: getCssRgbColor('--color-accent-2'),
    height: getRectField('height', container.value),
  });

  setMaximalScrollLeft(container.value);
};

useResizeObserver(container, (entries) => {
  const entry = entries[0];

  const { height } = entry.contentRect;

  if (!isMoreThan(0, height)) return;

  renderChart();
});
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.barChart {
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  padding: 0 20px;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
