import { defineStore, storeToRefs } from 'pinia';
import { useStorage } from '@vueuse/core';
import { ref } from 'vue';
import { useMarketStore } from '@/stores/market';
import { simulate } from '@/api/endpoints/emulator/simulate';
import { compose } from '@/utils/fp';
import {
  dateNow,
  subtractMonths,
  subtractYears,
  toISOString,
} from '@/utils/date';
import { getCandles } from '@/api/endpoints/marketdata/candles';
import { Candle } from '@/api/types/marketData';

const getDefaultEmulatorDate = () => compose(
  toISOString,
  subtractMonths(1),
  dateNow,
)();

export type PlayerSpeed = 1 | 2 | 10 | 100 | 1000 | 24000;
export const useEmulatorStore = defineStore('emulator', () => {
  const marketStore = useMarketStore();
  const {
    activePairData,
  } = storeToRefs(marketStore);

  // player controls
  const emulatorDate = useStorage('emulatorDate', getDefaultEmulatorDate());

  const isPlaying = ref(false);

  const speed = useStorage<PlayerSpeed>('emulatorSpeed', 1);
  const setSpeed = (value: PlayerSpeed) => {
    speed.value = value;
  };

  // candles
  const candles = ref<Candle[]>([]);

  const handleGetCandles = async () => {
    if (!activePairData.value) return;

    const dateFrom = compose(
      toISOString,
      subtractYears(1),
      subtractMonths(1),
    )(emulatorDate.value);

    const dateTo = compose(
      toISOString,
      subtractYears(1),
    )(emulatorDate.value);

    const {
      result,
      data,
    } = await getCandles({
      pair: activePairData.value.alias,
      date_from: dateFrom,
      date_to: dateTo,
      size: 86400,
    });

    if (result) {
      candles.value = data.data;
    }
  };

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
    emulatorDate,
    isPlaying,
    speed,
    setSpeed,
    candles,
    getCandles: handleGetCandles,
    simulate: handleSimulate,
  };
});
