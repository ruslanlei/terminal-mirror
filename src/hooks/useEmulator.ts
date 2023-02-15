import {
  computed, nextTick, ref, watch,
} from 'vue';
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
    compressionFactor,
    candlesPerSecond,
  } = storeToRefs(emulatorStore);

  const isEmulating = ref(false);
  const requiredTiks = ref(1);

  const increaseEmulatorDate = (tiks: number) => {
    const shiftInSeconds = compose(
      multiply(tiks),
      multiply(compressionFactor.value),
      multiply(candlesPerSecond.value),
    )(candleSize.value);

    emulatorDate.value = compose(
      toISOString,
      addSeconds(shiftInSeconds),
    )(emulatorDate.value);
  };

  const isLastTikFailed = ref(false);
  const simulateTiks = async (tiksAmount = 1) => {
    isEmulating.value = true;

    const { result, data } = await emulatorStore.simulate(tiksAmount);

    increaseEmulatorDate(tiksAmount);

    if (result) {
      newCandlesCallback(data.candles);
    } else {
      isLastTikFailed.value = true;
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
    () => secondsToMilliseconds(compressionFactor.value),
  );

  const {
    resume: playEmulator,
    pause: pauseEmulator,
  } = useIntervalFn(
    emulateOrCountTiks,
    computedInterval,
    {
      immediate: false,
      immediateCallback: true,
    },
  );

  watch(isLastTikFailed, () => {
    if (!isLastTikFailed.value) return;

    pauseEmulator();

    emulatorStore.turnOffPlayer();

    isLastTikFailed.value = false;
  });

  return {
    emulatorDate,
    isPlaying,
    isEmulating,
    playEmulator,
    pauseEmulator,
  };
};
