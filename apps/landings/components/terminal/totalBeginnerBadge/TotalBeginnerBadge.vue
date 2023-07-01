<template>
  <div :class="$style.totalBeginnerBadge">
    <div :class="$style.text">
      <UiTypography
        size="massive3"
        :state="['bold']"
      >
        {{ t('terminalLanding.totalBeginner.label') }}
      </UiTypography>
      <UiTypography
        size="title1"
        :state="['medium']"
        :class="$style.description"
      >
        {{ t('terminalLanding.totalBeginner.description') }}
      </UiTypography>
    </div>
    <div :class="$style.illustrationContainer">
      <UiPicture
        :class="$style.illustrationPicture"
        :srcset="illustrationSrcSet"
      />
    </div>
    <div :class="$style.buttonContainer">
      <Link
        :size="null"
        :state="null"
        :to="{ name: 'about-course' }"
      >
        <UiButton
          size="xl"
          :state="['background1']"
          :is-wide="false"
          :class="$style.button"
        >
          {{ t('terminalLanding.totalBeginner.learnMore') }}
        </UiButton>
      </Link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { UiButton } from '@terminal/uikit/components/button';
import { UiTypography } from '@terminal/uikit/components/typography';
import { UiPicture } from '@terminal/uikit/components/picture';
import { collectSrcSet } from '@terminal/uikit/utils/dom';
// import Link from '@/components/core/link/Link.vue'; // TODO:
import IllustrationAvif from './assets/illustration.avif';
import IllustrationWebp from './assets/illustration.webp';
import IllustrationPng from './assets/illustration.png';
import AppPicture from '~/components/common/AppPicture.vue';

const illustrationSrcSet = collectSrcSet([
  IllustrationAvif,
  IllustrationWebp,
  IllustrationPng,
]);

const { t } = useI18n();
</script>

<style lang="scss" module>
.totalBeginnerBadge {
  background: var(--color-blue-gradient);
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1.7fr 1fr 0.7fr;
  align-items: center;
}

.text {
  padding: 60px 0 60px 105px;
}

.description {
  margin-top: 15px;
}

.illustrationContainer {
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
}

.illustrationPicture {
  position: absolute;
  bottom: 0;
}

.buttonContainer {
  display: flex;
}

.button {
  padding: 20px 56px;
}
</style>
