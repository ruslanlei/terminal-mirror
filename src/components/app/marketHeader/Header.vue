<template>
  <Header>
    <template #leftColumn>
      <div :class="$style.leftColumn">
        <MarketTypeSelector />
        <Divider
          type="vertical"
          state="default"
          :class="[$style.divider, $style.dividerLeft]"
        />
        <ActivePairStats :class="$style.currencyStats" />
      </div>
    </template>
    <template #rightColumn>
      <div :class="$style.profileBlock">
        <Balance />
        <Divider
          type="vertical"
          state="default"
          :class="$style.divider"
        />
        <ProfileDropdown />
      </div>
    </template>
  </Header>
</template>

<script setup lang="ts">
import Header from '@/components/core/header/Header.vue';
import MarketTypeSelector from '@/components/app/marketTypeSelector/MarketTypeSelector.vue';
import Divider from '@/components/core/divider/Divider.vue';
import ActivePairStats from '@/components/app/activePairStats/ActivePairStats.vue';
import Balance from '@/components/app/balance/Balance.vue';
import ProfileDropdown from '@/components/app/profileDropdown/ProfileDropdown.vue';
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.leftColumn {
  display: flex;
  align-items: center;
}

.divider {
  height: 25px;
}

.dividerLeft {
  margin-left: 20px;
}

.currencyStats {
  // TODO: return while realisation of real market
  //margin-left: 20px;
}

.profileBlock {
  display: flex;
  align-items: center;
  gap: 15px;
}
</style>
