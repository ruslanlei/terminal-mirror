<template>
  <div :class="$style.header">
    <Logo size="sm" />
    <MarketTypeSelector :class="$style.marketSelector" />
    <Divider
      type="vertical"
      state="default"
      :class="$style.divider"
    />
    <SelectedCurrencyStats :class="$style.currencyStats" />
    <div :class="$style.profileBlock">
      <Balance />
      <Divider
        type="vertical"
        state="default"
        :class="$style.divider"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Logo from '@/components/core/logo/Logo.vue';
import MarketTypeSelector from '@/components/app/marketTypeSelector/MarketTypeSelector.vue';
import Divider from '@/components/core/divider/Divider.vue';
import SelectedCurrencyStats from '@/components/app/selectedCurrencyStats/SelectedCurrencyStats.vue';
import Balance from '@/components/app/balance/Balance.vue';

const { t } = useI18n();
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.header {
  padding: 30px 23px;
  display: flex;
  align-items: center;
}

.marketSelector {
  margin-left: 40px;
}

.divider {
  margin-left: 20px;
  height: 25px;
}

.currencyStats {
  margin-left: 20px;
}

.profileBlock {
  margin-left: auto;
  display: flex;
  align-items: center;
}
</style>
