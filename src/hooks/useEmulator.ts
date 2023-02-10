import { nextTick, ref, watch } from 'vue';
import { compose } from '@/utils/fp';
import { addSeconds, toISOString } from '@/utils/date';
import { multiply } from '@/helpers/number';
import { useIntervalFn } from '@vueuse/core';
import { useEmulatorStore } from '@/stores/emulator';
import { storeToRefs } from 'pinia';
import { Candle } from '@/api/types/marketData';

export const useEmulator = (
  callback: (newCandles: Candle[]) => void,
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
  const emulateTiks = async (amount = 1) => {
    isEmulating.value = true;

    const { result, data } = await emulatorStore.simulate(amount);

    emulatorDate.value = compose(
      toISOString,
      addSeconds(
        multiply(
          multiply(candleSize.value, amount),
          compression.value,
        ),
      ),
    )(emulatorDate.value);

    if (result) {
      callback(data.candles);
    }

    await nextTick();

    isEmulating.value = false;
  };

  const emulateOrCountTiks = () => {
    if (isEmulating.value) {
      requiredTiks.value += 1;
      return;
    }

    emulateTiks(requiredTiks.value);
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
