import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { useMarketStore } from '@/stores/market';
import { simulate } from '@/api/endpoints/emulator/simulate';
import { compose } from '@/utils/fp';
import {
  addSeconds,
  dateNow,
  subtractYears,
  toISOString,
} from '@/utils/date';

export const getDefaultEmulatorDate = () => compose(
  toISOString,
  subtractYears(1),
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

  const candleSize = ref<number>(15);

  // simulate
  const handleSimulate = () => {
    emulatorDate.value = compose(
      toISOString,
      addSeconds(candleSize.value),
    )(emulatorDate.value);

    return simulate({
      pair: marketStore.activePair,
      date_from: emulatorDate.value,
      candle_size: candleSize.value,
      compression: candleSize.value,
      tiks: 1,
    });
  };

  return {
    emulatorDate,
    isPlaying,
    speed,
    setSpeed,
    candleSize,
    simulate: handleSimulate,
  };
});
