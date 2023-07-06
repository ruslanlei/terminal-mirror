<template>
  <div ref="chartContainer" />
</template>

<script setup lang="ts">
import {
  onMounted,
  ref, watch,
} from 'vue';
import { ChartBootstrap } from '@dx-private/dxchart5-light/dist';
import { getCssRgbColor } from '../../../../utils/style';
import { awaitTimeout } from '@terminal/common';
import {
  DxChartCandle,
  DxChartProps,
  transformChartCandlesToDxChartCandles,
} from './index';
import { ChartCandle } from '../../index';

const props = defineProps<DxChartProps>();

const localCandles = ref(transformChartCandlesToDxChartCandles(props.candles));

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

const setCandlesToChart = (
  candles: DxChartCandle[],
) => {
  chartInstance.value?.chartComponent.setMainSeries({
    candles,
  });
};
watch(localCandles, setCandlesToChart, { deep: true });

const isSettingNewCandles = ref(false);
const candleQueue = ref<ChartCandle[]>([]);
const setCandles = async (newCandles: ChartCandle[]) => {
  if (isSettingNewCandles.value) {
    candleQueue.value = [
      ...candleQueue.value,
      ...newCandles,
    ];

    return;
  }

  isSettingNewCandles.value = true;

  const transformedCandlesAndSortedCandles = transformChartCandlesToDxChartCandles(newCandles)
    .sort((candleA, candleB) => (candleA.timestamp > candleB.timestamp ? 1 : -1));

  await Promise.all(
    transformedCandlesAndSortedCandles.map((candle, index) =>
      (async () => {
        await awaitTimeout(100 * index);

        localCandles.value.push(candle);
      })()),
  );

  if (candleQueue.value.length) {
    setCandles(candleQueue.value);
    candleQueue.value = [];
  }

  isSettingNewCandles.value = false;
};

const resetCandles = () => {
  localCandles.value = [];
  const unwatch = watch(() => props.candles, () => {
    unwatch();
    setCandlesToChart(
      transformChartCandlesToDxChartCandles(props.candles),
    );
  });
};

onMounted(() => {
  initChartInstance();
  setCandlesToChart(localCandles.value);
});

defineExpose({
  setCandles,
  resetCandles,
});
</script>

<style module lang="scss">
</style>
