<template>
  <Typography
    size="title2"
    :state="['semiBold', computedTypographyColorState]"
    :class="$style.orderSideLabel"
  >
    <TrendingIcon
      :is-visible="true"
      :direction="({ buy: 'up', sell: 'down' }[side])"
    />
    {{ ({ buy: t('order.direction.long'), sell: t('order.direction.short') }[side]) }}
  </Typography>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import TrendingIcon from '@/components/core/trendingIcon/TrendingIcon.vue';
import Typography from '@/components/app/typography/Typography.vue';
import { computed } from 'vue';
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
