<template>
  <MarketContainer>
    <template #tools>
      <MarketTools />
    </template>
    <template #chart>
      chart
    </template>
    <template #orders>
      <OrdersAndStatistics />
    </template>
    <template #sidebar>
      <Sidebar />
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
import Sidebar from '@/components/app/sidebar/Sidebar.vue';
import OrdersAndStatistics from '@/components/app/ordersAndStatistics/OrdersAndStatistics.vue';
</script>
