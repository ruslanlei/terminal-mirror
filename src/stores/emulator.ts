import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { ref } from 'vue';
import { useMarketStore } from '@/stores/market';
import { simulate } from '@/api/endpoints/emulator/simulate';

export type PlayerSpeed = 1 | 2 | 10 | 100 | 1000 | 24000;
export const useEmulatorStore = defineStore('emulator', () => {
  const marketStore = useMarketStore();

  const currentDate = useStorage('emulatorDate', new Date().toISOString());

  const isPlaying = ref(false);

  const speed = useStorage<PlayerSpeed>('emulatorSpeed', 1);
  const setSpeed = (value: PlayerSpeed) => {
    speed.value = value;
  };

  const handleSimulate = async () => {
    await simulate({
      pair: marketStore.activePair,
      date_from: currentDate.value,
      candle_size: 3600,
      compression: 36000,
      tiks: 1,
    });
  };

  return {
    currentDate,
    isPlaying,
    speed,
    setSpeed,
    simulate: handleSimulate,
  };
});
