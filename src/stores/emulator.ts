import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { useMarketStore } from '@/stores/market';
import { simulate } from '@/api/endpoints/emulator/simulate';
import { compose } from '@/utils/fp';
import {
  dateNow,
  subtractYears,
  toISOString,
} from '@/utils/date';
import { multiply } from '@/helpers/number';

export const getDefaultEmulatorDate = () => compose(
  toISOString,
  subtractYears(1),
  dateNow,
)();

export const useEmulatorStore = defineStore('emulator', () => {
  const marketStore = useMarketStore();

  const emulatorDate = useStorage('emulatorDate', getDefaultEmulatorDate());

  const isPlaying = ref(false);

  const candlesPerSecond = useStorage<number>('emulatorSpeed', 1);
  const setSpeed = (value: number) => {
    candlesPerSecond.value = value;
  };

  const candleSize = ref<number>(900);

  const compression = ref<number>(5);

  const handleSimulate = (tiks: number) => simulate({
    pair: marketStore.activePair,
    date_from: emulatorDate.value,
    candle_size: candleSize.value,
    compression: compose(
      multiply(candlesPerSecond.value),
      multiply(candleSize.value),
    )(compression.value),
    tiks,
  });

  return {
    emulatorDate,
    isPlaying,
    candlesPerSecond,
    setSpeed,
    candleSize,
    compression,
    simulate: handleSimulate,
  };
});
