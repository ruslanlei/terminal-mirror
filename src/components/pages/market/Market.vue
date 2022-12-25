<template>
  <MarketContainer>
    <template #tools>
      <MarketTools />
    </template>
    <template #orderSettings>
      <OrderSettings />
    </template>
    <template #playerControls>
      <PlayerSettings />
    </template>
  </MarketContainer>
</template>

<script async setup lang="ts">
import MarketContainer from '@/containers/marketContainer/MarketContainer.vue';
import OrderSettings from '@/components/app/orderSettings/OrderSettings.vue';
import PlayerSettings from '@/components/app/playerSettings/PlayerSettings.vue';
import MarketTools from '@/components/app/marketTools/MarketTools.vue';
</script>
