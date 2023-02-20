<template>
  <MarketContainer :is-favorites-visible="isFavoritesVisible">
    <template #tools>
      <MarketTools />
    </template>
    <template #favorites>
      <button @click="isFavoritesVisible = !isFavoritesVisible">
        favorites
      </button>
    </template>
    <template #chart="{ chartClass }">
      <MarketChart :class="chartClass" />
    </template>
    <template #orders="{ ordersClass }">
      <OrdersAndStatistics :class="ordersClass" />
    </template>
    <template #sidebar>
      <MarketSidebar />
    </template>
    <template #playerControls>
      <PlayerControls />
    </template>
  </MarketContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MarketContainer from '@/containers/marketContainer/MarketContainer.vue';
import PlayerControls from '@/components/app/playerControls/PlayerControls.vue';
import MarketTools from '@/components/app/marketTools/MarketTools.vue';
import MarketSidebar from '@/components/app/marketSidebar/MarketSidebar.vue';
import OrdersAndStatistics from '@/components/app/ordersAndStatistics/OrdersAndStatistics.vue';
import { useMarketStore } from '@/stores/market';
import MarketChart from '@/components/app/marketChart/MarketChart.vue';

const marketStore = useMarketStore();

const isFavoritesVisible = ref(true);

await marketStore.getPairs();
</script>
