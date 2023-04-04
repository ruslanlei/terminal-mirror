<template>
  <StatisticsResultRow>
    <template #prepend>
      <Avatar
        size="sm"
        state="danger"
        :label="t('dateTime.unit.month')"
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
            {{ -12.2223 }}
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
        {{ t('statistics.resultPeriodLabel', { period: customFormatDate('MMMM', dateNow()) }) }}
      </Typography>
    </template>
    <template #secondaryInfoTop>
      <Typography
        size="title3"
        :state="['accent1', 'medium']"
      >
        {{ t('common.percents', { value: toPositiveNumberString(10) }) }}
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
import { customFormatDate, dateNow } from '@/utils/date';
import { toPositiveNumberString } from '../../../utils/dom';

const { t } = useI18n();

</script>

<style lang="scss" module>

</style>
