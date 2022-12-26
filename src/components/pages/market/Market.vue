<template>
  <MarketContainer>
    <template #tools>
      <MarketTools />
    </template>
    <template #main>
      main
    </template>
    <template #orderSettings>
      <OrderSettings />
    </template>
    <template #playerControls>
      <PlayerControls />
    </template>
  </MarketContainer>
</template>

<script async setup lang="ts">
import MarketContainer from '@/containers/marketContainer/MarketContainer.vue';
import OrderSettings from '@/components/app/orderSettings/OrderSettings.vue';
import PlayerControls from '@/components/app/playerControls/PlayerControls.vue';
import MarketTools from '@/components/app/marketTools/MarketTools.vue';
</script>
