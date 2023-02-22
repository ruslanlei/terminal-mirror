import { computed, ref } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import { useMarketStore } from '@/stores/market';
import { Candle } from '@/api/types/marketData';
import {
  getCandleField,
  getCandlesWithin24HoursFromLastCandleDate,
  mixCandles,
} from '@/helpers/candles';
import { getCandles, GetCandlesDTO } from '@/api/endpoints/marketdata/candles';
import { processServerErrors } from '@/api/common';
import { compose } from '@/utils/fp';
import { useStorage } from '@vueuse/core';
import { PairData } from '@/api/types/pair';
import {
  arraySum,
  getFirstElement,
  getLastElement,
  map,
} from '@/utils/array';
import { divideRight } from '@/helpers/number';
import { calculatePercentOfDifference } from '@/helpers/math/percents';

export type CandlesMap = Record<PairData['id'], Candle[]>;

export const useChartDataStore = defineStore('chartData', () => {
  const candleSize = ref<number>(900);

  const marketStore = useMarketStore();
  const {
    activePair,
    activePairData,
  } = storeToRefs(marketStore);

  const candlesMap = useStorage<CandlesMap>('candlesMap', {});
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
    pairId: PairData['id'],
  ) => compose(
    getCandleField('closePrice'),
    getLastElement,
  )(candlesMap.value?.[pairId]);

  const get24HoursPercentChangeByPairId = (
    pairId: PairData['id'],
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
        calculatePercentOfDifference,
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

  const isFetchingCandles = ref(false);

  const handleGetCandles = async (
    payload: GetCandlesDTO,
  ) => {
    const response = await getCandles(payload);

    if (!response.result) {
      processServerErrors(response.data);
    }

    return response;
  };

  const fetchCandles = async (
    dateFrom: string,
    dateTo: string,
  ) => {
    if (!activePairData.value) return;

    isFetchingCandles.value = true;
    const {
      result,
      data,
    } = await handleGetCandles({
      pair: activePairData.value.alias,
      date_from: dateFrom,
      date_to: dateTo,
      size: candleSize.value,
    });
    isFetchingCandles.value = false;

    if (result) {
      clearCandles();
      appendCandles(data.data);
    }
  };

  return {
    candleSize,
    candles,
    appendCandles,
    getCurrentPriceByPairId,
    get24HoursPercentChangeByPairId,
    isFetchingCandles,
    getCandles: handleGetCandles,
    fetchCandles,
    currentPrice,
    amountOfTransactionsInLast24Hours,
    firstPriceWithinLast24Hours,
    firstCandleInLast24Hours,
  };
});
