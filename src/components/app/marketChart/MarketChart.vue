<template>
  <Chart
    v-model:date-from="dateFrom"
    v-model:date-to="dateTo"
    :data="candles"
    :is-loading="isLoadingCandles"
  />
</template>

<script setup lang="ts">
import Chart from '@/components/core/chart/Chart.vue';
import { useEmulatorStore } from '@/stores/emulator';
import { computed } from 'vue';
import { transformCandlesForChart } from '@/helpers/candles';
import { storeToRefs } from 'pinia';
import { toISOString, toTimestamp } from '@/utils/date';

const emulatorStore = useEmulatorStore();
const {
  isLoadingCandles,
  chartDateFrom,
  chartDateTo,
} = storeToRefs(emulatorStore);

const dateFrom = computed({
  get: () => toTimestamp(chartDateFrom.value),
  set: (value: number) => {
    chartDateFrom.value = toISOString(value);
  },
});

const dateTo = computed({
  get: () => toTimestamp(chartDateTo.value),
  set: (value: number) => {
    chartDateTo.value = toISOString(value);
  },
});

const candles = computed(() => transformCandlesForChart(emulatorStore.candles));
</script>
