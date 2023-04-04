<template>
  <MarketStatisticsContainer>
    <template #monthResult>
      monthResult
    </template>
    <template #chart>
      <TradingCommonResultChart />
    </template>
    <template #commonResult>
      commonResult
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
</script>
