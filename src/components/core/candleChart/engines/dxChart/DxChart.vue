<template>
  <div ref="chartContainer" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ChartBootstrap } from 'local_modules/dxchart5-light/dist'; // FIXME
import generateCandlesData from 'local_modules/dxchart5-light/dist/common/generate-data'; // FIXME

const chartContainer = ref();

const chartInstance = ref<ChartBootstrap>();

const createChartInstance = () => (
  new ChartBootstrap(chartContainer.value)
);

const initChartInstance = () => {
  chartInstance.value = createChartInstance();
};

const generateMockData = () => {
  const mockCandles = generateCandlesData();
  const mockInstrument = {
    symbol: 'AAPL',
    priceIncrements: [0.01],
  };
  chartInstance.value?.chartComponent.setMainSeries(mockCandles, mockInstrument);
};

onMounted(() => {
  initChartInstance();
  generateMockData();
});
</script>

<style module lang="scss">
</style>
