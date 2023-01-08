<template>
  <MarketContainer>
    <template #tools>
      <MarketTools />
    </template>
    <template #main>
      {{ tp }}
      <TakeProfitInput
        v-model="tp"
        :order-price="op"
      />
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
import { ref } from 'vue';
import MarketContainer from '@/containers/marketContainer/MarketContainer.vue';
import PlayerControls from '@/components/app/playerControls/PlayerControls.vue';
import MarketTools from '@/components/app/marketTools/MarketTools.vue';

import TakeProfitInput from '@/components/core/takeProfitInput/TakeProfitInput.vue';
import Sidebar from '@/components/app/sidebar/Sidebar.vue';

const tp = ref({
  price: 17000,
  quantity: 1,
});

const op = ref(16200);
</script>
