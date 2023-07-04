<template>
  <div ref="chartContainer" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ChartBootstrap } from '@dx-private/dxchart5-light/dist';
import { getCssRgbColor } from '@terminal/uikit/utils/style';

const chartContainer = ref();

const chartInstance = ref<ChartBootstrap>();

const createChartInstance = () => (
  new ChartBootstrap(chartContainer.value, {
    colors: {
      chartAreaTheme: {
        backgroundColor: getCssRgbColor('--color-background-1'),
      },
      navigationMap: {
        backgroundColor: getCssRgbColor('--color-background-1'),
      },
      yAxis: {
        backgroundColor: getCssRgbColor('--color-background-1'),
      },
      xAxis: {
        backgroundColor: getCssRgbColor('--color-background-1'),
      },
      paneResizer: {
        bgColor: getCssRgbColor('--color-background-1'),
      },
    },
  })
);

const initChartInstance = () => {
  chartInstance.value = createChartInstance();
};

const generateMockData = () => {
  chartInstance.value?.chartComponent.setMainSeries({
    candles: [
      {
        hi: 100,
        lo: 2,
        open: 70,
        close: 50,
        timestamp: 1,
        volume: 1,
      },
      {
        hi: 140,
        lo: 6,
        open: 90,
        close: 10,
        timestamp: 1000,
        volume: 2,
      },
    ],
    instrument: {
      symbol: 'AAPL',
      priceIncrements: [0.01],
    },
  });
};

onMounted(() => {
  initChartInstance();
  generateMockData();
});
</script>

<style module lang="scss">
</style>
