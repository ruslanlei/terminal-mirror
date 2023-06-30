<template>
  <div :class="[$style.chart, isLoading && $style.isLoading]">
    <ChartEngine
      v-model:date-from="localDateFrom"
      v-model:date-to="localDateTo"
      :candles="computedCandles"
      :class="$style.container"
    />
    <div
      v-if="!candles?.length"
      :class="$style.noDataBadgeContainer"
    >
      <slot name="noDataBadge">
        <div :class="$style.noDataBadge">
          <UiTypography
            size="title4"
            :state="['accent1']"
          >
            {{ noDataBadgeText }}
          </UiTypography>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import { UiTypography } from '@terminal/uikit/components/typography';
import { Time } from 'lightweight-charts';
import { useLocalValue } from '@/hooks/useLocalValue';
import { TradingViewCandle } from '@/components/core/candleChart/engines/tradingView';
import { toSecondsTimestamp } from '@/utils/date';
import { CandleChartEmits, CandleChartProps, ChartCandle } from './index';

const TradingView = defineAsyncComponent(() => (
  import('@/components/core/candleChart/engines/tradingView/TradingView.vue')
));

const DxChart = defineAsyncComponent(() => (
  import('@/components/core/candleChart/engines/dxChart/DxChart.vue')
));

const props = defineProps<CandleChartProps>();
const emit = defineEmits<CandleChartEmits>();

const ChartEngine = computed(() => ({
  tradingView: TradingView,
  dxChart: DxChart,
}[props.engine]));

const transformChartCandlesToTradingViewCandles = (
  candles: ChartCandle[],
): TradingViewCandle[] => candles.map(
  (candle: ChartCandle) => ({
    open: candle[0],
    high: candle[1],
    low: candle[2],
    close: candle[3],
    time: toSecondsTimestamp(candle[6]) as Time,
  }),
);

const candleTransformFunction = computed(() => ({
  tradingView: transformChartCandlesToTradingViewCandles,
  dxChart: (candles: any[]) => candles,
}[props.engine]));

const computedCandles = computed(() => (
  candleTransformFunction.value(props.candles)
));

const localDateFrom = useLocalValue<string>(props, emit, 'dateFrom');
const localDateTo = useLocalValue<string>(props, emit, 'dateTo');
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
