<template>
  <Page>
    <template #page>
      <Market />
    </template>
    <template #skeleton>
      <MarketSkeleton />
    </template>
  </Page>
</template>

<route lang="yaml">
meta:
  authRequired: true
  layout: default
</route>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import Page from '@/components/core/page/Page.vue';
import MarketSkeleton from '@/components/pages/market/MarketSkeleton.vue';

const Market = defineAsyncComponent(() => import('@/components/pages/market/Market.vue'));
</script>
