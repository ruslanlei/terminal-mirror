import { computed, ref, Ref } from 'vue';
import { Pair } from '@/api/types/pair';
import { useStorage } from '@vueuse/core';
import { Candle } from '@/api/types/marketData';
import {
  arraySum,
  getFirstElement,
  getLastElement,
  map,
} from '@terminal/common/utils/array';
import { getCandleField, getCandlesWithin24HoursFromLastCandleDate, mixCandles } from '@/helpers/candles';
import { compose } from '@terminal/common/utils/fp';
import { divideRight } from '@terminal/common/utils/number';
import { calculatePercentageOfTotal } from '@/helpers/math/percents';

export type CandlesMap = Record<Pair['id'], Candle[]>;

export const useCandleStorage = (
  activePair: Ref<Pair['id']> = ref(1),
  storageKey: string = 'candlesMap',
) => {
  const candlesMap = useStorage<CandlesMap>(storageKey, {});
  const candles = computed<Candle[]>(() => candlesMap.value?.[activePair.value] || []);

  const lastCandle = computed<Candle | null>(() => getLastElement(candles.value));

  const candlesWithinLast24Hours = computed<Candle[]>(
    () => getCandlesWithin24HoursFromLastCandleDate(candles.value),
  );

  const firstCandleInLast24Hours = computed<Candle | null>(
    () => getFirstElement(candlesWithinLast24Hours.value),
  );

  const currentPrice = computed(() => getCandleField('closePrice', lastCandle.value));
  const firstPriceWithinLast24Hours = computed<number | null>(
    () => getCandleField('closePrice', firstCandleInLast24Hours.value),
  );

  const amountOfTransactionsInLast24Hours = computed(() => compose(
    arraySum,
    map(getCandleField('amountOfOrders')),
  )(candlesWithinLast24Hours.value));

  const setCandlesToCurrentPair = (candles: Candle[]) => {
    candlesMap.value[activePair.value] = candles;
  };

  const getCurrentPriceByPairId = (
    pairId: Pair['id'],
  ) => compose(
    getCandleField('closePrice'),
    getLastElement,
  )(candlesMap.value?.[pairId]);

  const checkIsDataExistByPairId = (
    pairId: Pair['id'],
  ) => !!candlesMap.value?.[pairId];

  const get24HoursPercentChangeByPairId = (
    pairId: Pair['id'],
  ) => {
    const last24HoursCandles = getCandlesWithin24HoursFromLastCandleDate(
      candlesMap.value?.[pairId],
    );

    const firstPriceWithinLast24Hours = compose(
      getCandleField('closePrice'),
      getLastElement,
    )(last24HoursCandles);

    const lastPriceWithinLast24Hours = compose(
      getCandleField('closePrice'),
      getFirstElement,
    )(last24HoursCandles);

    return (
      firstPriceWithinLast24Hours
      && lastPriceWithinLast24Hours
    )
      ? compose(
        divideRight(100),
        calculatePercentageOfTotal,
      )(firstPriceWithinLast24Hours, lastPriceWithinLast24Hours)
      : null;
  };

  const clearCandles = () => {
    setCandlesToCurrentPair([]);
  };
  const appendCandles = (newCandles: Candle[]) => {
    compose(
      setCandlesToCurrentPair,
      mixCandles(candles.value),
    )(newCandles);
  };

  return {
    candlesMap,
    candles,
    lastCandle,
    candlesWithinLast24Hours,
    firstCandleInLast24Hours,
    currentPrice,
    firstPriceWithinLast24Hours,
    amountOfTransactionsInLast24Hours,
    getCurrentPriceByPairId,
    checkIsDataExistByPairId,
    get24HoursPercentChangeByPairId,
    clearCandles,
    appendCandles,
  };
};
