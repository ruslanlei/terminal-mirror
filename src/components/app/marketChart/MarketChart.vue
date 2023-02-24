<template>
  <Chart
    v-model:date-from="chartDateFrom"
    v-model:date-to="chartDateTo"
    :data="computedCandles"
    :is-loading="isFetchingCandles"
    :no-data-badge-text="t('market.noPairCandles')"
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Chart from '@/components/core/chart/Chart.vue';
import { useMarketChart } from '@/hooks/useMarketChart';
import { watch } from 'vue';
import { useEmulator } from '@/hooks/useEmulator';
import { useMarketStore } from '@/stores/market';

const { t } = useI18n();

const marketStore = useMarketStore();

const {
  chartDateFrom,
  chartDateTo,
  computedCandles,
  isFetchingCandles,
  isFetchingEmulatorTimeframe,
  fetchCandles,
} = useMarketChart();

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
