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
        :class="$style.lottieScene"
        :path="activeScene"
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
import { useI18nStore } from '@/stores/i18n';
import { storeToRefs } from 'pinia';
import scene1 from './assets/scene1.json?url';
import scene1Ru from './assets/scene1Ru.json?url';
import scene2 from './assets/scene2.json?url';
import scene3 from './assets/scene3.json?url';
import scene4 from './assets/scene4.json?url';

const { t } = useI18n();

const i18nStore = useI18nStore();
const {
  locale,
} = storeToRefs(i18nStore);

const activeFrameIndex = ref(0);

const activeScene = computed(() => ([
  locale.value === 'ru' ? scene1Ru : scene1,
  scene2,
  scene3,
  scene4,
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
  grid-template-columns: 588px 1fr;
  grid-template-rows: minmax(660px, auto);
}

.lottieScene {
  background: var(--color-main-gradient);
  border-radius: 10px;
}
</style>
