<template>
  <div :class="$style.studentsReviews">
    <header :class="$style.header">
      <UiTypography
        :state="['accent1', 'bold']"
        size="massive2"
      >
        {{ t('courseLanding.reviews.heading') }}
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
    <div :class="$style.reviewCardsWrapper">
      <UiSlider
        ref="slider"
        :class="$style.slider"
        :slides="slides"
        :gap="20"
        :slides-per-view="3"
      >
        <template #slide="{ slideData }">
          <ReviewCard :data="slideData" />
        </template>
      </UiSlider>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed, ref } from 'vue';
import { UiIcon } from '@terminal/uikit/components/icon';
import { UiTypography } from '@terminal/uikit/components/typography';
import { UiSlider } from '@terminal/uikit/components/slider';
import { collectSrcSet } from '@/utils/dom';
import ReviewCard from './reviewCard/ReviewCard.vue';

import ReviewImg1Png from './assets/review1.png';
import ReviewImg2Png from './assets/review2.png';
import ReviewImg3Png from './assets/review3.png';
import ReviewImg4Png from './assets/review4.jpg';
import ReviewImg5Png from './assets/review5.png';
import ReviewImg6Png from './assets/review6.png';
import ReviewImg7Png from './assets/review7.png';

const { t } = useI18n();

const slider = ref();

const slides = computed(() => [
  {
    data: {
      picture: collectSrcSet([
        ReviewImg1Png,
      ]),
      date: '22.02.2023',
      text: t('courseLanding.studentsReviews.0'),
    },
  },
  {
    data: {
      picture: collectSrcSet([
        ReviewImg2Png,
      ]),
      date: '22.02.2023',
      text: t('courseLanding.studentsReviews.1'),
    },
  },
  {
    data: {
      picture: collectSrcSet([
        ReviewImg3Png,
      ]),
      date: '22.02.2023',
      text: t('courseLanding.studentsReviews.2'),
    },
  },
  {
    data: {
      picture: collectSrcSet([
        ReviewImg4Png,
      ]),
      date: '22.02.2023',
      text: t('courseLanding.studentsReviews.3'),
    },
  },
  {
    data: {
      picture: collectSrcSet([
        ReviewImg5Png,
      ]),
      date: '22.02.2023',
      text: t('courseLanding.studentsReviews.4'),
    },
  },
  {
    data: {
      picture: collectSrcSet([
        ReviewImg6Png,
      ]),
      date: '22.02.2023',
      text: t('courseLanding.studentsReviews.5'),
    },
  },
  {
    data: {
      picture: collectSrcSet([
        ReviewImg7Png,
      ]),
      date: '22.02.2023',
      text: t('courseLanding.studentsReviews.6'),
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
  padding: 240px 0 140px 0;
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

.slider {
  padding: 0 100px;
}
</style>
