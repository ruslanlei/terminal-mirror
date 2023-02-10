import {
  computed,
  ref,
  watch,
} from 'vue';
import { storeToRefs } from 'pinia';
import { useStorage } from '@vueuse/core';

import { Candle } from '@/api/types/marketData';
import { useEmulatorStore } from '@/stores/emulator';
import { useMarketStore } from '@/stores/market';
import { compose } from '@/utils/fp';
import {
  dateNow,
  subtractMonths,
  toISOString,
} from '@/utils/date';
import {
  mixCandles,
  transformCandlesForChart,
  decreaseDateByAmountOfCandles,
} from '@/helpers/candles';

export const getDefaultChartDateFrom = () => compose(
  toISOString,
  subtractMonths(4),
  dateNow,
)();

export const useMarketChart = () => {
  const emulatorStore = useEmulatorStore();
  const {
    emulatorDate,
    candleSize,
  } = storeToRefs(emulatorStore);

  const marketStore = useMarketStore();
  const {
    activePair,
    activePairData,
    marketType,
  } = storeToRefs(marketStore);

  const candles = ref<Candle[]>([]);
  const appendCandles = (newCandles: Candle[]) => {
    candles.value = mixCandles(candles.value, newCandles);
  };

  const chartDateFrom = useStorage<string>('chartDateFrom', getDefaultChartDateFrom());
  const chartDateTo = useStorage<string>('chartDateTo', emulatorDate.value);

  const dateTo = computed(
    () => (marketType.value === 'emulator'
      ? emulatorDate.value
      : emulatorDate.value), // FIXME: While realising real market
  );

  const dateFrom = computed(
    () => decreaseDateByAmountOfCandles(
      candleSize.value,
      100,
      dateTo.value,
    ),
  );

  const isFetchingCandles = ref(false);

  const fetchCandles = async () => {
    if (!activePairData.value) return;

    isFetchingCandles.value = true;
    const {
      result,
      data,
    } = await marketStore.getCandles({
      pair: activePairData.value.alias,
      date_from: dateFrom.value,
      date_to: dateTo.value,
      size: candleSize.value,
    });
    isFetchingCandles.value = false;

    if (result) {
      candles.value = data.data;
    }
  };
  watch([activePair, marketType], fetchCandles, { immediate: true });

  const computedCandles = computed(() => transformCandlesForChart(candles.value));

  return {
    chartDateFrom,
    chartDateTo,
    computedCandles,
    isFetchingCandles,
    fetchCandles,
    appendCandles,
  };
};
