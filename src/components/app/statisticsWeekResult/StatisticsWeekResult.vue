<template>
  <StatisticsResultRow>
    <template #prepend>
      <Avatar
        size="sm"
        state="success"
        :label="t('dateTime.unit.week')"
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
              {{ t('statistics.weekResults.periodLabel') }}
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
        {{ t('common.percents', { value: toPositiveNumberString(14) }) }}
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
import {
  isDateWithinCurrentWeek,
} from '@/utils/date';
import { computed } from 'vue';
import { add } from '@/helpers/number';
import { useMarketStore } from '@/stores/market';
import { storeToRefs } from 'pinia';
import { isOrderOfType } from '@/helpers/orders';
import { calculatePnl } from '@/helpers/math/formulas/pnl';
import { toPositiveNumberString } from '@/utils/dom';

const { t } = useI18n();

const marketStore = useMarketStore();
const {
  closedOrders,
} = storeToRefs(marketStore);

const commonPnl = computed(() => (
  closedOrders.value
    .filter((order) => (
      isDateWithinCurrentWeek(order.modified) && isOrderOfType('limit', order)
    ))
    .map((order) => (
      calculatePnl(order.price, order.quantity, order.executed_price)
    ))
    .reduce((commonPnl, pnl) => add(commonPnl, pnl))
));
</script>
