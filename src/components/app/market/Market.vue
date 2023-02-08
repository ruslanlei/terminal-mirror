<template>
  <MarketContainer>
    <template #tools>
      <MarketTools />
    </template>
    <template #chart="{ chartClass }">
      <!--      <NumberInput v-model="marketStore.activePairPrice" />-->
      <MarketChart :class="chartClass" />
    </template>
    <template #orders>
      <OrdersAndStatistics />
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
import MarketContainer from '@/containers/marketContainer/MarketContainer.vue';
import PlayerControls from '@/components/app/playerControls/PlayerControls.vue';
import MarketTools from '@/components/app/marketTools/MarketTools.vue';
import MarketSidebar from '@/components/app/marketSidebar/MarketSidebar.vue';
import OrdersAndStatistics from '@/components/app/ordersAndStatistics/OrdersAndStatistics.vue';
import NumberInput from '@/components/core/numberInput/NumberInput.vue';
import { useMarketStore } from '@/stores/market';
import MarketChart from '@/components/app/marketChart/MarketChart.vue';

const marketStore = useMarketStore();
marketStore.activePairPrice = 17000;
</script>
