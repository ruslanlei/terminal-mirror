<template>
  <Chart
    v-model:date-from="chartDateFrom"
    v-model:date-to="chartDateTo"
    :data="computedCandles"
    :is-loading="isFetchingCandles"
  />
</template>

<script setup lang="ts">
import Chart from '@/components/core/chart/Chart.vue';
import { useMarketChart } from '@/hooks/useMarketChart';
import { watch } from 'vue';
import { useEmulator } from '@/hooks/useEmulator';
import { useMarketStore } from '@/stores/market';

const marketStore = useMarketStore();

const {
  chartDateFrom,
  chartDateTo,
  computedCandles,
  isFetchingCandles,
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
  if (isEmulating.value || isFetchingCandles) return;

  await fetchCandles();
});

watch(isEmulatorPlaying, () => {
  if (marketStore.marketType !== 'emulator') return;

  (isEmulatorPlaying.value
    ? playEmulator
    : pauseEmulator)();
});
</script>
