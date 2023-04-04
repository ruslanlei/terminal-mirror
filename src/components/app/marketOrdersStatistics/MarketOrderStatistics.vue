<template>
  <MarketOrderStatisticsContainer>
    <template #commonAmountOfOrders>
      50
    </template>
    <template #commonAmountOfOrdersLabel>
      {{ t('statistics.orders.commonAmountLabel') }}
    </template>
    <template #successRate>
      {{ '60%' }}
    </template>
    <template #successRateLabel>
      {{ t('statistics.orders.successRateLabel') }}
    </template>
  </MarketOrderStatisticsContainer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import MarketOrderStatisticsContainer
  from '@/containers/marketOrderStatisticsContainer/MarketOrderStatisticsContainer.vue';

const { t } = useI18n();
</script>
