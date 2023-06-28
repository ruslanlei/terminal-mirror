<template>
  <div
    ref="container"
    :class="$style.barChart"
  />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useResizeObserver } from '@vueuse/core';
import { isEqual } from '@terminal/common/utils/boolean';
import { compose } from '@terminal/common/utils/fp';
import { awaitTimeout } from '@terminal/common/utils/promise';
import { setMaximalScrollLeft } from '@/utils/element';
import { getRectField } from '@/utils/dom';
import { getCssRgbColor } from '@/utils/style';
import { BarChartProps } from './index';
import { createBarChart } from './createBarChart';

const props = withDefaults(
  defineProps<BarChartProps>(),
  {
    data: () => [],
    barLabelFormatter: (value: any) => value,
    xAxisLabelFormatter: (value: any) => value,
  },
);

const container = ref<HTMLElement>();
const renderChart = async () => {
  // FIXME: this needed to await transition animation.
  //  Move to upper level into order and statistics.
  await awaitTimeout(300);

  if (!container.value) return;

  const isContainerNotPrepared = compose(
    isEqual(0),
    getRectField('height'),
  )(container.value);

  if (isContainerNotPrepared) return;

  createBarChart({
    container: container.value,
    data: props.data,
    barLabelFormatter: props.barLabelFormatter,
    xAxisLabelFormatter: props.xAxisLabelFormatter,
    positiveBarColor: getCssRgbColor('--color-success'),
    negativeBarColor: getCssRgbColor('--color-danger'),
    defaultBarColor: getCssRgbColor('--color-background-3'),
    barNameColor: getCssRgbColor('--color-accent-2'),
    height: getRectField('height', container.value),
  });

  setMaximalScrollLeft(container.value);
};

useResizeObserver(container, renderChart);
onMounted(renderChart);
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
