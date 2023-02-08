import { defineStore, storeToRefs } from 'pinia';
import { useStorage } from '@vueuse/core';
import { ref, watch } from 'vue';
import { useMarketStore } from '@/stores/market';
import { simulate } from '@/api/endpoints/emulator/simulate';
import { compose } from '@/utils/fp';
import {
  dateNow,
  subtractMonths,
  toISOString,
} from '@/utils/date';
import { getCandles } from '@/api/endpoints/marketdata/candles';
import { Candle } from '@/api/types/marketData';

const getDefaultEmulatorDateFrom = () => compose(
  toISOString,
  subtractMonths(4),
  dateNow,
)();

const getDefaultEmulatorDate = () => compose(
  toISOString,
  subtractMonths(1),
  dateNow,
)();

export type PlayerSpeed = 1 | 2 | 10 | 100 | 1000 | 24000;
export const useEmulatorStore = defineStore('emulator', () => {
  const marketStore = useMarketStore();
  const {
    activePair,
    activePairData,
  } = storeToRefs(marketStore);

  // player controls
  const chartDateFrom = useStorage('chartDateFrom', getDefaultEmulatorDateFrom());
  const chartDateTo = useStorage('chartDateTo', getDefaultEmulatorDate());

  const emulatorDate = useStorage('emulatorDate', getDefaultEmulatorDate());

  const isPlaying = ref(false);

  const speed = useStorage<PlayerSpeed>('emulatorSpeed', 1);
  const setSpeed = (value: PlayerSpeed) => {
    speed.value = value;
  };

  // candles
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

  // simulate
  const handleSimulate = async () => {
    await simulate({
      pair: marketStore.activePair,
      date_from: emulatorDate.value,
      candle_size: 3600,
      compression: 36000,
      tiks: 1,
    });
  };

  return {
    chartDateFrom,
    chartDateTo,
    emulatorDate,
    isPlaying,
    speed,
    setSpeed,
    candles,
    isLoadingCandles,
    getCandles: handleGetCandles,
    simulate: handleSimulate,
  };
});
