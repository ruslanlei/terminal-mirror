<template>
  <PairStats
    :coin="activePairData?.base"
    :stats="computedPairStats"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import PairStats from '@/components/core/pairStats/PairStats.vue';
import { useMarketStore } from '@/stores/market';
import { useChartDataStore } from '@/stores/chartData';
import { IPairStats } from '@/components/core/pairStats';
import { compose } from '@/utils/fp';
import { divideRight, roundToDecimalPoint, subtractRight } from '@/helpers/number';
import { humanizeNumber, percentFormat } from '@/utils/number';
import { calculatePercentOfDifference } from '@/helpers/math/percents';
import { findMaxByKey, findMinByKey } from '@/utils/array';

const { t } = useI18n();

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

const amountOfTransactions = computed(
  () => humanizeNumber(amountOfTransactionsInLast24Hours.value),
);

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

const computedPairStats = computed<IPairStats>(() => [
  [
    {
      label: t('pairStats.price'),
      value: currentPrice.value,
      valueState: 'positive',
    },
    {
      label: t('pairStats.amount'),
      value: amountOfTransactions.value,
      valueState: 'default',
    },
  ],
  [
    {
      label: t('pairStats.change'),
      value: change.value,
      valueState: 'auto',
    },
    {
      label: t('pairStats.in24hours'),
      value: changePercents.value,
      valueState: 'default',
    },
  ],
  [
    {
      label: t('pairStats.max'),
      value: max.value,
      valueState: 'default',
    },
    {
      label: t('pairStats.min'),
      value: min.value,
      valueState: 'default',
    },
  ],
]);
</script>
