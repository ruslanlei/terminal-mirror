<template>
  <StatisticsResultRow>
    <template #prepend>
      <UiAvatar
        size="sm"
        :state="isPositive(commonPnl) ? 'success' : 'danger'"
      >
        <Icon
          :size="20"
          icon="chartBar"
        />
      </UiAvatar>
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
        {{ t('statistics.commonResult.label') }}
      </Typography>
    </template>
    <template #secondaryInfoTop>
      <!--      <Typography-->
      <!--        size="title7"-->
      <!--        :state="['accent2', 'medium']"-->
      <!--      >-->
      <!--        <i18n-t keypath="statistics.commonResult.commonDepositTopUp">-->
      <!--          <template #value>-->
      <!--            <Typography-->
      <!--              is-inline-->
      <!--              size="title4"-->
      <!--              :state="['semiBold', 'success']"-->
      <!--            >-->
      <!--              {{ commonTopUp }}-->
      <!--            </Typography>-->
      <!--          </template>-->
      <!--        </i18n-t>-->
      <!--      </Typography>-->
    </template>
    <template #secondaryInfoBottom>
      <!--      <Typography-->
      <!--        size="title7"-->
      <!--        :state="['accent2', 'medium']"-->
      <!--      >-->
      <!--        <i18n-t keypath="statistics.commonResult.currentDeposit">-->
      <!--          <template #value>-->
      <!--            <Typography-->
      <!--              is-inline-->
      <!--              size="title4"-->
      <!--              :state="['semiBold', 'accent1']"-->
      <!--            >-->
      <!--              {{ displayBalance }}-->
      <!--            </Typography>-->
      <!--          </template>-->
      <!--        </i18n-t>-->
      <!--      </Typography>-->
    </template>
  </StatisticsResultRow>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { UiAvatar } from '@terminal/uikit/components/avatar';
import StatisticsResultRow from '@/containers/statisticsResultRow/StatisticsResultRow.vue';
import Typography from '@/components/app/typography/Typography.vue';
import Icon from '@/components/core/icon/Icon.vue';
import { isPositive, roundToDecimalPlaces } from '@/utils/number';
import { useEmulatorStore } from '@/stores/emulator';
import { calculateCommonPnlForPeriod } from '@/helpers/math/formulas/pnl';
import { useMarketStore } from '@/stores/market';
import { compose } from '@/utils/fp';

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
