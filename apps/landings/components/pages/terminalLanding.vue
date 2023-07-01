<template>
  <TerminalLandingContainer :class="$style.terminalLandingLayout">
    <template #header>
      <LandingHeader
        v-model:active-chapter="activeSection"
        :chapters="chapters"
        :state="computedHeaderState"
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
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useScroll } from '@vueuse/core';
import WelcomeScreen
  from '~/components/terminal/welcomeScreen/WelcomeScreen.vue';
import TerminalLandingContainer from '~/containers/terminalLandingContainer/TerminalLandingContainer.vue';
import LandingHeader
  from '~/components/terminal/landingHeader/header.vue';
import LearnToEarnScreen from '~/components/terminal/learnToEarnScreen/LearnToEarnScreen.vue';
import TotalBeginnerBadge from '~/components/terminal/totalBeginnerBadge/TotalBeginnerBadge.vue';
import AssignmentScreen
  from '~/components/terminal/assignmentScreen/AssignmentScreen.vue';
import WhyToTrainScreen from '~/components/terminal/whyToTrainScreen/WhyToTrainScreen.vue';
import EcosystemCap from '~/components/common/ecosystemCap/EcosystemCap.vue';
import Plans from '~/components/terminal/plans/Plans.vue';
import Faq from '~/components/terminal/faq/Faq.vue';
import LandingFooter from '~/components/terminal/landingFooter/LandingFooter.vue';
import { useLandingAnchor } from '~/hooks/useLandingAnchor';
import { TerminalLandingChapter } from '~/types/terminal';

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

const {
  y,
} = useScroll(process.client ? window : undefined);

const computedHeaderState = computed(() => (y.value > 100 ? 'filled' : 'transparent'));
</script>

<style lang="scss" module>
.terminalLandingLayout {}
</style>
