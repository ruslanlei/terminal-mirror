<template>
  <CurrencyStats :stats="stats" />
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import CurrencyStats from '@/components/core/currencyStats/CurrencyStats.vue';
import { ICurrencyStats } from '@/components/core/currencyStats';
import { Currency } from '@/api/endpoints/marketdata/stats';
import { useMarketStore } from '@/stores/market';

const marketStore = useMarketStore();

const stats = reactive<ICurrencyStats>(({
  currency: marketStore.activePairData?.base || Currency.BTC,
  price: 16788,
  amount: '8990M',
  change: 890,
  changePercents: '2.33%',
  max: 22990,
  min: 14203,
}));

// FIXME: for MVP
setInterval(() => {
  stats.currency = stats.currency === Currency.BTC
    ? Currency.BTC
    : Currency.ETH;
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
