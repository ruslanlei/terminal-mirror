import {
  computed, nextTick,
  watch,
} from 'vue';
import { storeToRefs } from 'pinia';
import { useStorage } from '@vueuse/core';

import { useEmulatorStore } from '@/stores/emulator';
import { useMarketStore } from '@/stores/market';
import { compose } from '@/utils/fp';
import {
  dateNow,
  subtractMonths,
  toISOString,
} from '@/utils/date';
import {
  transformCandlesForChart,
  decreaseDateByAmountOfCandles,
} from '@/helpers/candles';
import { useChartDataStore } from '@/stores/chartData';

export const getDefaultChartDateFrom = compose(
  toISOString,
  subtractMonths(4),
  dateNow,
);

export const useMarketChart = () => {
  const emulatorStore = useEmulatorStore();
  const {
    emulatorDate,
    candleSize,
    isFetchingEmulatorTimeframe,
  } = storeToRefs(emulatorStore);

  const marketStore = useMarketStore();
  const {
    activePair,
    marketType,
  } = storeToRefs(marketStore);

  const chartDataStore = useChartDataStore();
  const {
    candles,
    isFetchingCandles,
  } = storeToRefs(chartDataStore);

  const chartDateFrom = useStorage<string>('chartDateFrom', getDefaultChartDateFrom());
  const chartDateTo = useStorage<string>('chartDateTo', emulatorDate.value);

  const dateTo = computed(
    () => (marketType.value === 'emulator'
      ? emulatorDate.value
      // FIXME: While realising real market
      : emulatorDate.value),
  );

  const dateFrom = computed(
    () => decreaseDateByAmountOfCandles(
      candleSize.value,
      100,
      dateTo.value,
    ),
  );

  const fetchCandles = async () => {
    await chartDataStore.fetchCandles(
      dateFrom.value,
      dateTo.value,
    );
  };
  watch([activePair, marketType], async () => {
    if (chartDataStore.checkIsDataExistByPairId(activePair.value)) return;

    await nextTick();

    await fetchCandles();
  }, { immediate: true });

  const computedCandles = computed(() => transformCandlesForChart(candles.value));

  return {
    chartDateFrom,
    chartDateTo,
    computedCandles,
    isFetchingCandles,
    isFetchingEmulatorTimeframe,
    fetchCandles,
  };
};
