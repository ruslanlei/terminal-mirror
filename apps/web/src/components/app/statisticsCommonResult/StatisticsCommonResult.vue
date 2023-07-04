<template>
  <StatisticsResultRow>
    <template #prepend>
      <UiAvatar
        size="sm"
        :state="isPositive(commonPnl) ? 'success' : 'danger'"
      >
        <UiIcon
          :size="20"
          icon="chartBar"
        />
      </UiAvatar>
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
        {{ t('statistics.commonResult.label') }}
      </UiTypography>
    </template>
    <template #secondaryInfoTop>
      <!--      <UiTypography-->
      <!--        size="title7"-->
      <!--        :state="['accent2', 'medium']"-->
      <!--      >-->
      <!--        <i18n-t keypath="statistics.commonResult.commonDepositTopUp">-->
      <!--          <template #value>-->
      <!--            <UiTypography-->
      <!--              is-inline-->
      <!--              size="title4"-->
      <!--              :state="['semiBold', 'success']"-->
      <!--            >-->
      <!--              {{ commonTopUp }}-->
      <!--            </UiTypography>-->
      <!--          </template>-->
      <!--        </i18n-t>-->
      <!--      </UiTypography>-->
    </template>
    <template #secondaryInfoBottom>
      <!--      <UiTypography-->
      <!--        size="title7"-->
      <!--        :state="['accent2', 'medium']"-->
      <!--      >-->
      <!--        <i18n-t keypath="statistics.commonResult.currentDeposit">-->
      <!--          <template #value>-->
      <!--            <UiTypography-->
      <!--              is-inline-->
      <!--              size="title4"-->
      <!--              :state="['semiBold', 'accent1']"-->
      <!--            >-->
      <!--              {{ displayBalance }}-->
      <!--            </UiTypography>-->
      <!--          </template>-->
      <!--        </i18n-t>-->
      <!--      </UiTypography>-->
    </template>
  </StatisticsResultRow>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { UiAvatar } from '@terminal/uikit/components/avatar';
import { UiIcon } from '@terminal/uikit/components/icon';
import { UiTypography } from '@terminal/uikit/components/typography';
import StatisticsResultRow from '@/containers/statisticsResultRow/StatisticsResultRow.vue';
import { isPositive, roundToDecimalPlaces } from '@terminal/common/utils/number';
import { useEmulatorStore } from '@/stores/emulator';
import { calculateCommonPnlForPeriod } from '@terminal/common/helpers/math/formulas/pnl';
import { useMarketStore } from '@/stores/market';
import { compose } from '@terminal/common/utils/fp';

const { t } = useI18n();

const emulatorStore = useEmulatorStore();

const marketStore = useMarketStore();
const {
  closedOrders,
} = storeToRefs(marketStore);

const displayBalance = computed(() => roundToDecimalPlaces(2, emulatorStore.balance));

const commonPnl = computed(() => (
  compose(
    roundToDecimalPlaces(2),
    calculateCommonPnlForPeriod('allTime'),
  )(closedOrders.value)
));

const commonTopUp = computed(() => 10826.3);
</script>
