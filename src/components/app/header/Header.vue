<template>
  <header
    :style="computedStyles"
    :class="$style.header"
  >
    <Logo size="sm" />
    <MarketTypeSelector :class="$style.marketSelector" />
    <Divider
      type="vertical"
      state="default"
      :class="[$style.divider, $style.dividerLeft]"
    />
    <SelectedCurrencyStats :class="$style.currencyStats" />
    <div :class="$style.profileBlock">
      <Balance />
      <Divider
        type="vertical"
        state="default"
        :class="$style.divider"
      />
      <ProfileDropdown />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Logo from '@/components/core/logo/Logo.vue';
import MarketTypeSelector from '@/components/app/marketTypeSelector/MarketTypeSelector.vue';
import Divider from '@/components/core/divider/Divider.vue';
import SelectedCurrencyStats from '@/components/app/selectedCurrencyStats/SelectedCurrencyStats.vue';
import Balance from '@/components/app/balance/Balance.vue';
import ProfileDropdown from '@/components/app/profileDropdown/ProfileDropdown.vue';
import { computed } from 'vue';
import { size } from '@/enums/sizing';

const { t } = useI18n();

const computedStyles = computed(() => ({
  height: `${size.HEADER}px`,
}));
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
  height: 25px;
}

.dividerLeft {
  margin-left: 20px;
}

.currencyStats {
  margin-left: 20px;
}

.profileBlock {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 15px;
}
</style>
