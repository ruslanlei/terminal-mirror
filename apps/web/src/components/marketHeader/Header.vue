<template>
  <UiHeader>
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
  </UiHeader>
</template>

<script setup lang="ts">
import { UiDivider } from '@terminal/uikit/components/divider';
import { UiHeader } from '@terminal/uikit/components/header';
import MarketTypeSelector from '@/components/marketTypeSelector/MarketTypeSelector.vue';
import CurrentPairStats from '@/components/currentPairStats/CurrentPairStats.vue';
import Balance from '@/components/balance/Balance.vue';
import ProfileDropdown from '@/components/profileDropdown/ProfileDropdown.vue';
</script>

<style lang="scss" module>
@import "@terminal/uikit/assets/styles/utils";

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
