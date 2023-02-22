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
}

.label {
  max-width: 1030px;
  margin-top: 20px;
}
</style>
