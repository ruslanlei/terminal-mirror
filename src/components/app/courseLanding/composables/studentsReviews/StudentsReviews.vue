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
import Slider from '@/components/core/slider/Slider.vue';
import { computed, ref } from 'vue';
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
