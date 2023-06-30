<template>
  <UiImageBackgroundBlock
    :class="$style.courseLandingWelcomeScreen"
    :srcset="backgroundSrcset"
    :content-class="$style.content"
  >
    <div :class="$style.main">
      <div :class="$style.textInformation">
        <UiTypography
          :class="$style.label"
          :state="['accent1', 'bold']"
          size="massive1"
        >
          {{ t('courseLanding.welcomeScreen.label') }}
        </UiTypography>
        <UiTypography
          :class="$style.description"
          :state="['accent2']"
          size="textLg"
        >
          {{ t('courseLanding.welcomeScreen.description') }}
        </UiTypography>
        <div :class="$style.options">
          <UiButton
            state="blueGradientColor"
            size="xl"
            :is-wide="false"
            :class="$style.buyCourseButton"
            @click="onClickBuy"
          >
            {{ t('courseLanding.welcomeScreen.options.buyCourse') }}
          </UiButton>
          <UiButton
            state="greyBordered"
            size="xl"
            :is-wide="false"
            :class="$style.courseProgramButton"
            @click="onClickCourseProgram"
          >
            {{ t('courseLanding.welcomeScreen.options.courseProgram') }}
          </UiButton>
        </div>
      </div>
      <Picture
        is-fill
        :srcset="astronautSrcset"
        :class="$style.image"
      />
    </div>
    <div :class="$style.advantageCardsWrapper">
      <AdvantagesCard
        v-for="card in cards"
        :key="card"
        :card="card"
      />
    </div>
  </UiImageBackgroundBlock>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiButton } from '@terminal/uikit/components/button';
import { UiTypography } from '@terminal/uikit/components/typography';
import { UiImageBackgroundBlock } from '@terminal/uikit/components/imageBackgroundBlock';

import Picture from '@/components/core/picture/Picture.vue';
import AdvantagesCard from '@/components/app/courseLanding/composables/welcomeScreen/advantagesCard/AdvantagesCard.vue';

import { WelcomeScreenEmits } from '@/components/app/courseLanding/composables/welcomeScreen/index';
import { collectSrcSet } from '@/utils/dom';
import BackgroundPng from './assets/welcomeScreenBg.png';
import BackgroundWebp from './assets/welcomeScreenBg.webp';
import BackgroundAvif from './assets/welcomeScreenBg.avif';

import AstronautAvif from './assets/astronaut.avif';
import AstronautWebp from './assets/astronaut.webp';
import AstronautPng from './assets/astronaut.png';

import BuildingPng from './assets/building.png';
import BuildingWebp from './assets/building.webp';
import BuildingAvif from './assets/building.avif';

import CertificatePng from './assets/certificate.png';
import CertificateWebp from './assets/certificate.webp';
import CertificateAvif from './assets/certificate.avif';

import TetrisPng from './assets/tetris.png';
import TetrisWebp from './assets/tetris.webp';
import TetrisAvif from './assets/tetris.avif';

import TentPng from './assets/tent.png';
import TentWebp from './assets/tent.webp';
import TentAvif from './assets/tent.avif';

const { t } = useI18n();

const emit = defineEmits<WelcomeScreenEmits>();

const onClickBuy = () => {
  emit('clickBuy');
};

const onClickCourseProgram = () => {
  emit('clickCourseProgram');
};

const backgroundSrcset = collectSrcSet([
  BackgroundAvif,
  BackgroundWebp,
  BackgroundPng,
]);

const astronautSrcset = collectSrcSet([
  AstronautAvif,
  AstronautWebp,
  AstronautPng,
]);

const cards = computed(() => [
  {
    pictureBackground: 'yellow',
    picture: collectSrcSet([
      BuildingAvif,
      BuildingWebp,
      BuildingPng,
    ]),
    text: t('courseLanding.welcomeScreen.advantageCards.modules'),
  },
  {
    pictureBackground: 'green',
    picture: collectSrcSet([
      CertificateAvif,
      CertificateWebp,
      CertificatePng,
    ]),
    text: t('courseLanding.welcomeScreen.advantageCards.systems'),
  },
  {
    pictureBackground: 'purple',
    picture: collectSrcSet([
      TetrisAvif,
      TetrisWebp,
      TetrisPng,
    ]),
    text: t('courseLanding.welcomeScreen.advantageCards.videoLesson'),
  },
  {
    pictureBackground: 'blue',
    picture: collectSrcSet([
      TentAvif,
      TentWebp,
      TentPng,
    ]),
    text: t('courseLanding.welcomeScreen.advantageCards.experience'),
  },
]);
</script>

<style lang="scss" module>
.courseLandingWelcomeScreen {
  position: relative;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 220px;
}

.main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  max-width: 1400px;
  padding: 0 60px;
}

.image {
  width: 610px;
  height: 610px;
}

.textInformation {}

.label {
  font-size: 48px;
}

.description {
  line-height: 29px;
  margin-top: 20px;
}

.options {
  margin-top: 60px;
  display: flex;
  gap: 20px;
}

.buyCourseButton {
  padding-left: 40px;
  padding-right: 40px;
}

.courseProgramButton {
  padding-left: 40px;
  padding-right: 40px;
}

.advantageCardsWrapper {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.circle {
  position: absolute;
  width: 66px;
  height: 66px;
  border-radius: 50%;
}

.cardText {
  width: 190px;
}
</style>
