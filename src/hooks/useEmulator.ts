import { computed, nextTick, ref } from 'vue';
import { useIntervalFn } from '@vueuse/core';
import { useEmulatorStore } from '@/stores/emulator';
import { storeToRefs } from 'pinia';
import { Candle } from '@/api/types/marketData';
import { multiply } from '@/helpers/number';
import { compose } from '@/utils/fp';
import { addSeconds, secondsToMilliseconds, toISOString } from '@/utils/date';

export const useEmulator = (
  newCandlesCallback: (newCandles: Candle[]) => void,
) => {
  const emulatorStore = useEmulatorStore();
  const {
    emulatorDate,
    isPlaying,
    candleSize,
    compression,
    candlesPerSecond,
  } = storeToRefs(emulatorStore);

  const isEmulating = ref(false);
  const requiredTiks = ref(1);

  const increaseEmulatorDate = (tiks: number) => {
    const shiftInSeconds = compose(
      multiply(tiks),
      multiply(compression.value),
      multiply(candleSize.value),
    )(candlesPerSecond.value);

    emulatorDate.value = compose(
      toISOString,
      addSeconds(shiftInSeconds),
    )(emulatorDate.value);
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

  const computedInterval = computed(
    () => secondsToMilliseconds(compression.value),
  );

  const {
    resume: playEmulator,
    pause: pauseEmulator,
  } = useIntervalFn(
    emulateOrCountTiks,
    computedInterval,
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
