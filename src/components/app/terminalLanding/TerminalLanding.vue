<template>
  <div>
    <TerminalLandingContainer :class="$style.terminalLandingLayout">
      <template #header>
        <TerminalLandingHeader
          v-model:active-chapter="activeChapter"
          :chapters="chapters"
        />
      </template>
      <template #content>
        <TerminalLandingWelcomeScreen />
      </template>
    </TerminalLandingContainer>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import TerminalLandingWelcomeScreen
  from '@/components/app/terminalLanding/composables/terminalLandingWelcomeScreen/TerminalLandingWelcomeScreen.vue';
import TerminalLandingContainer from '@/containers/terminalLandingContainer/TerminalLandingContainer.vue';
import TerminalLandingHeader
  from '@/components/app/terminalLanding/composables/terminalLandingHeader/TerminalLandingHeader.vue';
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
