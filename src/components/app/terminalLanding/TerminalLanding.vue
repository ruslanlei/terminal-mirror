<template>
  <div>
    <TerminalLandingContainer :class="$style.terminalLandingLayout">
      <template #header>
        <LandingHeader
          v-model:active-chapter="activeSection"
          :chapters="chapters"
        />
      </template>
      <template #welcomeScreen>
        <WelcomeScreen id="about" />
      </template>
      <template #learnToEarnScreen>
        <LearnToEarnScreen />
      </template>
      <template #totalBeginnerBadge>
        <TotalBeginnerBadge />
      </template>
      <template #assignmentScreen>
        <AssignmentScreen id="forWhom" />
      </template>
      <template #whyToTrainScreen>
        <WhyToTrainScreen id="advantages" />
      </template>
      <template #ecosystemScreen>
        <EcosystemCap />
      </template>
      <template #plans>
        <Plans id="tariffs" />
      </template>
      <template #faq>
        <Faq id="faq" />
      </template>
      <template #footer>
        <LandingFooter />
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
import AssignmentScreen
  from '@/components/app/terminalLanding/composables/assignmentScreen/AssignmentScreen.vue';
import WhyToTrainScreen from '@/components/app/terminalLanding/composables/whyToTrainScreen/WhyToTrainScreen.vue';
import EcosystemCap from '@/components/app/ecosystemCap/EcosystemCap.vue';
import Plans from '@/components/app/terminalLanding/composables/plans/Plans.vue';
import Faq from '@/components/app/terminalLanding/composables/faq/Faq.vue';
import LandingFooter from '@/components/app/terminalLanding/composables/landingFooter/LandingFooter.vue';
import { useLandingAnchor } from '@/hooks/useLandingAnchor';
import { CourseLandingChapter } from '@/components/app/courseLanding';
import { TerminalLandingChapter } from './index';

const { t } = useI18n();

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

const {
  activeSection,
} = useLandingAnchor(
  chapters.value.map((
    { slug }: TerminalLandingChapter,
  ) => slug),
);
</script>

<style lang="scss" module>
.terminalLandingLayout {}
</style>
