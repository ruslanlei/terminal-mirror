<template>
  <StatisticsResultRow>
    <template #prepend>
      <UiAvatar
        size="sm"
        :label="t('dateTime.unit.week')"
        :state="isPositive(commonPnl) ? 'success' : 'danger'"
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
      <!--      <Typography-->
      <!--        size="title3"-->
      <!--        :state="['accent1', 'medium']"-->
      <!--      >-->
      <!--        {{ t('common.percents', { value: toPositiveNumberString(14) }) }}-->
      <!--      </Typography>-->
    </template>
    <template #secondaryInfoBottom>
      <!--      <Typography-->
      <!--        size="title6"-->
      <!--        :state="['accent2', 'medium']"-->
      <!--      >-->
      <!--        {{ t('statistics.toDeposit') }}-->
      <!--      </Typography>-->
    </template>
  </StatisticsResultRow>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiAvatar } from '@terminal/uikit/components/avatar';
import { storeToRefs } from 'pinia';
import Typography from '@/components/app/typography/Typography.vue';
import { useMarketStore } from '@/stores/market';
import StatisticsResultRow from '@/containers/statisticsResultRow/StatisticsResultRow.vue';
import { calculateCommonPnlForPeriod } from '@/helpers/math/formulas/pnl';
import { compose } from '@/utils/fp';
import { isPositive, roundToDecimalPlaces } from '@/utils/number';

const { t } = useI18n();

const marketStore = useMarketStore();
const {
  closedOrders,
} = storeToRefs(marketStore);

const commonPnl = computed(() => (
  compose(
    roundToDecimalPlaces(2),
    calculateCommonPnlForPeriod('week'),
  )(closedOrders.value)
));
</script>
