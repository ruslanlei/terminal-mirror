<template>
  <CurrencyStats :stats="stats" />
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import CurrencyStats from '@/components/core/currencyStats/CurrencyStats.vue';
import { ICurrencyStats } from '@/components/core/currencyStats';

const stats = reactive<ICurrencyStats>(({
  currency: 'btc',
  price: 16788,
  amount: '8990M',
  change: 890,
  changePercents: '2.33%',
  max: 22990,
  min: 14203,
}));

setInterval(() => {
  stats.currency = stats.currency === 'btc'
    ? 'eth'
    : 'btc';
  Object.entries(stats).forEach(([key, value]) => {
    if (typeof value === 'number') {
      stats[key] += 15;
    }
  });
}, 1000);
</script>

<style lang="scss">
</style>
