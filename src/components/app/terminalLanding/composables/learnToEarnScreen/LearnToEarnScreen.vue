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
        :path="activeScena"
      />
      <LearnToEarnFrames
        v-model="activeFrameIndex"
        :frames="frames"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Typography from '@/components/app/typography/Typography.vue';
import LearnToEarnFrames
  from '@/components/app/terminalLanding/composables/learnToEarnScreen/learnToEarnFrames/LearnToEarnFrames.vue';
import { ILearnToEarnFrame } from '@/components/app/terminalLanding/composables/learnToEarnScreen/learnToEarnFrame';

import Lottie from '@/components/core/lottie/Lottie.vue';
import scena1 from './assets/scena1.json?url';
import scena2 from './assets/scena2.json?url';
import scena3 from './assets/scena3.json?url';
import scena4 from './assets/scena4.json?url';

const { t } = useI18n();

const activeFrameIndex = ref(0);

const activeScena = computed(() => ([
  scena1,
  scena2,
  scena3,
  scena4,
][activeFrameIndex.value]));

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
