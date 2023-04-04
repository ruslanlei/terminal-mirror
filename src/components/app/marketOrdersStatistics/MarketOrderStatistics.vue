<template>
  <MarketOrderStatisticsContainer>
    <template #commonAmountOfOrders>
      50
    </template>
    <template #commonAmountOfOrdersLabel>
      {{ t('statistics.orders.commonAmountLabel') }}
    </template>
    <template #successRate>
      {{ '60%' }}
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
import { useI18n } from 'vue-i18n';
import MarketOrderStatisticsContainer
  from '@/containers/marketOrderStatisticsContainer/MarketOrderStatisticsContainer.vue';
import StatisticsSuccessOrders from '@/components/app/statisticsSuccessOrders/StatisticsSuccessOrders.vue';
import StatisticsUnsuccessfulOrders
  from '@/components/app/statisticsUnsuccessfulOrders/StatisticsUnsuccessfulOrders.vue';
import StatisticsTurnover from '@/components/app/statisticsTurnover/StatisticsTurnover.vue';

const { t } = useI18n();
</script>
