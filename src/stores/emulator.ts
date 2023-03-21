import {
  computed,
  nextTick,
  ref,
  watch,
} from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import { useStorage } from '@vueuse/core';
import { useI18n } from 'vue-i18n';
import { Subject } from 'rxjs';
import { useMarketStore } from '@/stores/market';
import { simulate } from '@/api/endpoints/emulator/simulate';
import { compose } from '@/utils/fp';
import {
  addDays,
  addSeconds,
  dateNow,
  millisecondsToSeconds,
  subtractYears,
  toISOString,
  toTimestamp,
} from '@/utils/date';
import { multiply } from '@/helpers/number';
import { Order } from '@/api/types/order';
import { processServerErrors } from '@/api/common';
import { PairData } from '@/api/types/pair';
import { useChartDataStore } from '@/stores/chartData';
import { getBalance } from '@/api/endpoints/profile/getBalance';
import { isMoreThan } from '@/utils/boolean';
import { isExactOrder } from '@/helpers/orders';
import { useToastStore } from '@/stores/toasts';

export const getDefaultEmulatorDate = () => compose(
  toISOString,
  subtractYears(1),
  dateNow,
)();

export type PlayerDatesMap = Record<PairData['id'], string>;

export const useEmulatorStore = defineStore('emulator', () => {
  const { t } = useI18n();
  const toastStore = useToastStore();

  const marketStore = useMarketStore();
  const {
    activePair,
    activePairData,
  } = storeToRefs(marketStore);

  const chartDataStore = useChartDataStore();
  const {
    candleSize,
  } = storeToRefs(chartDataStore);

  const simulateEventSubject = new Subject<Order>();
  const subscribeSimulateEvent = (
    callback: (...args: any[]) => any,
  ) => simulateEventSubject.subscribe(callback);
  const emitSimulateEvent = (order: Order) => {
    simulateEventSubject.next(order);
  };

  const simulationEndedSubject = new Subject<true>();

  const subscribeSimulationEndedEvent = (
    callback: (...args: any[]) => any,
  ) => simulationEndedSubject.subscribe(callback);
  const emitSimulationEndedEvent = () => {
    simulationEndedSubject.next(true);
  };

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

  const handleSimulate = async (
    pair: PairData['id'],
    dateFrom: string,
    candleSize: number,
    compression: number,
    tiks: number,
  ) => {
    const response = await simulate({
      pair,
      date_from: dateFrom,
      candle_size: candleSize,
      compression,
      tiks,
    });

    if (!response.result) {
      processServerErrors(response.data);
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

  const playTunedTimeframe = async (
    candleSize: number,
    candlesPerSecond: number,
    compressionFactor: number,
    tiks: number,
  ) => {
    isFetchingEmulatorTimeframe.value = true;
    const compression = compose(
      multiply(candlesPerSecond),
      multiply(candleSize),
    )(compressionFactor);

    const { result, data } = await handleSimulate(
      activePair.value,
      emulatorDate.value,
      candleSize,
      compression,
      tiks,
    );

    if (result) {
      chartDataStore.appendCandles(data.candles);
      data.events.forEach(emitSimulateEvent);
      increaseEmulatorDate(tiks);
    } else {
      emitSimulationEndedEvent();
    }

    nextTick(() => {
      isFetchingEmulatorTimeframe.value = false;
    });

    return { result };
  };

  const playTimeframe = (
    tiks: number,
  ) => playTunedTimeframe(
    candleSize.value,
    candlesPerSecond.value,
    compressionFactor.value,
    tiks,
  );

  const isRewinding = ref(false);
  const rewind = async () => {
    isRewinding.value = true;
    await playTunedTimeframe(
      candleSize.value,
      1,
      1,
      1,
    );
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
  marketStore.subscribeOrderDelete(fetchBalance);

  const isCalculatingResult = ref(false);
  const isCalculateResultAbortionQueued = ref(false);

  const abortCalculateResult = () => {
    isCalculateResultAbortionQueued.value = true;
  };

  const calculateResult = async () => {
    if (isCalculatingResult.value) return;

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
      if (isCalculateResultAbortionQueued.value) {
        isCalculateResultAbortionQueued.value = false;
        break;
      }

      // eslint-disable-next-line no-await-in-loop
      const { result, data } = await simulate({
        pair: marketStore.activePair,
        date_from: dateFrom,
        candle_size: candleSize,
        compression,
        tiks: 1,
      });

      const isLimitOrderExecuted = data.events?.some(
        isExactOrder('limit', 'executed'),
      );

      if (!result) {
        isSimulated = true;
      } else {
        if (data.events.length) {
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

        if (isDateBiggerThanExistingData) {
          toastStore.showDanger({
            text: t('emulator.player.error.historyDataIsOver', {
              pair: activePairData.value.alias,
            }),
            duration: 7000,
          });
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
    isFetchingEmulatorTimeframe,
    playTimeframe,
    isRewinding,
    rewind,
    isCalculatingResult,
    isCalculateResultAbortionQueued,
    calculateResult,
    abortCalculateResult,
  };
});
