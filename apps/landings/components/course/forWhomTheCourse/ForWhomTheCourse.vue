<template>
  <div
    :class="$style.forWhomCourse"
  >
    <UiTypography
      size="massive2"
      :state="['accent1', 'bold']"
    >
      {{ t('courseLanding.forWhomTheCourse.heading') }}
    </UiTypography>
    <div :class="$style.columnsWrapper">
      <UiPhotoCard
        v-for="(card, index) in cards"
        :key="index"
        :card-data="card"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiTypography } from '@terminal/uikit/components/typography';
import { UiPhotoCard, IPhotoCard } from '@terminal/uikit/components/photoCard';

import { collectSrcSet } from '@terminal/uikit/utils/dom';
import BeginnersBgPng from './assets/beginnersBg.png';
import BeginnersBgWebp from './assets/beginnersBg.webp';
import BeginnersBgAvif from './assets/beginnersBg.avif';

import RelocantsBgPng from './assets/relocantsBg.png';
import RelocantsBgWebp from './assets/relocantsBg.webp';
import RelocantsBgAvif from './assets/relocantsBg.avif';

import TradersBgPng from './assets/tradersBg.png';
import TradersBgWebp from './assets/tradersBg.webp';
import TradersBgAvif from './assets/tradersBg.avif';

import EnterpreneursBgPng from './assets/enterpreneursBg.png';
import EnterpreneursBgWebp from './assets/enterpreneursBg.webp';
import EnterpreneursBgAvif from './assets/enterpreneursBg.avif';

import PropCompaniesBgPng from './assets/companiesBg.png';
import PropCompaniesBgWebp from './assets/companiesBg.webp';
import PropCompaniesBgAvif from './assets/companiesBg.avif';

const { t } = useI18n();

const cards = computed<IPhotoCard[]>(() => [
  {
    label: t('courseLanding.forWhomTheCourse.card.beginners.label'),
    description: t('courseLanding.forWhomTheCourse.card.beginners.text'),
    imageSrcSet: collectSrcSet([
      BeginnersBgAvif,
      BeginnersBgWebp,
      BeginnersBgPng,
    ]),
  },
  {
    label: t('courseLanding.forWhomTheCourse.card.relocants.label'),
    description: t('courseLanding.forWhomTheCourse.card.relocants.text'),
    imageSrcSet: collectSrcSet([
      RelocantsBgAvif,
      RelocantsBgWebp,
      RelocantsBgPng,
    ]),
  },
  {
    label: t('courseLanding.forWhomTheCourse.card.entrepreneurs.label'),
    description: t('courseLanding.forWhomTheCourse.card.entrepreneurs.text'),
    imageSrcSet: collectSrcSet([
      EnterpreneursBgAvif,
      EnterpreneursBgWebp,
      EnterpreneursBgPng,
    ]),
  },
  {
    label: t('courseLanding.forWhomTheCourse.card.traders.label'),
    description: t('courseLanding.forWhomTheCourse.card.traders.text'),
    imageSrcSet: collectSrcSet([
      TradersBgAvif,
      TradersBgWebp,
      TradersBgPng,
    ]),
  },
  {
    label: t('courseLanding.forWhomTheCourse.card.propCompanies.label'),
    description: t('courseLanding.forWhomTheCourse.card.propCompanies.text'),
    imageSrcSet: collectSrcSet([
      PropCompaniesBgAvif,
      PropCompaniesBgWebp,
      PropCompaniesBgPng,
    ]),
  },
]);
</script>

<style lang="scss" module>
@import "@terminal/uikit/assets/styles/utils";

.forWhomCourse {
  height: 1253px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.columnsWrapper {
  display: grid;
  margin-top: 80px;
  max-width: 1235px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 430px 295px;
  gap: 20px;
  & > * {
    &:first-child {
      grid-column: 1 / span 2;
    }

    &:nth-child(2) {
      grid-column: 3 / span 2;
    }

    &:nth-child(3) {
      grid-column: 5 / span 2;
    }

    &:nth-child(4) {
      grid-column: 1 / span 3;
    }

    &:nth-child(5) {
      grid-column: 4 / span 3;
    }
  }
}
</style>
