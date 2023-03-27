import { computed, Ref, ref } from 'vue';
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
import { useCandleStorage } from '@/hooks/useCandleStorage';

export type CandlesMap = Record<PairData['id'], Candle[]>;

export const useChartDataStore = defineStore('chartData', () => {
  const candleSize = ref<number>(900);

  const marketStore = useMarketStore();
  const {
    activePair,
    activePairData,
  } = storeToRefs(marketStore);

  const {
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
  } = useCandleStorage(
    activePair,
    'candlesMap',
  );

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
    lastCandle,
    candlesWithinLast24Hours,
    appendCandles,
    getCurrentPriceByPairId,
    checkIsDataExistByPairId,
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
