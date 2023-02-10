import { nextTick, ref } from 'vue';
import { useIntervalFn } from '@vueuse/core';
import { useEmulatorStore } from '@/stores/emulator';
import { storeToRefs } from 'pinia';
import { Candle } from '@/api/types/marketData';
import { increaseDateByTiksAndCompression } from '@/helpers/candles';

export const useEmulator = (
  newCandlesCallback: (newCandles: Candle[]) => void,
) => {
  const emulatorStore = useEmulatorStore();
  const {
    emulatorDate,
    isPlaying,
    candleSize,
    compression,
  } = storeToRefs(emulatorStore);

  const isEmulating = ref(false);
  const requiredTiks = ref(1);

  const increaseEmulatorDate = (tiks: number) => {
    emulatorDate.value = increaseDateByTiksAndCompression(
      candleSize.value,
      compression.value,
      tiks,
      emulatorDate.value,
    );
  };
  const simulateTiks = async (tiksAmount = 1) => {
    isEmulating.value = true;

    const { result, data } = await emulatorStore.simulate(tiksAmount);

    increaseEmulatorDate(tiksAmount);

    if (result) {
      newCandlesCallback(data.candles);
    }

    await nextTick();

    isEmulating.value = false;
  };

  const emulateOrCountTiks = () => {
    if (isEmulating.value) {
      requiredTiks.value += 1;
      return;
    }

    simulateTiks(requiredTiks.value);
    requiredTiks.value = 1;
  };

  const {
    resume: playEmulator,
    pause: pauseEmulator,
  } = useIntervalFn(
    emulateOrCountTiks,
    1000,
    { immediate: false },
  );

  return {
    emulatorDate,
    isPlaying,
    isEmulating,
    playEmulator,
    pauseEmulator,
  };
};
