<template>
  <Chart
    v-model:date-from="chartDateFrom"
    v-model:date-to="chartDateTo"
    :data="computedCandles"
    :is-loading="isLoadingCandles"
  />
</template>

<script setup lang="ts">
import Chart from '@/components/core/chart/Chart.vue';
import { useMarketChart } from '@/hooks/useMarketChart';

const {
  chartDateFrom,
  chartDateTo,
  computedCandles,
  isLoadingCandles,
} = useMarketChart();
</script>
