<template>
  <UiImageBackgroundBlock
    :class="$style.terminalLandingWelcomeScreen"
    :srcset="illustrationSrcset"
    :content-class="$style.content"
  >
    <div :class="$style.partners">
      <UiTypography
        size="text"
        :state="['accent2', 'medium']"
      >
        {{ t('common.supportedBy') }}
      </UiTypography>
      <div :class="$style.partnerBadges">
        <BadgePartners partner="tradingView" />
        <BadgePartners partner="binance" />
      </div>
    </div>
    <UiTypography
      :state="['accent1', 'bold', 'alignCenter']"
      size="massive1"
      :class="$style.label"
    >
      {{ t('terminalLanding.welcomeScreen.label.part1') }}
      <br>
      <UiTypography
        is-inline
        :state="['gradientPrimary']"
      >
        {{ t('terminalLanding.welcomeScreen.label.part2') }}
      </UiTypography>
    </UiTypography>
    <UiTypography
      size="title1"
      :state="['accent1', 'alignCenter']"
      :class="$style.description"
    >
      {{ t('terminalLanding.welcomeScreen.description') }}
    </UiTypography>
    <div :class="$style.options">
      <Link
        :state="null"
        :size="null"
        :to="{ name: 'auth-sign-up' }"
      >
        <UiButton size="xl">
          {{ t('terminalLanding.welcomeScreen.options.tryForFree') }}
        </UiButton>
      </Link>
      <Link
        :state="null"
        :size="null"
        :to="{ name: 'index' }"
      >
        <UiButton
          size="xl"
          state="borderedDefault"
        >
          {{ t('terminalLanding.welcomeScreen.options.openTerminal') }}
        </UiButton>
      </Link>
    </div>
    <div :class="$style.mockupContainer">
      <TerminalScreenshotVector :class="$style.mockup" />
    </div>
  </UiImageBackgroundBlock>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiButton } from '@terminal/uikit/components/button';
import { UiTypography } from '@terminal/uikit/components/typography';
import { UiImageBackgroundBlock } from '@terminal/uikit/components/imageBackgroundBlock';
import BackgroundPng from '@terminal/uikit/assets/images/auth/background.png';
import BackgroundWebp from '@terminal/uikit/assets/images/auth/background.webp';
import BackgroundAvif from '@terminal/uikit/assets/images/auth/background.avif';
import { collectSrcSet } from '@terminal/uikit/utils/dom';
import BadgePartners from '~/components/terminal/badgePartners/BadgePartners.vue';
// import Link from '@/components/core/link/Link.vue'; TODO:
import TerminalScreenshotVector from '~/components/terminal/terminalScreenshotVector/TerminalScreenshotVector.vue';

const { t } = useI18n();

const illustrationSrcset = computed(() => collectSrcSet([
  BackgroundAvif,
  BackgroundWebp,
  BackgroundPng,
]));
</script>

<style lang="scss" module>
.terminalLandingWelcomeScreen {
  height: 1200px;
  position: relative;
}

.partners {
  margin-top: 136px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.partnerBadges {
  display: flex;
  gap: 20px;
  margin-top: 15px;
}

.content {
  background-color: rgba(var(--color-background-1), 0.8);
  padding-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    pointer-events: none;
    height: 40vh;
    width: 100%;
    background:
      linear-gradient(
        to bottom,
        rgb(var(--color-background-1)),
        rgba(var(--color-background-1), 0)
      );
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    pointer-events: none;
    height: 40vh;
    width: 100%;
    background:
      linear-gradient(
        to top,
        rgb(var(--color-background-1)),
        rgba(var(--color-background-1), 0)
      );
  }
}

.label {
  max-width: 1030px;
  margin-top: 20px;
}

.description {
  margin-top: 20px;
  max-width: 820px;
  line-height: 180%;
}

.options {
  margin-top: 60px;
  width: 100%;
  max-width: 500px;
  display: flex;
  gap: 20px;
  & > * {
    flex-grow: 1;
  }
}

.mockupContainer {
  width: 100%;
  max-width: 1127px;
}

.mockup {
  width: 100%;
}
</style>
