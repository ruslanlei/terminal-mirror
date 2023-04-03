<template>
  <div
    ref="wrapper"
    :class="$style.barChart"
  >
    <div ref="container" />
  </div>
  <Button
    style="color: white"
    @click="rerender"
  >
    Rerender
  </Button>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { setMaximalScrollLeft } from '@/utils/element';
import { isPositive } from '@/helpers/number';
import { getCssRgbColor, toPositiveNumberString } from '@/utils/dom';
import { createBarChart } from './createBarChart';

const wrapper = ref<HTMLElement>();
const container = ref<HTMLElement>();
const renderChart = () => {
  if (!container.value || !wrapper.value) return;

  const demoData = [
    ['Jan', -4000],
    ['Feb', -231],
    ['Mar', -779],
    ['Apr', 1479],
    ['May', 2512],
    ['Jun', 1267],
    ['Jul', 800],
    ['Aug', 495],
    ['Sep', 23],
    ['Oct', 597],
    ['Nov', 100],
    ['Dec', 4788],
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
    data: demoData,
    valueLabelFormatter: (value) => `${isPositive(value) ? toPositiveNumberString(value) : value}$`,
    positiveBarColor: getCssRgbColor('--color-success'),
    negativeBarColor: getCssRgbColor('--color-danger'),
  });

  setMaximalScrollLeft(wrapper.value);
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
  display: flex;
  justify-content: flex-end;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
