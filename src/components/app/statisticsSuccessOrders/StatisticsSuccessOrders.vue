<template>
  <StatisticsResultRow>
    <template #prepend>
      <Typography
        size="h3"
        :state="['success', 'bold']"
      >
        42
      </Typography>
    </template>
    <template #primaryInfoTop>
      <Typography
        :state="['success', 'bold']"
        size="title5"
      >
        {{ t('statistics.orders.success.label') }}
      </Typography>
    </template>
    <template #primaryInfoBottom>
      <Typography
        size="title6"
        :state="['accent2', 'medium']"
      >
        <i18n-t keypath="statistics.orders.success.averageIncome">
          <template #value>
            <Typography
              is-inline
              state="accent1"
            >
              91%
            </Typography>
          </template>
        </i18n-t>
      </Typography>
    </template>
    <template #secondaryInfoTop>
      <Typography
        size="title5"
        :state="['accent2', 'medium']"
        :class="$style.popularCoinLabel"
      >
        {{ t('statistics.orders.success.popularCoin') }}
      </Typography>
    </template>
    <template #append>
      <CoinLogo coin="BTC" />
    </template>
  </StatisticsResultRow>
</template>

<script setup lang="ts">
import StatisticsResultRow from '@/containers/statisticsResultRow/StatisticsResultRow.vue';
import { useI18n } from 'vue-i18n';
import Typography from '@/components/app/typography/Typography.vue';
import CoinLogo from '@/components/core/coinLogo/CoinLogo.vue';

const { t } = useI18n();
</script>

<style lang="scss" module>
.popularCoinLabel {
  max-width: 95px;
  line-height: 14px;
}
</style>
