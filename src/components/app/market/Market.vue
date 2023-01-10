<template>
  <MarketContainer>
    <template #tools>
      <MarketTools />
    </template>
    <template #main>
      <TakeProfitList
        v-model="takeProfits"
        :order-price="16200"
        :order-quantity="0.1"
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
import Sidebar from '@/components/app/sidebar/Sidebar.vue';
import TakeProfitList from '@/components/app/takeProfitList/TakeProfitList.vue';

const takeProfits = ref([]);
</script>
