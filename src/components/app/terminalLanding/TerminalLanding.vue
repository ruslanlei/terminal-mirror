<template>
  <div>
    <TerminalLandingContainer :class="$style.terminalLandingLayout">
      <template #header>
        <LandingHeader
          v-model:active-chapter="activeChapter"
          :chapters="chapters"
        />
      </template>
      <template #welcomeScreen>
        <WelcomeScreen />
      </template>
      <template #learnToEarnScreen>
        <LearnToEarnScreen />
      </template>
      <template #totalBeginnerBadge>
        <TotalBeginnerBadge />
      </template>
      <template #determinationScreen>
        <DeterminationScreen />
      </template>
    </TerminalLandingContainer>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import WelcomeScreen
  from '@/components/app/terminalLanding/composables/welcomeScreen/WelcomeScreen.vue';
import TerminalLandingContainer from '@/containers/terminalLandingContainer/TerminalLandingContainer.vue';
import LandingHeader
  from '@/components/app/terminalLanding/composables/landingHeader/LandingHeader.vue';
import LearnToEarnScreen from '@/components/app/terminalLanding/composables/learnToEarnScreen/LearnToEarnScreen.vue';
import TotalBeginnerBadge from '@/components/app/terminalLanding/composables/totalBeginnerBadge/TotalBeginnerBadge.vue';
import DeterminationScreen
  from '@/components/app/terminalLanding/composables/determinationScreen/DeterminationScreen.vue';
import { TerminalLandingChapter } from './index';

const { t } = useI18n();

const activeChapter = ref<TerminalLandingChapter['slug']>('about');

const chapters = computed<TerminalLandingChapter[]>(() => [
  {
    label: t('terminalLanding.chapter.about'),
    slug: 'about',
  },
  {
    label: t('terminalLanding.chapter.forWhom'),
    slug: 'forWhom',
  },
  {
    label: t('terminalLanding.chapter.advantages'),
    slug: 'advantages',
  },
  {
    label: t('terminalLanding.chapter.tariffs'),
    slug: 'tariffs',
  },
  {
    label: t('terminalLanding.chapter.faq'),
    slug: 'faq',
  },
]);
</script>

<style lang="scss" module>
.terminalLandingLayout {}
</style>
