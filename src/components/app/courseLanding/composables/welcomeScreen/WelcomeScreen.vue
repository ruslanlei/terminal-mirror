<template>
  <ImageBackgroundBlock
    :class="$style.courseLandingWelcomeScreen"
    :srcset="backgroundSrcset"
    :content-class="$style.content"
  >
    <div :class="$style.main">
      <div :class="$style.textInformation">
        <Typography
          :class="$style.label"
          :state="['accent1', 'bold']"
          size="massive1"
        >
          {{ t('courseLanding.welcomeScreen.label') }}
        </Typography>
        <Typography
          :class="$style.description"
          :state="['accent2']"
          size="textLg"
        >
          {{ t('courseLanding.welcomeScreen.description') }}
        </Typography>
        <div :class="$style.options">
          <Button
            state="blueGradientColor"
            size="xl"
            :is-wide="false"
            :class="$style.buyCourseButton"
          >
            {{ t('courseLanding.welcomeScreen.options.buyCourse') }}
          </Button>
          <Button
            state="greyBordered"
            size="xl"
            :is-wide="false"
            :class="$style.courseProgramButton"
          >
            {{ t('courseLanding.welcomeScreen.options.courseProgram') }}
          </Button>
        </div>
      </div>
      <Picture
        is-fill
        :srcset="astronautSrcset"
      />
    </div>
    <div :class="$style.advantageCardsWrapper">
      <AdvantagesCard
        v-for="card in cards"
        :key="card"
        :card="card"
      />
    </div>
  </ImageBackgroundBlock>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Typography from '@/components/app/typography/Typography.vue';
import Picture from '@/components/core/picture/Picture.vue';
import ImageBackgroundBlock from '@/components/core/imageBackgroundBlock/ImageBackgroundBlock.vue';
import AdvantagesCard from '@/components/app/courseLanding/composables/welcomeScreen/advantagesCard/AdvantagesCard.vue';
import { collectSrcSet } from '@/helpers/dom';
import Button from '@/components/core/button/Button.vue';

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

const buildingSrcset = collectSrcSet([
  BuildingAvif,
  BuildingWebp,
  BuildingPng,
]);

const certificateSrcset = collectSrcSet([
  CertificateAvif,
  CertificateWebp,
  CertificatePng,
]);

const tetrisSrcset = collectSrcSet([
  TetrisAvif,
  TetrisWebp,
  TetrisPng,
]);

const tentSrcset = collectSrcSet([
  TentAvif,
  TentWebp,
  TentPng,
]);

const cards = computed(() => [
  {
    pictureBackground: 'yellow',
    picture: buildingSrcset,
    text: t('courseLanding.welcomeScreen.advantageCards.modules'),
  },
  {
    pictureBackground: 'green',
    picture: certificateSrcset,
    text: t('courseLanding.welcomeScreen.advantageCards.systems'),
  },
  {
    pictureBackground: 'purple',
    picture: tetrisSrcset,
    text: t('courseLanding.welcomeScreen.advantageCards.videoLesson'),
  },
  {
    pictureBackground: 'blue',
    picture: tentSrcset,
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
