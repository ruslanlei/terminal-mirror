<template>
  <ImageBackgroundBlock
    :class="$style.terminalLandingWelcomeScreen"
    :srcset="illustrationSrcset"
    :content-class="$style.content"
  >
    <BadgeSupportedByTradingView :class="$style.tradingViewBadge" />
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
      <Button size="xl">
        {{ t('terminalLanding.welcomeScreen.options.tryForFree') }}
      </Button>
      <Button
        size="xl"
        state="borderedDefault"
      >
        {{ t('terminalLanding.welcomeScreen.options.openTerminal') }}
      </Button>
    </div>
  </ImageBackgroundBlock>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import ImageBackgroundBlock from '@/components/core/imageBackgroundBlock/ImageBackgroundBlock.vue';
import { collectSrcSet } from '@/helpers/dom';
import BackgroundPng from '@/assets/images/auth/background.png';
import BackgroundWebp from '@/assets/images/auth/background.webp';
import BackgroundAvif from '@/assets/images/auth/background.avif';
import BadgeSupportedByTradingView from '@/components/app/badgeSupportedByTradingView/BadgeSupportedByTradingView.vue';
import Typography from '@/components/app/typography/Typography.vue';
import Button from '@/components/core/button/Button.vue';

const { t } = useI18n();

const illustrationSrcset = computed(() => collectSrcSet([
  BackgroundAvif,
  BackgroundWebp,
  BackgroundPng,
]));
</script>

<style lang="scss" module>
.terminalLandingWelcomeScreen {
  height: calc(100 * var(--vh));
  position: relative;
}

.tradingViewBadge {
  margin-top: 136px;
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
</style>
