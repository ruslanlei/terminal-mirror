<template>
  <Swiper
    :class="$style.slider"
    :slides-per-view="slidesPerView"
    :space-between="gap"
    :centered-slides="true"
    @swiper="setSwiper"
  >
    <SwiperSlide
      v-for="(slide, index) in slides"
      :key="index"
    >
      <slot
        name="slide"
        :slide-data="slide.data"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { SliderProps } from './index';

const props = withDefaults(
  defineProps<SliderProps>(),
  {
    slidesPerView: 3,
  },
);

const swiper = ref();

const setSwiper = (swiperInstance) => {
  swiper.value = swiperInstance;
};
const prev = () => swiper.value.slidePrev();
const next = () => swiper.value.slideNext();

const isBeginning = computed(() => swiper.value.isBeginning);
const isEnd = computed(() => swiper.value.isEnd);

defineExpose({
  prev,
  next,
  isBeginning,
  isEnd,
});
</script>

<style lang="scss" module>
.slider {
  width: 100%;
}
</style>
