<template>
  <div :class="$style.studentsReviews">
    <header :class="$style.header">
      <Typography
        :state="['accent1', 'bold']"
        size="massive2"
      >
        {{ t('courseLanding.reviews.heading') }}
      </Typography>
      <div :class="$style.buttonsWrapper">
        <button
          type="button"
          :class="$style.button"
          @click="slidePrev"
        >
          <Icon icon="arrowLeft" />
        </button>
        <button
          type="button"
          :class="$style.button"
          @click="slideNext"
        >
          <Icon icon="arrowRight" />
        </button>
      </div>
    </header>
    <div :class="$style.reviewCardsWrapper">
      <Slider
        ref="slider"
        :slides="slides"
        :gap="20"
        :slides-per-view="3"
      >
        <template #slide="{ slideData }">
          <ReviewCard :data="slideData" />
        </template>
      </Slider>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Typography from '@/components/app/typography/Typography.vue';
import Icon from '@/components/core/icon/Icon.vue';
import { collectSrcSet } from '@/helpers/dom';
import Slider from '@/components/core/slider/Slider.vue';
import { computed, ref } from 'vue';
import ReviewCard from './reviewCard/ReviewCard.vue';

import ReviewPicSmallPng from './assets/reviewSmall.png';
import ReviewPicSmallWebp from './assets/reviewSmall.webp';
import ReviewPicSmallAvif from './assets/reviewSmall.avif';

import ReviewPicBigPng from './assets/reviewBig.png';
import ReviewPicBigWebp from './assets/reviewBig.webp';
import ReviewPicBigAvif from './assets/reviewBig.avif';

const { t } = useI18n();

const slider = ref();

const slides = computed(() => [
  {
    data: {
      username: t('courseLanding.reviews.reviewUserName'),
      userPosition: t('courseLanding.reviews.reviewUserPosition'),
      date: '22.02.2023',
      chapters: [
        {
          label: t('courseLanding.reviews.exampleReview.chapters.first.label'),
          text: t('courseLanding.reviews.exampleReview.chapters.first.text'),
        },
        {
          label: t('courseLanding.reviews.exampleReview.chapters.second.label'),
          text: t('courseLanding.reviews.exampleReview.chapters.second.text'),
        },
      ],
      picture: collectSrcSet([
        ReviewPicSmallAvif,
        ReviewPicSmallWebp,
        ReviewPicSmallPng,
      ]),
    },
  },
  {
    data: {
      username: t('courseLanding.reviews.reviewUserName'),
      userPosition: t('courseLanding.reviews.reviewUserPosition'),
      date: '22.02.2023',
      chapters: [
        {
          label: t('courseLanding.reviews.exampleReview.chapters.first.label'),
          text: t('courseLanding.reviews.exampleReview.chapters.first.text'),
        },
        {
          label: t('courseLanding.reviews.exampleReview.chapters.second.label'),
          text: t('courseLanding.reviews.exampleReview.chapters.second.text'),
        },
      ],
      picture: collectSrcSet([
        ReviewPicBigAvif,
        ReviewPicBigWebp,
        ReviewPicBigPng,
      ]),
    },
  },
  {
    data: {
      username: t('courseLanding.reviews.reviewUserName'),
      userPosition: t('courseLanding.reviews.reviewUserPosition'),
      date: '22.02.2023',
      chapters: [
        {
          label: t('courseLanding.reviews.exampleReview.chapters.first.label'),
          text: t('courseLanding.reviews.exampleReview.chapters.first.text'),
        },
        {
          label: t('courseLanding.reviews.exampleReview.chapters.second.label'),
          text: t('courseLanding.reviews.exampleReview.chapters.second.text'),
        },
      ],
      picture: collectSrcSet([
        ReviewPicSmallAvif,
        ReviewPicSmallWebp,
        ReviewPicSmallPng,
      ]),
    },
  },
  {
    data: {
      username: t('courseLanding.reviews.reviewUserName'),
      userPosition: t('courseLanding.reviews.reviewUserPosition'),
      date: '22.02.2023',
      chapters: [
        {
          label: t('courseLanding.reviews.exampleReview.chapters.first.label'),
          text: t('courseLanding.reviews.exampleReview.chapters.first.text'),
        },
        {
          label: t('courseLanding.reviews.exampleReview.chapters.second.label'),
          text: t('courseLanding.reviews.exampleReview.chapters.second.text'),
        },
      ],
      picture: collectSrcSet([
        ReviewPicBigAvif,
        ReviewPicBigWebp,
        ReviewPicBigPng,
      ]),
    },
  },
]);

const slidePrev = () => {
  slider.value.prev();
};

const slideNext = () => {
  slider.value.next();
};
</script>

<style lang="scss" module>
.studentsReviews {
  height: 1065px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

.reviewCardsWrapper {
  width: 100%;
  margin-top: 80px;
}
</style>
