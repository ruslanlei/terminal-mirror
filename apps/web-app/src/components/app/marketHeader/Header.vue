<template>
  <Header>
    <template #leftColumn>
      <div :class="$style.leftColumn">
        <MarketTypeSelector />
        <UiDivider
          type="vertical"
          state="default"
          :class="[$style.divider, $style.dividerLeft]"
        />
        <CurrentPairStats :class="$style.currencyStats" />
      </div>
    </template>
    <template #rightColumn>
      <div :class="$style.profileBlock">
        <Balance />
        <UiDivider
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
import { UiDivider } from '@terminal/uikit/components/divider';
import Header from '@/components/core/header/Header.vue';
import MarketTypeSelector from '@/components/app/marketTypeSelector/MarketTypeSelector.vue';
import CurrentPairStats from '@/components/app/currentPairStats/CurrentPairStats.vue';
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
  margin-left: 20px;
}

.profileBlock {
  display: flex;
  align-items: center;
  gap: 15px;
}
</style>
