<template>
  <MarketContainer>
    <template #tools>
      <MarketTools />
    </template>
    <template #main>
      main
    </template>
    <template #order>
      <OrderForm />
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
import OrderForm from '@/components/app/orderForm/OrderForm.vue';
</script>
