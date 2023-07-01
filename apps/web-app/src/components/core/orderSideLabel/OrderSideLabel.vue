<template>
  <UiTypography
    size="title2"
    :state="['semiBold', computedTypographyColorState]"
    :class="$style.orderSideLabel"
  >
    <UiTrendingIcon
      :is-visible="true"
      :direction="({ buy: 'up', sell: 'down' }[side])"
    />
    {{ ({ buy: t('order.direction.long'), sell: t('order.direction.short') }[side]) }}
  </UiTypography>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiTypography } from '@terminal/uikit/components/typography';
import { UiTrendingIcon } from '@terminal/uikit/components/trendingIcon';
import { OrderSideLabelProps } from './index';

const { t } = useI18n();

const props = defineProps<OrderSideLabelProps>();

const computedTypographyColorState = computed(() => ({ buy: 'success', sell: 'danger' }[props.side]));
</script>

<style lang="scss" module>
.orderSideLabel {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
