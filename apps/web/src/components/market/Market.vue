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
import { useStorage } from '@vueuse/core';
import { awaitTimeout } from '@terminal/common/utils/promise';
import { useMarketStore } from '@/stores/market';
import MarketContainer from '@/containers/marketContainer/MarketContainer.vue';
import PlayerControls from '@/components/playerControls/PlayerControls.vue';
import MarketTools from '@/components/marketTools/MarketTools.vue';
import MarketSidebar from '@/components/marketSidebar/MarketSidebar.vue';
import OrdersAndStatistics from '@/components/ordersAndStatistics/OrdersAndStatistics.vue';
import MarketChart from '@/components/marketChart/MarketChart.vue';
import FavoritesList from '@/components/favoritesList/FavoritesList.vue';
import MarketChartHeader from '@/components/marketChartHeader/MarketChartHeader.vue';

const marketStore = useMarketStore();

const isFavoritesExpanded = useStorage('isFavoritesVisible', true);

const hideFavorites = () => {
  isFavoritesExpanded.value = false;
};

// FIXME: delay before end of animation between routes
await awaitTimeout(300);
</script>
