<template>
  <div
    ref="container"
    :class="$style.barChart"
  />
<!--  <Button-->
<!--    style="color: white"-->
<!--    @click="rerender"-->
<!--  >-->
<!--    Rerender-->
<!--  </Button>-->
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { setMaximalScrollLeft } from '@/utils/element';
import { isPositive } from '@/utils/number';
import { getCssRgbColor, toPositiveNumberString } from '@/utils/dom';
import { getRectField } from '@/helpers/style';
import { createBarChart } from './createBarChart';

const container = ref<HTMLElement>();
const renderChart = () => {
  if (!container.value) return;

  const demoData = [
    ['jan', -4000],
    ['feb', -231],
    ['mar', -779],
    ['apr', 1479],
    ['may', 2512],
    ['jun', 1267],
    ['jul', 800],
    ['aug', 495],
    ['sep', 23],
    ['oct', 597],
    ['nov', 100],
    ['dec', 4788],
  ];

  const demoData2 = [
    ['Jan', -100],
    ['Feb', -331],
    ['Mar', -7479],
    ['Apr', 179],
    ['May', 1512],
    ['Jun', 567],
    ['Jul', 800],
    ['Aug', 495],
    ['Sep', 433],
    ['Oct', 57],
    ['Nov', 1400],
    ['Dec', 4288],
  ];

  createBarChart({
    container: container.value,
    data: [
      ...demoData,
      ...demoData,
      ...demoData,
    ],
    barLabelFormatter: (value) => `${isPositive(value) ? toPositiveNumberString(value) : value}$`,
    positiveBarColor: getCssRgbColor('--color-success'),
    negativeBarColor: getCssRgbColor('--color-danger'),
    barNameColor: getCssRgbColor('--color-accent-2'),
    height: getRectField('height', container.value),
  });

  setMaximalScrollLeft(container.value);
};

onMounted(renderChart);

// TODO: delete after develop
const rerender = () => {
  if (!container.value) return;

  container.value.innerHTML = '';
  renderChart();
};
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
