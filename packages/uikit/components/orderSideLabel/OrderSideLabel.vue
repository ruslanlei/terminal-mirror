<template>
  <UiTypography
    size="title2"
    :state="['semiBold', computedTypographyColorState]"
    :class="$style.orderSideLabel"
  >
    <UiTrendingIcon
      :is-visible="true"
      :direction="trendingIconDirection"
    />
    {{ computedLabel }}
  </UiTypography>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiTypography } from '../typography';
import { UiTrendingIcon } from '../trendingIcon';
import { OrderSideLabelProps } from './index';

const { t } = useI18n();

const props = defineProps<OrderSideLabelProps>();

const computedTypographyColorState = computed(() => ({ buy: 'success', sell: 'danger' }[props.side]));

const trendingIconDirection = computed<'up' | 'down'>(() => ({ buy: 'up', sell: 'down' }[props.side]) as 'up' | 'down');

const computedLabel = computed(() => ({
  buy: t('ui.order.direction.long'),
  sell: t('ui.order.direction.short'),
}[props.side]));
</script>

<style lang="scss" module>
.orderSideLabel {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
