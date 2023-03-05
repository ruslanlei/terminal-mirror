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
      <Lottie
        :path="PlayerControlsLottie"
      />
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
import { ILearnToEarnFrame } from '@/components/app/terminalLanding/composables/learnToEarnScreen/learnToEarnFrame';

import Lottie from '@/components/core/lottie/Lottie.vue';
import PlayerControlsLottie from './assets/playerControlsLottie.json?url';

const { t } = useI18n();

const frames = computed<ILearnToEarnFrame[]>(() => [
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

.label {
  margin-top: 94px;
}

.content {
  margin-top: 80px;
  gap: 80px;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
}
</style>
