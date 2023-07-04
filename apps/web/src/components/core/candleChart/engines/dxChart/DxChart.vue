<template>
  <div ref="chartContainer" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ChartBootstrap } from '@dx-private/dxchart5-light/dist';
import { getCssRgbColor } from '@terminal/uikit/utils/style';
import { DxChartProps } from './index';

const props = defineProps<DxChartProps>();

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

const setData = () => {
  chartInstance.value?.chartComponent.setMainSeries({
    candles: props.candles,
    instrument: {
      symbol: 'AAPL',
      priceIncrements: [0.01],
    },
  });
};

onMounted(() => {
  initChartInstance();
  setData();
});
</script>

<style module lang="scss">
</style>
