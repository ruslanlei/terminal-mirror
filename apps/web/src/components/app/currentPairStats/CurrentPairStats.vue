<template>
  <UiPairStats
    :coin="activePairData?.base"
    :stats="computedPairStats"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { UiPairStats, IPairStats } from '@terminal/uikit/components/pairStats';
import { useMarketStore } from '@/stores/market';
import { useChartDataStore } from '@/stores/chartData';
import { compose } from '@terminal/common/utils/fp';
import { roundToDecimalPlaces, subtractRight } from '@terminal/common/utils/number';
import { humanizeNumber, percentFormat } from '@terminal/common/utils/numberFormat';
import { calculatePercentageOfTotal } from '@/helpers/math/percents';
import { findMaxByKey, findMinByKey } from '@terminal/common/utils/array';
import { isMoreThanLeft } from '@terminal/common/utils/boolean';

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
    roundToDecimalPlaces(4),
    subtractRight(firstPriceWithinLast24Hours.value),
  )(currentPrice.value)
  : null));

const changePercents = computed(() => ((firstPriceWithinLast24Hours.value && currentPrice.value)
  ? compose(
    percentFormat(2),
    calculatePercentageOfTotal,
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
      appendText: '$',
      valueState:
        isMoreThanLeft(
          firstPriceWithinLast24Hours.value || 0,
          currentPrice.value || 0,
        )
          ? 'positive'
          : 'negative',
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
      appendText: '$',
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
