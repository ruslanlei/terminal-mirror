import {
  computed,
  nextTick,
  ref,
  watch,
} from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import { useStorage } from '@vueuse/core';
import { useMarketStore } from '@/stores/market';
import { simulate } from '@/api/endpoints/emulator/simulate';
import { compose, curry } from '@/utils/fp';
import {
  addDays,
  addSeconds,
  dateNow, millisecondsToSeconds,
  subtractYears,
  toISOString, toTimestamp,
} from '@/utils/date';
import { multiply } from '@/helpers/number';
import { createEventBus } from '@/utils/eventBus';
import { Order } from '@/api/types/order';
import { processServerErrors } from '@/api/common';
import { PairData } from '@/api/types/pair';
import { useChartDataStore } from '@/stores/chartData';
import { getBalance } from '@/api/endpoints/profile/getBalance';
import { isMoreThan } from '@/utils/boolean';
import { isExactOrder } from '@/helpers/orders';

export const getDefaultEmulatorDate = () => compose(
  toISOString,
  subtractYears(1),
  dateNow,
)();

export enum emulatorEvent {
  ORDER_CHANGED_STATUS = 'orderChangedStatus',
  SIMULATION_ENDED = 'simulationEnded',
}

export type PlayerDatesMap = Record<PairData['id'], string>;

export const useEmulatorStore = defineStore('emulator', () => {
  const marketStore = useMarketStore();
  const {
    activePair,
    activePairData,
  } = storeToRefs(marketStore);

  const chartDataStore = useChartDataStore();
  const {
    candleSize,
  } = storeToRefs(chartDataStore);

  const {
    subscribeEvent,
    emitEvent,
  } = createEventBus<emulatorEvent>();

  const subscribeSimulateEvent = curry(subscribeEvent<Order>)(emulatorEvent.ORDER_CHANGED_STATUS);
  const emitSimulateEvent = curry(emitEvent<Order>)(emulatorEvent.ORDER_CHANGED_STATUS);

  const subscribeSimulationEndedEvent = curry(subscribeEvent)(emulatorEvent.SIMULATION_ENDED);
  const emitSimulationEndedEvent = curry(emitEvent)(emulatorEvent.SIMULATION_ENDED);

  const playerDatesMap = useStorage<PlayerDatesMap>('playerDatesMap', {
    1: getDefaultEmulatorDate(),
  });
  watch(activePair, () => {
    if (playerDatesMap.value?.[activePair.value]) return;

    playerDatesMap.value[activePair.value] = getDefaultEmulatorDate();
  }, { immediate: true });

  const balance = useStorage('balance', 0);

  const isFetchingBalance = ref(false);
  const fetchBalance = async () => {
    isFetchingBalance.value = true;

    const { result, data } = await getBalance();
    isFetchingBalance.value = false;

    if (result) {
      balance.value = data.balance;
    }
  };

  const emulatorDate = computed({
    get: () => playerDatesMap.value?.[activePair.value],
    set: (value: string) => {
      playerDatesMap.value[activePair.value] = value;
    },
  });

  const isPlaying = ref(false);
  const turnOffPlayer = () => {
    isPlaying.value = false;
  };

  const candlesPerSecond = useStorage<number>('candlesPerSecond', 1);
  const setSpeed = (value: number) => {
    candlesPerSecond.value = value;
  };

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
      processServerErrors(response.data);
      emitSimulationEndedEvent(null);
    }

    return response;
  };

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

  const isFetchingEmulatorTimeframe = ref(false);
  const playTimeframe = async (tiksAmount = 1) => {
    isFetchingEmulatorTimeframe.value = true;
    const { result, data } = await handleSimulate(tiksAmount);

    if (result) {
      chartDataStore.appendCandles(data.candles);
      increaseEmulatorDate(tiksAmount);
    }

    nextTick(() => {
      isFetchingEmulatorTimeframe.value = false;
    });

    return { result };
  };

  const isRewinding = ref(false);
  const rewind = async () => {
    isRewinding.value = true;
    await playTimeframe(1);
    isRewinding.value = false;
  };

  subscribeSimulateEvent((order: Order) => {
    // for now its only possible to create
    // only 1 limit order, so there is need
    // to turn of player if limit order
    // have been executed.
    if (order.order_type === 'limit' && order.status === 'executed') {
      turnOffPlayer();
    }
    fetchBalance();
  });

  subscribeSimulationEndedEvent(() => {
    fetchBalance();
    turnOffPlayer();
  });

  marketStore.subscribeOrderCreated(fetchBalance);

  const isCalculatingResult = ref(false);

  const calculateResult = async () => {
    if (!activePairData.value?.to_date) return;

    const {
      to_date: maxDate,
    } = activePairData.value;

    isCalculatingResult.value = true;

    let dateFrom = emulatorDate.value;

    const candleSize = compose(
      millisecondsToSeconds,
      toTimestamp,
      addDays(1),
    )(0);

    const compression = compose(
      multiply(30),
    )(candleSize);

    let isSimulated = false;
    while (!isSimulated) {
      // eslint-disable-next-line no-await-in-loop
      const { result, data } = await simulate({
        pair: marketStore.activePair,
        date_from: dateFrom,
        candle_size: candleSize,
        compression,
        tiks: 1,
      });

      const isLimitOrderExecuted = data.events.some(
        isExactOrder('limit', 'executed'),
      );

      if (!result) {
        isSimulated = true;
      } else {
        if (isLimitOrderExecuted) {
          emulatorDate.value = dateFrom;
        } else {
          dateFrom = compose(
            toISOString,
            addSeconds(compression),
          )(dateFrom);
        }

        const isDateBiggerThanExistingData = compose(
          isMoreThan(
            toTimestamp(maxDate),
          ),
          toTimestamp,
        )(dateFrom);

        if (isLimitOrderExecuted || isDateBiggerThanExistingData) {
          isSimulated = true;
        }
      }
    }

    isCalculatingResult.value = false;
  };

  return {
    balance,
    fetchBalance,
    subscribeSimulateEvent,
    subscribeSimulationEndedEvent,
    emulatorDate,
    isPlaying,
    turnOffPlayer,
    candlesPerSecond,
    setSpeed,
    candleSize,
    compressionFactor,
    simulate: handleSimulate,
    isFetchingEmulatorTimeframe,
    playTimeframe,
    isRewinding,
    rewind,
    isCalculatingResult,
    calculateResult,
  };
});
