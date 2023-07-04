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
      candleTheme: {
        upColor: getCssRgbColor('--color-success'),
        downColor: getCssRgbColor('--color-danger'),
        upWickColor: getCssRgbColor('--color-success'),
        downWickColor: getCssRgbColor('--color-danger'),
      },
      chartAreaTheme: {
        backgroundColor: getCssRgbColor('--color-background-1'),
      },
      navigationMap: {
        backgroundColor: getCssRgbColor('--color-background-1'),
      },
      yAxis: {
        backgroundColor: getCssRgbColor('--color-background-1'),
        labelTextColor: getCssRgbColor('--color-background-5'),
        rectLabelInvertedTextColor: getCssRgbColor('--color-accent-1'),
      },
      xAxis: {
        backgroundColor: getCssRgbColor('--color-background-1'),
        labelTextColor: getCssRgbColor('--color-background-5'),
      },
      paneResizer: {
        bgColor: getCssRgbColor('--color-background-1'),
      },
      crossTool: {
        lineColor: getCssRgbColor('--color-accent-3'),
        labelBoxColor: getCssRgbColor('--color-background-4'),
        labelTextColor: getCssRgbColor('--color-accent-1'),
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
  });
};

onMounted(() => {
  initChartInstance();
  setData();
});
</script>

<style module lang="scss">
</style>
