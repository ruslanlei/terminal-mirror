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
import { humanizeNumber, percentFormat } from '@/utils/number';
import { calculatePercentOfDifference } from '@/helpers/math/percents';
import { findMaxByKey, findMinByKey } from '@/utils/array';
import { storeToRefs } from 'pinia';

const marketStore = useMarketStore();
const {
  activePairData,
} = storeToRefs(marketStore);

const chartDataStore = useChartDataStore();
const {
  candles,
  currentPrice,
  amountOfTransactionsInLast24Hours,
  firstPriceWithinLast24Hours,
} = storeToRefs(chartDataStore);

const change = computed(() => ((currentPrice.value && firstPriceWithinLast24Hours.value)
  ? compose(
    roundToDecimalPoint(4),
    subtractRight(firstPriceWithinLast24Hours.value),
  )(currentPrice.value)
  : null));

const changePercents = computed(() => ((firstPriceWithinLast24Hours.value && currentPrice.value)
  ? compose(
    percentFormat,
    divideRight(100),
    calculatePercentOfDifference,
  )(firstPriceWithinLast24Hours.value, currentPrice.value)
  : null));

const max = computed(() => (candles.value.length
  ? findMaxByKey(
    2, // 3 element of array is highest price in candle
    candles.value,
  )
  : null));

const min = computed(() => (candles.value.length
  ? findMinByKey(
    1, // 2 element of array is lowest price in candle
    candles.value,
  )
  : null));

const pairStats = computed<IPairStats>(() => ({
  currency: activePairData.value?.base || 'BTC',
  price: currentPrice.value,
  amount: humanizeNumber(amountOfTransactionsInLast24Hours.value),
  change: change.value,
  changePercents: changePercents.value,
  max: max.value,
  min: min.value,
}));
</script>

<style lang="scss">
</style>
