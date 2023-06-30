<template>
  <div :class="$style.courseProgram">
    <header :class="$style.header">
      <UiTypography
        :state="['accent1', 'bold']"
        size="massive2"
      >
        {{ t('courseLanding.courseProgram.heading') }}
      </UiTypography>
      <div :class="$style.buttonsWrapper">
        <button
          type="button"
          :class="$style.button"
          @click="slidePrev"
        >
          <UiIcon icon="arrowLeft" />
        </button>
        <button
          type="button"
          :class="$style.button"
          @click="slideNext"
        >
          <UiIcon icon="arrowRight" />
        </button>
      </div>
    </header>
    <div :class="$style.courseCardsWrapper">
      <UiSlider
        ref="slider"
        :slides="slides"
        :gap="20"
        :with-padding="true"
        :slides-per-view="3"
        :class="$style.slider"
      >
        <template #slide="{ slideData }">
          <div :class="$style.cardContainer">
            <CourseProgramCard :data="slideData" />
          </div>
        </template>
      </UiSlider>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiIcon } from '@terminal/uikit/components/icon';
import { UiTypography } from '@terminal/uikit/components/typography';
import { UiSlider } from '@terminal/uikit/components/slider';

import { ICourseProgramCard } from '@/components/app/courseLanding/composables/courseProgram/courseProgramCard';
import { collectSrcSet } from '@/utils/dom';
import CourseProgramCard from './courseProgramCard/CourseProgramCard.vue';
import PlanetPicPng from './assets/planet.png';
import PlanetPicWebp from './assets/planet.webp';
import PlanetPicAvif from './assets/planet.avif';

import WalletPicPng from './assets/wallet.png';
import WalletPicWebp from './assets/wallet.webp';
import WalletPicAvif from './assets/wallet.avif';

import Planet2PicPng from './assets/planet2.png';
import Planet2PicWebp from './assets/planet2.webp';
import Planet2PicAvif from './assets/planet2.avif';

const { t } = useI18n();

const slider = ref();

const slidePrev = () => {
  slider.value.prev();
};

const slideNext = () => {
  slider.value.next();
};

const slides = computed<{ data: ICourseProgramCard }[]>(() => [
  {
    data: {
      moduleIndex: t('courseLanding.courseProgram.moduleIndex', { index: 1 }),
      heading: t('courseLanding.courseProgram.modules.first.heading'),
      description: t('courseLanding.courseProgram.modules.first.description'),
      contentsHeading: {
        keyPath: 'courseLanding.courseProgram.contentsHeading',
        period: t('courseLanding.courseProgram.modules.first.periodFormatted'),
      },
      contents: t('courseLanding.courseProgram.modules.first.contents'),
      imageSrcSet: collectSrcSet([
        PlanetPicAvif,
        PlanetPicWebp,
        PlanetPicPng,
      ]),
    },
  },
  {
    data: {
      moduleIndex: t('courseLanding.courseProgram.moduleIndex', { index: 2 }),
      heading: t('courseLanding.courseProgram.modules.second.heading'),
      description: t('courseLanding.courseProgram.modules.second.description'),
      contentsHeading: {
        keyPath: 'courseLanding.courseProgram.contentsHeading',
        period: t('courseLanding.courseProgram.modules.second.periodFormatted'),
      },
      contents: t('courseLanding.courseProgram.modules.second.contents'),
      imageSrcSet: collectSrcSet([
        WalletPicAvif,
        WalletPicWebp,
        WalletPicPng,
      ]),
    },
  },
  {
    data: {
      moduleIndex: t('courseLanding.courseProgram.moduleIndex', { index: 3 }),
      heading: t('courseLanding.courseProgram.modules.third.heading'),
      description: t('courseLanding.courseProgram.modules.third.description'),
      contentsHeading: {
        keyPath: 'courseLanding.courseProgram.contentsHeading',
        period: t('courseLanding.courseProgram.modules.third.periodFormatted'),
      },
      contents: t('courseLanding.courseProgram.modules.third.contents'),
      imageSrcSet: collectSrcSet([
        Planet2PicAvif,
        Planet2PicWebp,
        Planet2PicPng,
      ]),
    },
  },
]);
</script>

<style lang="scss" module>
.courseProgram {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(var(--color-background-2));
  padding: 240px 0;
}

.header {
  max-width: 1240px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.buttonsWrapper {
  display: flex;
  gap: 20px;
}

.button {
  width: 52px;
  height: 52px;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: rgb(var(--color-background-3));
  color: rgb(var(--color-accent-2));
}

.courseCardsWrapper {
  width: 100%;
  display: flex;
  gap: 20px;
  margin-top: 80px;
}

.cardContainer {
  padding-top: 40px;
}

.slider {
  padding: 0 100px;
}
</style>
