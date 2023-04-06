<template>
  <MarketCommonStatisticsContainer>
    <template #monthResult>
      <StatisticsMonthResult />
    </template>
    <template #chart>
      <TradingCommonResultChart />
    </template>
    <template #commonResult>
      <StatisticsCommonResult />
    </template>
    <template #dayResult>
      <StatisticsDayResult />
    </template>
    <template #weekResult>
      <StatisticsWeekResult />
    </template>
  </MarketCommonStatisticsContainer>
</template>

<script setup lang="ts">
import { useMarketStore } from '@/stores/market';
import MarketCommonStatisticsContainer from '@/containers/marketCommonStatisticsContainer/MarketCommonStatisticsContainer.vue';
import TradingCommonResultChart from '@/components/app/tradingCommonResultChart/TradingCommonResultChart.vue';
import StatisticsMonthResult from '@/components/app/statisticsMonthResult/StatisticsMonthResult.vue';
import StatisticsCommonResult from '@/components/app/statisticsCommonResult/StatisticsCommonResult.vue';
import StatisticsDayResult from '@/components/app/statisticsDayResult/StatisticsDayResult.vue';
import StatisticsWeekResult from '@/components/app/statisticsWeekResult/StatisticsWeekResult.vue';

const marketStore = useMarketStore();
await marketStore.getClosedOrdersList();
</script>
