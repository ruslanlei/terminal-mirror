<template>
  <PairStats :stats="computedStats" />
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import PairStats from '@/components/core/pairStats/PairStats.vue';
import { IPairStats } from '@/components/core/pairStats';
import { useMarketStore } from '@/stores/market';
import { currency } from '@/api/types/currency';

const marketStore = useMarketStore();

const stats = reactive<IPairStats>(({
  currency: currency.BTC,
  price: 16788,
  amount: '8990M',
  change: 890,
  changePercents: '2.33%',
  max: 22990,
  min: 14203,
}));

const computedStats = computed(() => ({
  ...stats,
  currency: marketStore.activePairData?.base || currency.BTC,
}));

// FIXME: for MVP
setInterval(() => {
  stats.currency = stats.currency === currency.BTC
    ? currency.BTC
    : currency.ETH;
  Object.entries(stats).forEach(([key, value], index) => {
    if (typeof value === 'number') {
      setTimeout(() => {
        stats[key] += 15;
      }, 600 * index);
    }
  });
}, 3000);
</script>

<style lang="scss">
</style>
