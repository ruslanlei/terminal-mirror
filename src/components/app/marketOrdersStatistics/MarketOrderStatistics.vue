<template>
  <MarketOrderStatisticsContainer>
    <template #commonAmountOfOrders>
      {{ commonAmountOfTransactions }}
    </template>
    <template #commonAmountOfOrdersLabel>
      {{ t('statistics.orders.commonAmountLabel') }}
    </template>
    <template #successRate>
      {{ successRate }}
    </template>
    <template #successRateLabel>
      {{ t('statistics.orders.successRateLabel') }}
    </template>
    <template #successOrders>
      <StatisticsSuccessOrders />
    </template>
    <template #unsuccessfulOrders>
      <StatisticsFailedOrders />
    </template>
    <template #ordersTurnover>
      <StatisticsTurnover />
    </template>
  </MarketOrderStatisticsContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useMarketStore } from '@/stores/market';
import MarketOrderStatisticsContainer
  from '@/containers/marketOrderStatisticsContainer/MarketOrderStatisticsContainer.vue';
import StatisticsSuccessOrders from '@/components/app/statisticsSuccessOrders/StatisticsSuccessOrders.vue';
import StatisticsFailedOrders
  from '@/components/app/statisticsFailedOrders/StatisticsFailedOrders.vue';
import StatisticsTurnover from '@/components/app/statisticsTurnover/StatisticsTurnover.vue';
import { compose } from '@/utils/fp';
import { calculateSuccessRate } from '@/helpers/orders';
import { toCssPercentValue } from '@/utils/style';

const { t } = useI18n();

const marketStore = useMarketStore();
const {
  closedOrders,
} = storeToRefs(marketStore);

const commonAmountOfTransactions = computed(() => (
  closedOrders.value.length
));

const successRate = computed(() => (
  compose(
    toCssPercentValue,
    calculateSuccessRate,
  )(closedOrders.value)
));
</script>
