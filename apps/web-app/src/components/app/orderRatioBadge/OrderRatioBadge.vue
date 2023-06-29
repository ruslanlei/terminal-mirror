<template>
  <UiBadge
    :state="isDanger ? 'danger' : 'background4'"
    :class="$style.orderRatioBadge"
  >
    <Typography
      size="title5"
      :state="['nowrap']"
    >
      {{ computedRatio }}
    </Typography>
  </UiBadge>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiBadge } from '@terminal/uikit/components/badge';
import { compose } from '@/utils/fp';
import {
  divideRight,
  floorToDecimalPlaces,
} from '@/utils/number';
import Typography from '@/components/app/typography/Typography.vue';
import { isMoreThanLeft } from '@/utils/boolean';
import { OrderRatioBadgeProps } from './index';

const props = defineProps<OrderRatioBadgeProps>();

const { t } = useI18n();

const takeProfitToStopLossRelation = computed(() => {
  if (props.stopLossRisk <= 0) {
    return 0;
  }
  return compose(
    floorToDecimalPlaces(1),
    divideRight,
  )(props.stopLossRisk, props.takeProfitsSum);
});

const isDanger = computed(
  () => isMoreThanLeft(takeProfitToStopLossRelation.value, 3) && (props.stopLossRisk > 0),
);

const computedRatio = computed(() => t('order.ratio', {
  loss: (props.stopLossRisk > 0) ? 1 : 0,
  profit: takeProfitToStopLossRelation.value,
}));
</script>

<style lang="scss" module>
.orderRatioBadge {
  padding: 2px 10px;
  color: rgb(var(--color-accent-1));
  border-radius: 12px;
  font-weight: 600;
}
</style>
