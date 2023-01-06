<template>
  <MarketContainer>
    <template #tools>
      <MarketTools />
    </template>
    <template #main>
      <ExchangeInput
        v-model="d"
        :base-currency-price="16890"
        @input="onInput"
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
import ExchangeInput from '@/components/core/exchangeInput/ExchangeInput.vue';

const d = ref(1);

const onInput = () => {
  console.log('onInput');
};
</script>
