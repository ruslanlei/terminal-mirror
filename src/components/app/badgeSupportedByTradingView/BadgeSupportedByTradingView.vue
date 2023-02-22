<template>
  <Badge
    state="default"
    size="sm"
    :class="$style.badgeSupportedByTradingView"
  >
    <Typography
      size="text"
      state="accent2"
    >
      <i18n-t
        tag="div"
        :class="$style.inner"
        keypath="common.supportedBy"
      >
        <template #supporter>
          <TradingViewLogo :class="$style.logo" />
        </template>
      </i18n-t>
    </Typography>
  </Badge>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Badge from '@/components/core/badge/Badge.vue';
import Typography from '@/components/app/typography/Typography.vue';
import TradingViewLogo from '@/assets/images/tradingviewLogo.svg';

const { t } = useI18n();
</script>

<style lang="scss" module>
.badgeSupportedByTradingView {
  padding: 12px 20px;
  border-radius: 10px;
}

.inner {
  display: flex;
  align-items: center;
}

.logo {
  width: 142px;
  fill: currentColor;
  margin-left: 10px;
}
</style>
