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
import MarketCommonStatisticsContainer from '@/containers/marketCommonStatisticsContainer/MarketCommonStatisticsContainer.vue';
import TradingCommonResultChart from '@/components/tradingCommonResultChart/TradingCommonResultChart.vue';
import StatisticsMonthResult from '@/components/statisticsMonthResult/StatisticsMonthResult.vue';
import StatisticsCommonResult from '@/components/statisticsCommonResult/StatisticsCommonResult.vue';
import StatisticsDayResult from '@/components/statisticsDayResult/StatisticsDayResult.vue';
import StatisticsWeekResult from '@/components/statisticsWeekResult/StatisticsWeekResult.vue';
</script>
