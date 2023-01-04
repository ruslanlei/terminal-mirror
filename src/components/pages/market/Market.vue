<template>
  <MarketContainer>
    <template #tools>
      <MarketTools />
    </template>
    <template #main>
      <DropdownDemo />
    </template>
    <template #order>
      <Sidebar />
    </template>
    <template #playerControls>
      <PlayerControls />
    </template>
  </MarketContainer>
</template>

<script async setup lang="ts">
import MarketContainer from '@/containers/marketContainer/MarketContainer.vue';
import PlayerControls from '@/components/app/playerControls/PlayerControls.vue';
import MarketTools from '@/components/app/marketTools/MarketTools.vue';
import Sidebar from '@/components/app/sidebar/Sidebar.vue';

import DropdownDemo from '@/components/pages/market/dropdownDemo.vue';
</script>
