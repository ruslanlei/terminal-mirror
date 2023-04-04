<template>
  <MarketStatisticsContainer>
    <template #monthResult>
      <StatisticsMonthResult />
    </template>
    <template #chart>
      <!--      <TradingCommonResultChart />-->
    </template>
    <template #commonResult>
      <StatisticsCommonResult />
    </template>
    <template #dayResult>
      dayResult
    </template>
    <template #weekResult>
      weekResult
    </template>
  </MarketStatisticsContainer>
</template>

<script setup lang="ts">
import MarketStatisticsContainer from '@/containers/marketStatisticsContainer/MarketStatisticsContainer.vue';
import TradingCommonResultChart from '@/components/app/tradingCommonResultChart/TradingCommonResultChart.vue';
import StatisticsMonthResult from '@/components/app/statisticsMonthResult/StatisticsMonthResult.vue';
import StatisticsCommonResult from '@/components/app/statisticsCommonResult/StatisticsCommonResult.vue';
</script>
