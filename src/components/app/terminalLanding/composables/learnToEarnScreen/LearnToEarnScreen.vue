<template>
  <div :class="$style.learnToEarnScreen">
    <Typography
      size="massive2"
      :state="['accent1', 'bold']"
      :class="$style.label"
    >
      {{ t('terminalLanding.learnToEarn.label') }}
    </Typography>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Typography from '@/components/app/typography/Typography.vue';

const { t } = useI18n();
</script>

<style lang="scss" module>
.learnToEarnScreen {
  height: calc(100 * var(--vh));
  display: flex;
  flex-direction: column;
  align-items: center;
}

.label {
  margin-top: 94px;
}
</style>
