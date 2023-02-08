<template>
  <Chart
    :data="candles"
    :is-loading="isLoadingCandles"
  />
</template>

<script setup lang="ts">
import Chart from '@/components/core/chart/Chart.vue';
import { useEmulatorStore } from '@/stores/emulator';
import { computed } from 'vue';
import { transformCandlesForChart } from '@/helpers/candles';
import { storeToRefs } from 'pinia';

const emulatorStore = useEmulatorStore();
const {
  isLoadingCandles,
} = storeToRefs(emulatorStore);

const candles = computed(() => transformCandlesForChart(emulatorStore.candles));
</script>
