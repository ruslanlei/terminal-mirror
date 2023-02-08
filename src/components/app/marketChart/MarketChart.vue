<template>
  <Chart :data="candles" />
</template>

<script setup lang="ts">
import Chart from '@/components/core/chart/Chart.vue';
import { useEmulatorStore } from '@/stores/emulator';
import { computed } from 'vue';
import { transformCandlesForChart } from '@/helpers/candles';

const emulatorStore = useEmulatorStore();

const candles = computed(() => transformCandlesForChart(emulatorStore.candles));
</script>
