import {
  ref,
  computed,
} from 'vue';
import { useIntervalFn } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { secondsToMilliseconds } from '@terminal/common/utils/date';
import { useEmulatorStore } from '@/stores/emulator';

export const useEmulator = () => {
  const emulatorStore = useEmulatorStore();
  const {
    emulatorDate,
    isPlaying,
    compressionFactor,
  } = storeToRefs(emulatorStore);

  const isEmulating = ref(false);
  const requiredTiks = ref(1);

  const simulateTiks = async (tiksAmount = 1) => {
    isEmulating.value = true;

    await emulatorStore.playTimeframe(tiksAmount);

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

  emulatorStore.subscribeSimulationEndedEvent(pauseEmulator);

  return {
    emulatorDate,
    isPlaying,
    isEmulating,
    playEmulator,
    pauseEmulator,
  };
};
