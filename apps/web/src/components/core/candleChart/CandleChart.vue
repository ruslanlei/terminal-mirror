<template>
  <div :class="[$style.chart, isLoading && $style.isLoading]">
    <ChartEngine
      ref="engine"
      v-model:date-from="localDateFrom"
      v-model:date-to="localDateTo"
      :candles="candles"
      :class="$style.container"
    />
    <div
      v-if="!candles?.length && !isLoading"
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
import {
  ref,
  defineAsyncComponent,
  computed,
} from 'vue';
import { UiTypography } from '@terminal/uikit/components/typography';
import { useLocalValue } from '@terminal/uikit/hooks/useLocalValue';
import { CandleChartEmits, CandleChartProps, ChartCandle } from './index';

const TradingView = defineAsyncComponent(() => (
  import('@/components/core/candleChart/engines/tradingView/TradingView.vue')
));

const DxChart = defineAsyncComponent(() => (
  import('@/components/core/candleChart/engines/dxChart/DxChart.vue')
));

const engine = ref();

const props = defineProps<CandleChartProps>();
const emit = defineEmits<CandleChartEmits>();

const ChartEngine = computed(() => ({
  tradingView: TradingView,
  dxChart: DxChart,
}[props.engine]));

const localDateFrom = useLocalValue<string>(props, emit, 'dateFrom');
const localDateTo = useLocalValue<string>(props, emit, 'dateTo');

const setCandles = (candles: ChartCandle[]) => {
  engine.value.setCandles(candles);
};

const resetCandles = () => {
  engine.value.resetCandles();
};

defineExpose({
  setCandles,
  resetCandles,
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
@import "@terminal/uikit/assets/styles/transitions.scss";
</style>
