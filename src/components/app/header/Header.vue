<template>
  <div :class="$style.header">
    <Logo size="sm" />
    <MarketTypeSelector :class="$style.marketSelector" />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Logo from '@/components/core/logo/Logo.vue';
import MarketTypeSelector from '@/components/app/marketTypeSelector/MarketTypeSelector.vue';

const { t } = useI18n();
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.header {
  padding: 30px 23px;
  display: flex;
}

.marketSelector {
  margin-left: 40px;
}
</style>
