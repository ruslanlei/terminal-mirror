<template>
  <ImageBackgroundBlock
    :class="$style.terminalLandingWelcomeScreen"
    :srcset="illustrationSrcset"
    :content-class="$style.content"
  >
    <div :class="$style.partners">
      <Typography
        size="text"
        :state="['accent2', 'medium']"
      >
        {{ t('common.supportedBy') }}
      </Typography>
      <div :class="$style.partnerBadges">
        <BadgePartners partner="tradingView" />
        <BadgePartners partner="binance" />
      </div>
    </div>
    <Typography
      :state="['accent1', 'bold', 'alignCenter']"
      size="massive1"
      :class="$style.label"
    >
      {{ t('terminalLanding.welcomeScreen.label.part1') }}
      <br>
      <Typography
        is-inline
        :state="['gradientPrimary']"
      >
        {{ t('terminalLanding.welcomeScreen.label.part2') }}
      </Typography>
    </Typography>
    <Typography
      size="title1"
      :state="['accent1', 'alignCenter']"
      :class="$style.description"
    >
      {{ t('terminalLanding.welcomeScreen.description') }}
    </Typography>
    <div :class="$style.options">
      <Link
        :state="null"
        :size="null"
        :to="{ name: 'auth-sign-up' }"
      >
        <Button size="xl">
          {{ t('terminalLanding.welcomeScreen.options.tryForFree') }}
        </Button>
      </Link>
      <Link
        :state="null"
        :size="null"
        :to="{ name: 'index' }"
      >
        <Button
          size="xl"
          state="borderedDefault"
        >
          {{ t('terminalLanding.welcomeScreen.options.openTerminal') }}
        </Button>
      </Link>
    </div>
    <div :class="$style.mockupContainer">
      <TerminalScreenshotVector :class="$style.mockup" />
    </div>
  </ImageBackgroundBlock>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import ImageBackgroundBlock from '@/components/core/imageBackgroundBlock/ImageBackgroundBlock.vue';
import BackgroundPng from '@/assets/images/auth/background.png';
import BackgroundWebp from '@/assets/images/auth/background.webp';
import BackgroundAvif from '@/assets/images/auth/background.avif';
import BadgePartners from '@/components/app/badgePartners/BadgePartners.vue';
import Typography from '@/components/app/typography/Typography.vue';
import Button from '@/components/core/button/Button.vue';
import Link from '@/components/core/link/Link.vue';
import { collectSrcSet } from '@/utils/dom';
import TerminalScreenshotVector from './assets/terminalScreenshotVector.svg';

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
    height: calc(40 * var(--vh));
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
    height: calc(40 * var(--vh));
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
