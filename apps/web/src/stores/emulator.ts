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
import { compose } from '@terminal/common/utils/fp';
import {
  addDays,
  addSeconds,
  dateNow,
  millisecondsToSeconds,
  subtractYears,
  toISOString,
  toTimestamp,
} from '@terminal/common/utils/date';
import { multiply } from '@terminal/common/utils/number';
import { isMoreThanLeft } from '@terminal/common/utils/boolean';
import { AnyFunction } from '@terminal/common/utils/typescript';
import { Order } from '@/api/types/order';
import { Pair } from '@/api/types/pair';
import { isExactOrder, isOrderOfType } from '@/helpers/orders';
import { processServerErrors } from '@/api/common';
import { useChartDataStore } from '@/stores/chartData';
import { getBalance } from '@/api/endpoints/profile/getBalance';
import { useToastStore } from '@/stores/toasts';
import { simulate } from '@/api/endpoints/emulator/simulate';
import { useMarketStore } from '@/stores/market';

export const getDefaultEmulatorDate = () => compose(
  toISOString,
  subtractYears(1),
  dateNow,
)();

export type PlayerDatesMap = Record<Pair['id'], string>;

export const useEmulatorStore = defineStore('emulator', () => {
  const { t } = useI18n();
  const toastStore = useToastStore();

  const marketStore = useMarketStore();
  const {
    activePair,
    activePairData,
    activeOrderForCurrentPair,
  } = storeToRefs(marketStore);

  const chartDataStore = useChartDataStore();
  const {
    candleSize,
  } = storeToRefs(chartDataStore);

  const simulateEventSubject = new Subject<Order>();
  const subscribeSimulateEvent = (
    callback: AnyFunction,
  ) => simulateEventSubject.subscribe(callback);
  const emitSimulateEvent = (order: Order) => {
    simulateEventSubject.next(order);
  };

  const simulationEndedSubject = new Subject<true>();

  const subscribeSimulationEndedEvent = (
    callback: AnyFunction,
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
    pair: Pair['id'],
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

    let position = activeOrderForCurrentPair.value?.position || 0;

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

    console.log('started');

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

      console.log('position', position);
      console.log('data', data);

      position = (data?.events || []).reduce((newPosition, order) => {
        console.log('event quantity', order.quantity);

        if (!isOrderOfType('tp') && !isOrderOfType('sl')) return newPosition;

        return newPosition - order.quantity;
      }, position);

      // FIXME: it should work like this.
      // const isLimitOrderExecuted = data.events?.find(
      //   isExactOrder('limit', 'executed'),
      // )?.position === 0;

      // FIXME: but works like this bc of backend.
      const isLimitOrderExecuted = position <= 0;

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
          isMoreThanLeft(
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

    await marketStore.getActiveorderList();

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
