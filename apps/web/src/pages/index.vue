<template>
  <Transition
    mode="out-in"
    name="skeletonTransition"
  >
    <Suspense>
      <template #default>
        <Market />
      </template>
      <template #fallback>
        <MarketSkeleton />
      </template>
    </Suspense>
  </Transition>
</template>

<route lang="yaml">
meta:
  authRequired: true
  layout: market
</route>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import MarketSkeleton from '@/components/market/MarketSkeleton.vue';

const Market = defineAsyncComponent(() => import('@/components/market/Market.vue'));
</script>

<style lang="scss">
@import "@terminal/uikit/assets/styles/transitions.scss";
</style>
