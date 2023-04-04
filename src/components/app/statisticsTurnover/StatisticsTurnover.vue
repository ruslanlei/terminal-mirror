<template>
  <StatisticsResultRow>
    <template #prepend>
      <Typography
        size="h3"
        :state="['accent1', 'bold']"
      >
        {{ t('common.currencyAmount', { amount: 120000, currency: '$' }) }}
      </Typography>
    </template>
    <template #primaryInfoTop>
      <Typography
        size="title5"
        :state="['accent1', 'semiBold']"
      >
        {{ t('statistics.turnover.label') }}
      </Typography>
    </template>
    <template #primaryInfoBottom>
      <Typography
        size="title7"
        :state="['accent2', 'semiBold']"
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
  </StatisticsResultRow>
</template>

<script setup lang="ts">
import StatisticsResultRow from '@/containers/statisticsResultRow/StatisticsResultRow.vue';
import Typography from '@/components/app/typography/Typography.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style lang="scss" module>

</style>
