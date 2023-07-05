<template>
  <CandleChart
    ref="chart"
    v-model:date-from="chartDateFrom"
    v-model:date-to="chartDateTo"
    :candles="computedCandles"
    engine="dxChart"
    :is-loading="isFetchingCandles"
    :no-data-badge-text="t('market.noPairCandles')"
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import CandleChart from '@/components/core/candleChart/CandleChart.vue';
import { useMarketChart } from '@/hooks/useMarketChart';
import { useEmulator } from '@/hooks/useEmulator';
import { useMarketStore } from '@/stores/market';
import { ChartCandle } from '@/components/core/candleChart';

const { t } = useI18n();

const chart = ref();

const marketStore = useMarketStore();
const {
  isSettingPair,
} = storeToRefs(marketStore);

const appendCandles = (
  candles: ChartCandle[],
) => {
  chart.value.setCandles(candles);
};

const resetCandles = () => {
  chart.value.resetCandles();
};

const {
  chartDateFrom,
  chartDateTo,
  computedCandles,
  isFetchingCandles,
  isFetchingEmulatorTimeframe,
  fetchCandles,
} = useMarketChart(appendCandles, resetCandles);

const {
  emulatorDate,
  isPlaying: isEmulatorPlaying,
  isEmulating,
  playEmulator,
  pauseEmulator,
} = useEmulator();

watch(emulatorDate, async () => {
  if ([
    isEmulating.value,
    isFetchingCandles.value,
    isFetchingEmulatorTimeframe.value,
    isSettingPair.value,
  ].some(Boolean)) return;

  await fetchCandles();
});

watch(isEmulatorPlaying, () => {
  if (marketStore.marketType !== 'emulator') return;

  (isEmulatorPlaying.value
    ? playEmulator
    : pauseEmulator)();
});
</script>
