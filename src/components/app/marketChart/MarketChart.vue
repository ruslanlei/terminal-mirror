<template>
  <Chart
    v-model:date-from="dateFrom"
    v-model:date-to="dateTo"
    :data="computedCandles"
    :is-loading="isLoadingCandles"
  />
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import Chart from '@/components/core/chart/Chart.vue';
import { useEmulatorStore } from '@/stores/emulator';
import { transformCandlesForChart } from '@/helpers/candles';
import {
  dateNow,
  subtractMonths,
  toISOString,
} from '@/utils/date';
import { useStorage } from '@vueuse/core';
import { Candle } from '@/api/types/marketData';
import { compose } from '@/utils/fp';
import { getCandles } from '@/api/endpoints/marketdata/candles';
import { useMarketStore } from '@/stores/market';

const emulatorStore = useEmulatorStore();
const {
  emulatorDate,
} = storeToRefs(emulatorStore);

const marketStore = useMarketStore();
const {
  activePair,
  activePairData,
} = storeToRefs(marketStore);

const getDefaultChartDateFrom = () => compose(
  toISOString,
  subtractMonths(4),
  dateNow,
)();

const chartDateFrom = useStorage<string>('chartDateFrom', getDefaultChartDateFrom());
const chartDateTo = useStorage<string>('chartDateTo', emulatorDate.value);

const candles = ref<Candle[]>([]);

const isLoadingCandles = ref(false);

const handleGetCandles = async () => {
  if (!activePairData.value) return;

  const dateFrom = compose(
    toISOString,
    subtractMonths(3),
  )(emulatorDate.value);

  isLoadingCandles.value = true;
  const {
    result,
    data,
  } = await getCandles({
    pair: activePairData.value.alias,
    date_from: dateFrom,
    date_to: emulatorDate.value,
    size: 86400,
  });
  isLoadingCandles.value = false;

  if (result) {
    candles.value = data.data;
  }
};
watch(activePair, handleGetCandles, { immediate: true });

const computedCandles = computed(() => transformCandlesForChart(candles.value));
</script>
