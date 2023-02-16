<template>
  <PairStats :stats="pairStats" />
</template>

<script setup lang="ts">
import PairStats from '@/components/core/pairStats/PairStats.vue';
import { useMarketStore } from '@/stores/market';
import { useChartDataStore } from '@/stores/chartData';
import { computed } from 'vue';
import { IPairStats } from '@/components/core/pairStats';
import { compose } from '@/utils/fp';
import { divideRight, roundToDecimalPoint, subtractRight } from '@/helpers/number';
import { percentFormat } from '@/utils/number';
import { calculatePercentOfDifference } from '@/helpers/math/percents';
import { findMaxByKey, findMinByKey } from '@/utils/array';
import { currency } from '@/api/types/currency';
import { storeToRefs } from 'pinia';

const marketStore = useMarketStore();
const {
  activePairData,
} = storeToRefs(marketStore);

const chartDataStore = useChartDataStore();
const {
  candles,
  currentPrice,
  firstPriceWithinLast24Hours,
} = storeToRefs(chartDataStore);

const pairStats = computed<IPairStats>(() => {
  let change = null;
  if (currentPrice.value && firstPriceWithinLast24Hours.value) {
    change = compose(
      roundToDecimalPoint(4),
      subtractRight(firstPriceWithinLast24Hours.value),
    )(currentPrice.value);
  }

  let changePercents = null;
  if (firstPriceWithinLast24Hours.value && currentPrice.value) {
    changePercents = compose(
      percentFormat,
      divideRight(100),
      calculatePercentOfDifference,
    )(firstPriceWithinLast24Hours.value, currentPrice.value);
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
    price: currentPrice.value,
    amount: '8990M',
    change,
    changePercents,
    max,
    min,
  };
});
</script>

<style lang="scss">
</style>
