<template>
  <div :class="$style.determinationScreen">
    <Typography
      size="massive2"
      :state="['accent1', 'bold']"
    >
      {{ t('terminalLanding.determinationScreen.label') }}
    </Typography>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Typography from '@/components/app/typography/Typography.vue';

const { t } = useI18n();
</script>

<style lang="scss" module>
.determinationScreen {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 240px;
}
</style>
