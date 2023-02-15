import { ref } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import { useMarketStore } from '@/stores/market';
import { Candle } from '@/api/types/marketData';
import { mixCandles } from '@/helpers/candles';
import { getCandles, GetCandlesDTO } from '@/api/endpoints/marketdata/candles';
import { processServerErrors } from '@/api/common';

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

  return {
    candleSize,
    candles,
    appendCandles,
    isFetchingCandles,
    getCandles: handleGetCandles,
    fetchCandles,
  };
});
