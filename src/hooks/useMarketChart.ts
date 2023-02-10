import {
  computed,
  nextTick,
  ref,
  watch,
} from 'vue';
import { storeToRefs } from 'pinia';
import { useIntervalFn, useStorage } from '@vueuse/core';

import { useEmulatorStore } from '@/stores/emulator';
import { useMarketStore } from '@/stores/market';
import { compose, log } from '@/utils/fp';
import {
  addSeconds,
  dateNow,
  subtractMonths,
  toISOString,
  toTimestamp,
} from '@/utils/date';
import { Candle } from '@/api/types/marketData';
import { mixCandles, transformCandlesForChart } from '@/helpers/candles';
import { multiply, subtractRight } from '@/helpers/number';

export const useMarketChart = () => {
  const emulatorStore = useEmulatorStore();
  const {
    emulatorDate,
    isPlaying,
    candleSize,
    compression,
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
    candles.value = mixCandles(candles.value, newCandles);
  };

  const isLoadingCandles = ref(false);

  const getCandles = async () => {
    if (!activePairData.value) return;

    // FIXME
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
    } = await marketStore.getCandles({
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
  watch(activePair, getCandles, { immediate: true });

  const computedCandles = computed(() => transformCandlesForChart(candles.value));

  const isSimulating = ref(false);
  const tiks = ref(1);

  // FIXME
  watch(emulatorDate, async () => {
    if (isSimulating.value) return;

    await getCandles();
  });

  // FIXME
  const simulate = async (tiks = 1) => {
    isSimulating.value = true;

    const { result, data } = await emulatorStore.simulate(tiks);

    emulatorDate.value = compose(
      toISOString,
      addSeconds(
        multiply(
          multiply(candleSize.value, tiks),
          compression.value,
        ),
      ),
    )(emulatorDate.value);

    if (result) {
      appendCandles(data.candles);
    }

    await nextTick();

    isSimulating.value = false;
  };

  const {
    resume: playEmulator,
    pause: pauseEmulator,
  } = useIntervalFn(() => {
    if (isSimulating.value) {
      tiks.value += 1;
      return;
    }

    simulate(tiks.value);
    tiks.value = 1;
  }, 1000, {
    immediate: false,
  });

  watch(isPlaying, () => (
    isPlaying.value
      ? playEmulator
      : pauseEmulator
  )());

  return {
    chartDateFrom,
    chartDateTo,
    computedCandles,
    isLoadingCandles,
  };
};
