<template>
  <div :class="$style.determinationScreen">
    <UiTypography
      size="massive2"
      :state="['accent1', 'bold']"
    >
      {{ t('terminalLanding.determinationScreen.label') }}
    </UiTypography>
    <div :class="$style.content">
      <div :class="$style.columnLeft">
        <UiPhotoCard
          v-for="(card, index) in cardsLeft"
          :key="index"
          :card-data="card"
        />
      </div>
      <div :class="$style.columnRight">
        <UiPhotoCard
          v-for="(card, index) in cardsRight"
          :key="index"
          :card-data="card"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiTypography } from '@terminal/uikit/components/typography';
import { UiPhotoCard, IPhotoCard } from '@terminal/uikit/components/photoCard';
import { collectSrcSet } from '@terminal/uikit/utils/dom';

import BeginnersImageAvif from './assets/determinationScreenBeginnersImage.avif';
import BeginnersImageWebp from './assets/determinationScreenBeginnersImage.webp';
import BeginnersImagePng from './assets/determinationScreenBeginnersImage.png';

import TradersImageAvif from './assets/determinationScreenTradersImage.avif';
import TradersImageWebp from './assets/determinationScreenTradersImage.webp';
import TradersImagePng from './assets/determinationScreenTradersImage.png';

import PropCompOwnersImageAvif from './assets/determinationScreenPropCompOwnersImage.avif';
import PropCompOwnersImageWebp from './assets/determinationScreenPropCompOwnersImage.webp';
import PropCompOwnersImagePng from './assets/determinationScreenPropCompOwnersImage.png';

import CourseCreatorsImageAvif from './assets/determinationScreenCourseCreatorsImage.avif';
import CourseCreatorsImageWebp from './assets/determinationScreenCourseCreatorsImage.webp';
import CourseCreatorsImagePng from './assets/determinationScreenCourseCreatorsImage.png';

const { t } = useI18n();

const cardsLeft = computed<IPhotoCard[]>(() => [
  {
    label: t('terminalLanding.determinationScreen.card.beginners.label'),
    description: t('terminalLanding.determinationScreen.card.beginners.text'),
    imageSrcSet: collectSrcSet([
      BeginnersImageAvif,
      BeginnersImageWebp,
      BeginnersImagePng,
    ]),
  },
  {
    label: t('terminalLanding.determinationScreen.card.traders.label'),
    description: t('terminalLanding.determinationScreen.card.traders.text'),
    imageSrcSet: collectSrcSet([
      TradersImageAvif,
      TradersImageWebp,
      TradersImagePng,
    ]),
  },
]);

const cardsRight = computed<IPhotoCard[]>(() => [
  {
    label: t('terminalLanding.determinationScreen.card.propCompanyOwners.label'),
    description: t('terminalLanding.determinationScreen.card.propCompanyOwners.text'),
    imageSrcSet: collectSrcSet([
      PropCompOwnersImageAvif,
      PropCompOwnersImageWebp,
      PropCompOwnersImagePng,
    ]),
  },
  {
    label: t('terminalLanding.determinationScreen.card.courseCreators.label'),
    description: t('terminalLanding.determinationScreen.card.courseCreators.text'),
    imageSrcSet: collectSrcSet([
      CourseCreatorsImageAvif,
      CourseCreatorsImageWebp,
      CourseCreatorsImagePng,
    ]),
  },
]);
</script>

<style lang="scss" module>
.determinationScreen {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 240px;
}

.content {
  display: flex;
  justify-content: stretch;
  width: 100%;
  max-width: 1240px;
  gap: 20px;
  margin-top: 80px;
}

.columnRight, .columnLeft {
  flex-grow: 1;
}

.columnLeft {
  display: grid;
  grid-template-rows: 2fr 1fr;
  gap: 20px;
}

.columnRight {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
}
</style>
