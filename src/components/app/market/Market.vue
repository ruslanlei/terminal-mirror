<template>
  <MarketContainer :is-favorites-visible="isFavoritesExpanded">
    <template #tools>
      <MarketTools />
    </template>
    <template #favorites="{ favoritesClass }">
      <FavoritesList
        :class="favoritesClass"
        @hide="hideFavorites"
      />
    </template>
    <template #chartHeader>
      <MarketChartHeader v-model:is-favorites-active="isFavoritesExpanded" />
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
import { useMarketStore } from '@/stores/market';
import MarketContainer from '@/containers/marketContainer/MarketContainer.vue';
import PlayerControls from '@/components/app/playerControls/PlayerControls.vue';
import MarketTools from '@/components/app/marketTools/MarketTools.vue';
import MarketSidebar from '@/components/app/marketSidebar/MarketSidebar.vue';
import OrdersAndStatistics from '@/components/app/ordersAndStatistics/OrdersAndStatistics.vue';
import MarketChart from '@/components/app/marketChart/MarketChart.vue';
import FavoritesList from '@/components/app/favoritesList/FavoritesList.vue';
import MarketChartHeader from '@/components/app/marketChartHeader/MarketChartHeader.vue';
import { useStorage } from '@vueuse/core';
import { awaitTimeout } from '@/utils/promise';

const marketStore = useMarketStore();

const isFavoritesExpanded = useStorage('isFavoritesVisible', true);

const hideFavorites = () => {
  isFavoritesExpanded.value = false;
};

// delay before end of animation between routes
await awaitTimeout(300);
</script>
