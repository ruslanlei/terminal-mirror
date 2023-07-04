<template>
  <StatisticsResultRow>
    <template #prepend>
      <UiAvatar
        size="sm"
        :label="t('dateTime.unit.day')"
        :state="isPositive(commonPnl) ? 'success' : 'danger'"
      />
    </template>
    <template #primaryInfoTop>
      <UiTypography
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
            <UiTypography
              :state="['accent2', 'medium']"
              is-inline
            >
              {{ '$' }}
            </UiTypography>
          </template>
        </i18n-t>
      </UiTypography>
    </template>
    <template #primaryInfoBottom>
      <UiTypography
        size="title6"
        :state="['accent2', 'medium']"
      >
        <i18n-t keypath="statistics.resultPeriodLabel">
          <template #period>
            <UiTypography
              is-inline
              state="accent1"
            >
              {{ t('statistics.todayResults.periodLabel') }}
            </UiTypography>
          </template>
        </i18n-t>
      </UiTypography>
    </template>
    <template #secondaryInfoTop>
      <!--      <UiTypography-->
      <!--        size="title3"-->
      <!--        :state="['accent1', 'medium']"-->
      <!--      >-->
      <!--        {{ t('common.percents', { value: toPositiveNumberString(1) }) }}-->
      <!--      </UiTypography>-->
    </template>
    <template #secondaryInfoBottom>
      <!--      <UiTypography-->
      <!--        size="title6"-->
      <!--        :state="['accent2', 'medium']"-->
      <!--      >-->
      <!--        {{ t('statistics.toDeposit') }}-->
      <!--      </UiTypography>-->
    </template>
  </StatisticsResultRow>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { UiAvatar } from '@terminal/uikit/components/avatar';
import { UiTypography } from '@terminal/uikit/components/typography';
import StatisticsResultRow from '@/containers/statisticsResultRow/StatisticsResultRow.vue';
import { useMarketStore } from '@/stores/market';
import { calculateCommonPnlForPeriod } from '@/helpers/math/formulas/pnl';
import { compose } from '@terminal/common/utils/fp';
import { isPositive, roundToDecimalPlaces } from '@terminal/common/utils/number';

const { t } = useI18n();

const marketStore = useMarketStore();
const {
  closedOrders,
} = storeToRefs(marketStore);

const commonPnl = computed(() => (
  compose(
    roundToDecimalPlaces(2),
    calculateCommonPnlForPeriod('day'),
  )(closedOrders.value)
));
</script>
