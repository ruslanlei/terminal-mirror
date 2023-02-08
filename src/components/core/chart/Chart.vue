<template>
  <div :class="$style.chart">
    <div
      ref="chartContainer"
      :class="$style.container"
    />
    <transition name="skeletonTransition">
      <div
        v-if="isLoading"
        :class="$style.loaderCap"
      >
        <Loader />
      </div>
    </transition>
  </div>
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
import Loader from '@/components/core/loader/Loader.vue';
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
  timeScale: {
    lockVisibleTimeRangeOnResize: true,
  },
});

const candles = ref<ISeriesApi<'Candlestick'>>();
const addCandles = (
  chart: IChartApi,
) => chart.addCandlestickSeries({
  upColor: getCssRgbColor('--color-success'),
  downColor: getCssRgbColor('--color-danger'),
  wickUpColor: getCssRgbColor('--color-success'),
  wickDownColor: getCssRgbColor('--color-danger'),
  borderVisible: true,
});
watch(() => props.data, () => {
  candles.value?.setData(props.data);
});

onMounted(() => {
  chart.value = initChart();
  candles.value = addCandles(chart.value);

  console.log(chart.value?.timeScale());
});

onBeforeUnmount(() => {
  if (chart.value) {
    chart.value.remove();
  }
});
</script>

<style lang="scss" module>
.chart {
  position: relative;
}

.container {
  height: 100%;
  width: 100%;
}

.loaderCap {
  position: absolute;
  z-index: 2;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(var(--color-background-1), 0.9);
  border-radius: 10px;
}
</style>

<style lang="scss">
@import "@/assets/styles/transitions.scss";
</style>
