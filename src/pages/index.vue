<template>
  <Suspense>
    <template #default>
      <Market />
    </template>
    <template #fallback>
      <MarketSkeleton />
    </template>
  </Suspense>
</template>

<route lang="yaml">
meta:
  authRequired: true
  layout: market
</route>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import MarketSkeleton from '@/components/pages/market/MarketSkeleton.vue';

const Market = defineAsyncComponent(() => import('@/components/pages/market/Market.vue'));
</script>
