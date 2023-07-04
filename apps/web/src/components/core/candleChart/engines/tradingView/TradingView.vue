<template>
  <div ref="chartContainer" />
</template>

<script setup lang="ts">
import {
  ref,
  onBeforeUnmount,
  onMounted,
  watch, nextTick,
} from 'vue';
import {
  createChart,
  IChartApi,
  ISeriesApi,
  ITimeScaleApi,
} from 'lightweight-charts';
import { useLocalValue } from '@/hooks/useLocalValue';
import { toISOString } from '@terminal/common/utils/date';
import { compose } from '@terminal/common/utils/fp';
import { multiply } from '@terminal/common/utils/number';
import { getCssRgbColor } from '@/utils/style';
import {
  AbstractCandleChartEngineEmits,
} from '@/components/core/candleChart/engines';
import { TradingViewProps } from '@/components/core/candleChart/engines/tradingView/index';

const props = defineProps<TradingViewProps>();
const emit = defineEmits<AbstractCandleChartEngineEmits>();

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

const localDateFrom = useLocalValue<string>(props, emit, 'dateFrom');
const localDateTo = useLocalValue<string>(props, emit, 'dateTo');

watch([localDateTo, localDateFrom], () => {
  // timeScale.value?.setVisibleRange({
  //   from: compose(
  //     divideRight(1000),
  //     toTimestamp,
  //   )(localDateFrom.value) as Time,
  //   to: compose(
  //     divideRight(1000),
  //     toTimestamp,
  //   )(localDateTo.value) as Time,
  // });
}, { immediate: true });

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

const unwatchFirstData = watch(() => props.candles, () => {
  chart.value?.timeScale().fitContent();
  unwatchFirstData();
});

onMounted(() => {
  chart.value = initChart();
  candles.value = addCandles(chart.value);
  timeScale.value = getTimeScale(chart.value);

  timeScale.value.subscribeVisibleTimeRangeChange((newVisibleTimeRange) => {
    if (newVisibleTimeRange?.from) {
      localDateFrom.value = compose(
        toISOString,
        multiply(1000),
      )(newVisibleTimeRange.from as number);
    }

    if (newVisibleTimeRange?.to) {
      localDateTo.value = compose(
        toISOString,
        multiply(1000),
      )(newVisibleTimeRange.to as number);
    }
  });

  watch(() => props.candles, async () => {
    await nextTick();
    candles.value?.setData(props.candles);
  }, { immediate: true });
});

onBeforeUnmount(() => {
  if (chart.value) {
    chart.value.remove();
  }
});
</script>
