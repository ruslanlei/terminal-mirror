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
import { setToMaximumScrollLeft } from '@/utils/element';
import { createBarChart } from './createBarChart';

const wrapper = ref<HTMLElement>();
const container = ref<HTMLElement>();
const renderChart = () => {
  if (!container.value) return;

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

  createBarChart({
    container: container.value,
    data: [
      ...demoData,
      ...demoData,
    ],
  });

  setToMaximumScrollLeft(wrapper.value);
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
  width: 700px;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
