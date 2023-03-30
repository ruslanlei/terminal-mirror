<template>
  <div :class="$style.marketStatistics">
    <BarChart />
  </div>
</template>

<script setup lang="ts">
import BarChart from '@/components/core/barChart/BarChart.vue';
</script>

<style lang="scss" module>
.marketStatistics {}
</style>
