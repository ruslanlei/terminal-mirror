<template>
  <StatisticsResultRow>
    <template #prepend>
      <Avatar
        size="sm"
        state="success"
      >
        <Icon
          :size="20"
          icon="chartBar"
        />
      </Avatar>
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
            {{ displayValue }}
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
      <Typography
        size="title7"
        :state="['accent2', 'medium']"
      >
        <i18n-t keypath="statistics.commonResult.commonDepositTopUp">
          <template #value>
            <Typography
              is-inline
              size="title4"
              :state="['semiBold', 'success']"
            >
              {{ commonTopUp }}
            </Typography>
          </template>
        </i18n-t>
      </Typography>
    </template>
    <template #secondaryInfoBottom>
      <Typography
        size="title7"
        :state="['accent2', 'medium']"
      >
        <i18n-t keypath="statistics.commonResult.currentDeposit">
          <template #value>
            <Typography
              is-inline
              size="title4"
              :state="['semiBold', 'accent1']"
            >
              {{ displayBalance }}
            </Typography>
          </template>
        </i18n-t>
      </Typography>
    </template>
  </StatisticsResultRow>
</template>

<script setup lang="ts">
import StatisticsResultRow from '@/containers/statisticsResultRow/StatisticsResultRow.vue';
import Avatar from '@/components/core/avatar/Avatar.vue';
import { useI18n } from 'vue-i18n';
import Typography from '@/components/app/typography/Typography.vue';
import Icon from '@/components/core/icon/Icon.vue';
import { computed } from 'vue';
import { isPositive, roundToDecimalPoint } from '@/helpers/number';
import { toPositiveNumberString } from '@/utils/dom';
import { useEmulatorStore } from '@/stores/emulator';

const { t } = useI18n();

const emulatorStore = useEmulatorStore();

const displayBalance = computed(() => roundToDecimalPoint(2, emulatorStore.balance));

const testValue = 16826.3;
const displayValue = computed(() => (
  isPositive(testValue)
    ? toPositiveNumberString(testValue)
    : String(testValue)
));

const commonTopUp = computed(() => 10826.3);
</script>

<style lang="scss" module>

</style>
