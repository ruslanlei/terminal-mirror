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
import { createEventBus } from '@/utils/eventBus';
import { Order } from '@/api/types/order';

export const getDefaultEmulatorDate = () => compose(
  toISOString,
  subtractYears(1),
  dateNow,
)();

export enum emulatorEvent {
  ORDER_CHANGED_STATUS = 'orderChangedStatus'
}

export const useEmulatorStore = defineStore('emulator', () => {
  const marketStore = useMarketStore();

  const emulatorEventBus = createEventBus();

  const subscribeSimulateEvent = (
    callback: (order: Order) => void,
  ) => {
    emulatorEventBus.on(emulatorEvent.ORDER_CHANGED_STATUS, callback);
  };

  const unsubscribeSimulateEvent = (
    callback: (order: Order) => void,
  ) => {
    emulatorEventBus.detach(emulatorEvent.ORDER_CHANGED_STATUS, callback);
  };

  const emitSimulateEvent = (
    order: Order,
  ) => {
    emulatorEventBus.emit(
      emulatorEvent.ORDER_CHANGED_STATUS,
      null,
      order,
    );
  };

  const emulatorDate = useStorage('emulatorDate', getDefaultEmulatorDate());

  const isPlaying = ref(false);

  const candlesPerSecond = useStorage<number>('candlesPerSecond', 1);
  const setSpeed = (value: number) => {
    candlesPerSecond.value = value;
  };

  const candleSize = ref<number>(900);

  const compressionFactor = ref<number>(5);

  const handleSimulate = async (tiks: number) => {
    const compression = compose(
      multiply(candlesPerSecond.value),
      multiply(candleSize.value),
    )(compressionFactor.value);

    const response = await simulate({
      pair: marketStore.activePair,
      date_from: emulatorDate.value,
      candle_size: candleSize.value,
      compression,
      tiks,
    });

    if (response.result) {
      response.data.events.forEach(emitSimulateEvent);
    } else {
      console.log('Error while simulate');
    }

    return response;
  };

  return {
    subscribeSimulateEvent,
    unsubscribeSimulateEvent,
    emulatorDate,
    isPlaying,
    candlesPerSecond,
    setSpeed,
    candleSize,
    compressionFactor,
    simulate: handleSimulate,
  };
});
