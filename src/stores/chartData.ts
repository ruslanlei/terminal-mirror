import { computed, ref } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import { useMarketStore } from '@/stores/market';
import { Candle } from '@/api/types/marketData';
import { getCandleClosePrice, getCandleDate, mixCandles } from '@/helpers/candles';
import { getCandles, GetCandlesDTO } from '@/api/endpoints/marketdata/candles';
import { processServerErrors } from '@/api/common';
import { compose } from '@/utils/fp';
import { subtractDays, toTimestamp } from '@/utils/date';
import { isMoreThan } from '@/utils/boolean';

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

  const lastCandle = computed<Candle | null>(() => candles.value.at(-1) || null);

  const firstCandleInLast24Hours = computed<Candle | null>(() => {
    const lastCandle = candles.value.at(-1);

    if (!lastCandle) return null;

    const last24hoursCandles = candles.value.filter((candle: Candle) => compose(
      isMoreThan(
        compose(
          toTimestamp,
          subtractDays(1),
          getCandleDate,
        )(lastCandle),
      ),
      toTimestamp,
      getCandleDate,
    )(candle));

    return last24hoursCandles?.[0] || null;
  });

  const currentPrice = computed(() => getCandleClosePrice(lastCandle.value));

  const firstPriceWithinLast24Hours = computed<number | null>(
    () => getCandleClosePrice(firstCandleInLast24Hours.value),
  );

  return {
    candleSize,
    candles,
    appendCandles,
    isFetchingCandles,
    getCandles: handleGetCandles,
    fetchCandles,
    currentPrice,
    firstPriceWithinLast24Hours,
  };
});
