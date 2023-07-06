import { ref } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import { useMarketStore } from '@/stores/market';
import { getCandles } from '@/api/endpoints/marketdata/candles';
import { processServerErrors } from '@/api/common';
import { useCandleStorage } from '@/hooks/useCandleStorage';
import { Candle } from '@/api/types/marketData';

export type AppendCandlesListener = (
    newCandles: Candle[],
) => void

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
    appendCandles: candleStoreAppendCandles,
  } = useCandleStorage(
    activePair,
    'candlesMap',
  );

  const onAppendCandlesListeners = ref<AppendCandlesListener[]>([]);

  const listenForAppendCandles = (
    callback: AppendCandlesListener,
  ) => {
    onAppendCandlesListeners.value.push(callback);

    return () => {
      onAppendCandlesListeners.value.filter((cb) => cb === callback);
    };
  };

  const appendCandles = (
    newCandles: Candle[],
  ) => {
    onAppendCandlesListeners.value.forEach((callback) => callback(newCandles));
    candleStoreAppendCandles(newCandles);
  };

  const isFetchingCandles = ref(false);

  const fetchCandles = async (
    dateFrom: string,
    dateTo: string,
  ) => {
    if (!activePairData.value) return;

    isFetchingCandles.value = true;
    const {
      result,
      data,
    } = await getCandles({
      pair: activePairData.value.alias,
      date_from: dateFrom,
      date_to: dateTo,
      size: candleSize.value,
    });

    isFetchingCandles.value = false;

    if (result) {
      clearCandles();
      appendCandles(data.data);
    } else {
      processServerErrors(data);
    }
  };

  return {
    candleSize,
    candles,
    lastCandle,
    candlesWithinLast24Hours,
    appendCandles,
    listenForAppendCandles,
    getCurrentPriceByPairId,
    checkIsDataExistByPairId,
    get24HoursPercentChangeByPairId,
    isFetchingCandles,
    fetchCandles,
    currentPrice,
    amountOfTransactionsInLast24Hours,
    firstPriceWithinLast24Hours,
    firstCandleInLast24Hours,
  };
});
