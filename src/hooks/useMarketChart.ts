import { useEmulatorStore } from '@/stores/emulator';
import { storeToRefs } from 'pinia';
import { useMarketStore } from '@/stores/market';
import { compose, log } from '@/utils/fp';
import {
  dateNow,
  subtractMonths,
  toISOString,
  toTimestamp,
} from '@/utils/date';
import { useStorage } from '@vueuse/core';
import { computed, ref, watch } from 'vue';
import { Candle } from '@/api/types/marketData';
import { getCandles } from '@/api/endpoints/marketdata/candles';
import { transformCandlesForChart } from '@/helpers/candles';
import { concat, filterByUniqueKey } from '@/utils/array';
import { multiply, subtractRight } from '@/helpers/number';

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

    // TODO: FIX THIS
    const dateFrom = compose(
      toISOString,
      subtractRight(
        multiply(
          multiply(candleSize.value, 1000),
          60,
        ),
      ),
      log('test'),
      toTimestamp,
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

  const tiks = ref(1);
  const timer = ref();

  const isLoading = ref(false);

  const simulate = async (tiks = 1) => {
    isLoading.value = true;
    const { result, data } = await emulatorStore.simulate(tiks);
    isLoading.value = false;

    if (result) {
      appendCandles(data.candles);
    }
  };

  const playEmulator = () => {
    timer.value = setInterval(() => {
      if (isLoading.value) {
        tiks.value += 1;
        return;
      }

      simulate(tiks.value);
      tiks.value = 1;
    }, 1000);
  };

  const stopSimulating = () => {
    clearInterval(timer.value);
  };

  watch(isPlaying, () => {
    if (isPlaying) {
      playEmulator();
    } else {
      stopSimulating();
    }
  });

  return {
    chartDateFrom,
    chartDateTo,
    computedCandles,
    isLoadingCandles,
  };
};
