<template>
  <Badge
    state="default"
    size="sm"
    :class="$style.badgePartners"
  >
    <ComputedIcon />
  </Badge>
</template>

<script setup lang="ts">
import Badge from '@/components/core/badge/Badge.vue';
import { computed } from 'vue';
import { BadgePartnersProps } from './index';
import TradingViewLogo from './assets/tradingviewLogo.svg';
import BinanceLogo from './assets/binanceLogo.svg';

const props = defineProps<BadgePartnersProps>();

const ComputedIcon = computed(() => ({
  tradingView: TradingViewLogo,
  binance: BinanceLogo,
}[props.partner]));
</script>

<style lang="scss" module>
.badgePartners {
  padding: 15px 20px;
  border-radius: 10px;
  color: rgb(var(--color-accent-2));
  display: flex;
  align-items: center;
}
</style>
