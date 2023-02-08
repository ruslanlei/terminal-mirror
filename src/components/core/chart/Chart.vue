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
import {
  createChart, IChartApi, ISeriesApi, ITimeScaleApi, UTCTimestamp,
} from 'lightweight-charts';
import { getCssRgbColor } from '@/utils/dom';
import Loader from '@/components/core/loader/Loader.vue';
import { useLocalValue } from '@/hooks/useLocalValue';
import { ChartEmits, ChartProps } from './index';

const props = defineProps<ChartProps>();
const emits = defineEmits<ChartEmits>();

const localDateFrom = useLocalValue<UTCTimestamp>(props, emits, 'dateFrom');
const localDateTo = useLocalValue<UTCTimestamp>(props, emits, 'dateTo');

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
    timeVisible: true,
  },
});

const timeScale = ref<ITimeScaleApi>();
const getTimeScale = (
  chart: IChartApi,
) => chart.timeScale();

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

// TODO: Get visible dates: chart.value?.timeScale().getVisibleRange()
// TODO: Get visible dates:
//  chart.value?.timeScale().setVisibleRange({
//  from: (new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0))).getTime() / 1000,
//  to: (new Date(Date.UTC(2018, 1, 1, 0, 0, 0, 0))).getTime() / 1000,
// })

onMounted(() => {
  chart.value = initChart();
  candles.value = addCandles(chart.value);
  timeScale.value = getTimeScale(chart.value);

  console.log(localDateFrom.value, localDateTo.value);

  timeScale.value.subscribeVisibleTimeRangeChange((newVisibleTimeRange) => {
    console.log(newVisibleTimeRange);
  });

  setTimeout(() => {
    chart.value?.timeScale().setVisibleRange({
      from: localDateFrom.value,
      to: localDateTo.value,
    });
  }, 2000);
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
