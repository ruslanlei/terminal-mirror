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
        :order-quantity="oq"
        :base-currency="baseCurrency"
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
import { computed, ref } from 'vue';
import MarketContainer from '@/containers/marketContainer/MarketContainer.vue';
import PlayerControls from '@/components/app/playerControls/PlayerControls.vue';
import MarketTools from '@/components/app/marketTools/MarketTools.vue';

import TakeProfitInput from '@/components/core/takeProfitInput/TakeProfitInput.vue';
import Sidebar from '@/components/app/sidebar/Sidebar.vue';
import { BaseCurrency, QuoteCurrency } from '@/hooks/useExchange';
import { Currency } from '@/api/types/currency';

const tp = ref({
  price: 17000,
  quantity: 0.001,
});

const op = ref(16200);

const oq = ref(0.003);

const baseCurrency = computed<BaseCurrency>(() => ({
  name: Currency.USDT,
  price: 16890,
  decimals: 3,
  step: 0.001,
}));
</script>
