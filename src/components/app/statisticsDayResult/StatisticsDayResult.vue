<template>
  <StatisticsResultRow>
    <template #prepend>
      <Avatar
        size="sm"
        state="danger"
        :label="t('dateTime.unit.day')"
      />
    </template>
    <template #primaryInfoTop>
      <Typography
        :state="['accent1', 'bold']"
        size="title3"
      >
        <i18n-t
          tag="span"
          keypath="common.currencyAmount"
        >
          <template #amount>
            {{ commonPnl }}
          </template>
          <template #currency>
            <Typography
              :state="['accent2', 'medium']"
              is-inline
            >
              {{ '$' }}
            </Typography>
          </template>
        </i18n-t>
      </Typography>
    </template>
    <template #primaryInfoBottom>
      <Typography
        size="title6"
        :state="['accent2', 'medium']"
      >
        <i18n-t keypath="statistics.resultPeriodLabel">
          <template #period>
            <Typography
              is-inline
              state="accent1"
            >
              {{ t('statistics.todayResults.periodLabel') }}
            </Typography>
          </template>
        </i18n-t>
      </Typography>
    </template>
    <template #secondaryInfoTop>
      <Typography
        size="title3"
        :state="['accent1', 'medium']"
      >
        {{ t('common.percents', { value: toPositiveNumberString(1) }) }}
      </Typography>
    </template>
    <template #secondaryInfoBottom>
      <Typography
        size="title6"
        :state="['accent2', 'medium']"
      >
        {{ t('statistics.toDeposit') }}
      </Typography>
    </template>
  </StatisticsResultRow>
</template>

<script setup lang="ts">
import StatisticsResultRow from '@/containers/statisticsResultRow/StatisticsResultRow.vue';
import Avatar from '@/components/core/avatar/Avatar.vue';
import { useI18n } from 'vue-i18n';
import Typography from '@/components/app/typography/Typography.vue';
import { computed } from 'vue';
import { useMarketStore } from '@/stores/market';
import { storeToRefs } from 'pinia';
import { calculateCommonPnlForPeriod } from '@/helpers/math/formulas/pnl';
import { toPositiveNumberString } from '@/utils/dom';
import { compose } from '@/utils/fp';
import { roundToDecimalPoint } from '@/utils/number';

const { t } = useI18n();

const marketStore = useMarketStore();
const {
  closedOrders,
} = storeToRefs(marketStore);

const commonPnl = computed(() => (
  compose(
    roundToDecimalPoint(2),
    calculateCommonPnlForPeriod('day'),
  )(closedOrders.value)
));
</script>
