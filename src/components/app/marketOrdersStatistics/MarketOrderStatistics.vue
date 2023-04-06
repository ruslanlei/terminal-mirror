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
      <StatisticsUnsuccessfulOrders />
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
import StatisticsUnsuccessfulOrders
  from '@/components/app/statisticsUnsuccessfulOrders/StatisticsUnsuccessfulOrders.vue';
import StatisticsTurnover from '@/components/app/statisticsTurnover/StatisticsTurnover.vue';
import { Order } from '@/api/types/order';
import { compose } from '@/utils/fp';
import { Maybe } from '@/utils/functors';
import { getSuccessOrdersAmount } from '@/helpers/math/formulas/pnl';
import { getLength } from '@/utils/array';
import { filterOrdersByType } from '@/helpers/orders';
import { divideRight, multiply } from '@/helpers/number';
import { toCssPercentValue } from '@/utils/dom';

const { t } = useI18n();

const marketStore = useMarketStore();
const {
  closedOrders,
} = storeToRefs(marketStore);

const commonAmountOfTransactions = computed(() => (
  closedOrders.value.length
));

const calculateSuccessRate = (
  orders: Order[],
) => Maybe.of(orders)
  .map(filterOrdersByType('limit'))
  .map(getSuccessOrdersAmount)
  .chain((successOrdersAmount: number) => (
    compose(
      multiply(100),
      divideRight(successOrdersAmount),
      getLength,
    )(orders)
  ));

const successRate = computed(() => (
  compose(
    toCssPercentValue,
    calculateSuccessRate,
  )(closedOrders.value)
));
</script>
