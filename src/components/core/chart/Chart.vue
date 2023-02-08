<template>
  <div
    ref="chartContainer"
    :class="$style.chart"
  />
</template>

<script setup lang="ts">
import {
  ref,
  onBeforeUnmount,
  onMounted,
  watch,
} from 'vue';
import { createChart, IChartApi, ISeriesApi } from 'lightweight-charts';
import { getCssRgbColor } from '@/utils/dom';
import { ChartProps } from './index';

const props = defineProps<ChartProps>();

const chartContainer = ref();

const chart = ref<IChartApi>();
const initChart = () => createChart(chartContainer.value, {
  autoSize: true,
  layout: {
    background: {
      color: 'transparent',
    },
    textColor: getCssRgbColor('--color-accent-1'),
  },
  grid: {
    vertLines: {
      color: getCssRgbColor('--color-background-3'),
      style: 3,
      visible: true,
    },
    horzLines: {
      color: getCssRgbColor('--color-background-3'),
      style: 3,
    },
  },
});


const candles = ref<ISeriesApi<'Candlestick'>>();
const addCandles = (
  chart: IChartApi,
) => chart.addCandlestickSeries();
watch(() => props.data, () => {
  console.log('test');
  candles.value?.setData(props.data);
});

onMounted(() => {
  chart.value = initChart();
  candles.value = addCandles(chart.value);
});

onBeforeUnmount(() => {
  if (chart.value) {
    chart.value.remove();
  }
});
</script>

<style lang="scss" module>
.chart {}
</style>
