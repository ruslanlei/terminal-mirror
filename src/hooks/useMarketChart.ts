import { useEmulatorStore } from '@/stores/emulator';
import { storeToRefs } from 'pinia';
import { useMarketStore } from '@/stores/market';
import { compose } from '@/utils/fp';
import {
  dateNow, subtractDays, subtractMinutes, subtractMonths, subtractYears, toISOString,
} from '@/utils/date';
import { useStorage } from '@vueuse/core';
import { computed, ref, watch } from 'vue';
import { Candle } from '@/api/types/marketData';
import { getCandles } from '@/api/endpoints/marketdata/candles';
import { transformCandlesForChart } from '@/helpers/candles';
import { concat, filterByUniqueKey } from '@/utils/array';

export const useMarketChart = () => {
  const emulatorStore = useEmulatorStore();
  const {
    emulatorDate,
    isPlaying,
    candleSize,
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

  const appendCandles = (newCandles: Candle[]) => {
    candles.value = compose(
      filterByUniqueKey(6), // 7 element in array is iso date of candle,
    )(
      concat(candles.value, newCandles),
    );
  };

  const isLoadingCandles = ref(false);

  const handleGetCandles = async () => {
    if (!activePairData.value) return;

    const dateFrom = compose(
      toISOString,
      subtractMinutes(5),
    )(emulatorDate.value);

    isLoadingCandles.value = true;
    const {
      result,
      data,
    } = await getCandles({
      pair: activePairData.value.alias,
      date_from: dateFrom,
      date_to: emulatorDate.value,
      size: candleSize.value,
    });
    isLoadingCandles.value = false;

    if (result) {
      candles.value = data.data;
    }
  };
  watch(activePair, handleGetCandles, { immediate: true });

  const computedCandles = computed(() => transformCandlesForChart(candles.value));

  watch(isPlaying, async () => {
    const { result, data } = await emulatorStore.simulate();

    if (result) {
      appendCandles(data.candles);
    }
  });

  return {
    chartDateFrom,
    chartDateTo,
    computedCandles,
    isLoadingCandles,
  };
};
