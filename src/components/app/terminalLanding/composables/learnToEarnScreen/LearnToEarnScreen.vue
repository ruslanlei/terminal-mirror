<template>
  <div :class="$style.learnToEarnScreen">
    <Typography
      size="massive2"
      :state="['accent1', 'bold']"
      :class="$style.label"
    >
      {{ t('terminalLanding.learnToEarn.label') }}
    </Typography>
    <div :class="$style.content">
      <LearnToEarnFrames :frames="frames" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Typography from '@/components/app/typography/Typography.vue';
import LearnToEarnFrames
  from '@/components/app/terminalLanding/composables/learnToEarnScreen/learnToEarnFrames/LearnToEarnFrames.vue';
import { LearnToEarnFrame } from '@/components/app/terminalLanding/composables/learnToEarnScreen/learnToEarnFrame';

const { t } = useI18n();

const frames = computed<LearnToEarnFrame[]>(() => [
  {
    label: t('terminalLanding.learnToEarn.frame.safeOperations.label'),
    description: t('terminalLanding.learnToEarn.frame.safeOperations.description'),
  },
  {
    label: t('terminalLanding.learnToEarn.frame.easeOfLearning.label'),
    description: t('terminalLanding.learnToEarn.frame.easeOfLearning.description'),
  },
  {
    label: t('terminalLanding.learnToEarn.frame.playerInTerminal.label'),
    description: t('terminalLanding.learnToEarn.frame.playerInTerminal.description'),
  },
  {
    label: t('terminalLanding.learnToEarn.frame.cryptocurrencyMarket.label'),
    description: t('terminalLanding.learnToEarn.frame.cryptocurrencyMarket.description'),
  },
]);
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

.content {
  margin-top: 80px;
}
</style>
