import { computed, ref } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import { useMarketStore } from '@/stores/market';
import { Candle } from '@/api/types/marketData';
import { getCandleClosePrice, mixCandles } from '@/helpers/candles';
import { getCandles, GetCandlesDTO } from '@/api/endpoints/marketdata/candles';
import { processServerErrors } from '@/api/common';
import { IPairStats } from '@/components/core/pairStats';
import { currency } from '@/api/types/currency';
import { compose } from '@/utils/fp';
import { divideRight, roundToDecimalPoint } from '@/helpers/number';
import { calculatePercentOfDifference } from '@/helpers/math/percents';
import { percentFormat } from '@/utils/number';
import { findMaxByKey, findMinByKey } from '@/utils/array';

export const useChartDataStore = defineStore('chartData', () => {
  const candleSize = ref<number>(900);

  const marketStore = useMarketStore();
  const {
    activePairData,
  } = storeToRefs(marketStore);

  const candles = ref<Candle[]>([]);

  const clearCandles = () => {
    candles.value = [];
  };
  const appendCandles = (newCandles: Candle[]) => {
    candles.value = mixCandles(candles.value, newCandles);
  };

  const pairStats = computed<IPairStats>(() => {
    const firstCandle = candles.value.at(0);
    const firstPrice = firstCandle
      ? getCandleClosePrice(firstCandle)
      : null;

    const lastCandle = candles.value.at(-1);
    const lastPrice = lastCandle
      ? getCandleClosePrice(lastCandle)
      : null;

    let change = null;
    if (lastPrice && firstPrice) {
      change = compose(
        roundToDecimalPoint(4),
        divideRight(firstPrice),
      )(lastPrice);
    }

    let changePercents = null;
    if (firstPrice && lastPrice) {
      console.log(firstPrice, lastPrice);

      changePercents = compose(
        percentFormat,
        divideRight(100),
        calculatePercentOfDifference,
      )(firstPrice, lastPrice);
    }

    let max = null;
    if (candles.value.length) {
      max = findMaxByKey(
        2, // 2 element of array is highest price in candle
        candles.value,
      );
    }

    let min = null;
    if (candles.value.length) {
      min = findMinByKey(
        1, // 3 element of array is lowest price in candle
        candles.value,
      );
    }

    return {
      currency: activePairData.value?.base || currency.BTC,
      price: lastPrice,
      amount: '8990M',
      change,
      changePercents,
      max,
      min,
    };
  });

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
    pairStats,
    isFetchingCandles,
    getCandles: handleGetCandles,
    fetchCandles,
  };
});
