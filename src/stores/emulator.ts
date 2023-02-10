import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { useMarketStore } from '@/stores/market';
import { simulate } from '@/api/endpoints/emulator/simulate';
import { compose } from '@/utils/fp';
import {
  dateNow,
  subtractMonths,
  toISOString,
} from '@/utils/date';

export const getDefaultEmulatorDate = () => compose(
  toISOString,
  subtractMonths(1),
  dateNow,
)();

export type PlayerSpeed = 1 | 2 | 10 | 100 | 1000 | 24000;
export const useEmulatorStore = defineStore('emulator', () => {
  const marketStore = useMarketStore();

  const emulatorDate = useStorage('emulatorDate', getDefaultEmulatorDate());

  const isPlaying = ref(false);

  const speed = useStorage<PlayerSpeed>('emulatorSpeed', 1);
  const setSpeed = (value: PlayerSpeed) => {
    speed.value = value;
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
    simulate: handleSimulate,
  };
});
