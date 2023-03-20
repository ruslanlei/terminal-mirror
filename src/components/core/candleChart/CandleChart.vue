<template>
  <div :class="[$style.chart, isLoading && $style.isLoading]">
    <div
      ref="chartContainer"
      :class="$style.container"
    />
    <div
      v-if="!data?.length"
      :class="$style.noDataBadgeContainer"
    >
      <slot name="noDataBadge">
        <div :class="$style.noDataBadge">
          <Typography
            size="title4"
            :state="['accent1']"
          >
            {{ noDataBadgeText }}
          </Typography>
        </div>
      </slot>
    </div>
  </div>
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
import { getCssRgbColor } from '@/utils/dom';
import { useLocalValue } from '@/hooks/useLocalValue';
import { toISOString } from '@/utils/date';
import { compose } from '@/utils/fp';
import { multiply } from '@/helpers/number';
import Typography from '@/components/app/typography/Typography.vue';
import { CandleChartEmits, CandleChartProps } from './index';

const props = defineProps<CandleChartProps>();
const emits = defineEmits<CandleChartEmits>();

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

const localDateFrom = useLocalValue<string>(props, emits, 'dateFrom');
const localDateTo = useLocalValue<string>(props, emits, 'dateTo');

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
watch(() => props.data, async () => {
  await nextTick();
  candles.value?.setData(props.data);
}, { immediate: true });

const unwatchFirstData = watch(() => props.data, () => {
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
  transition: 300ms opacity;
  &.isLoading {
    opacity: 0.1;
    pointer-events: none;
  }
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

.noDataBadgeContainer {
  position: absolute;
  inset: 0;
}

.noDataBadge {
  position: absolute;
  inset: -5px;
  width: 100%;
  height: 100%;
  background-color: rgba(var(--color-background-2), 0.9);
  border-radius: 10px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<style lang="scss">
@import "@/assets/styles/transitions.scss";
</style>
