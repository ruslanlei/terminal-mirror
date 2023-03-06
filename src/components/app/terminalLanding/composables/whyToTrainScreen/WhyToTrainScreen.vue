<template>
  <div
    ref="root"
    :class="$style.whyToTrainScreen"
  >
    <Typography>
      {{ t('') }}
    </Typography>
    <div :class="$style.cardsContainer">
      <div
        :class="$style.progress"
        :style="computedProgressBarStyles"
      />
      <WhyToTrainCardRow
        :progress="firstRowProgress"
        :cards="cards"
        :class="$style.cardRow"
      />
      <WhyToTrainCardRow
        :progress="secondRowProgress"
        :cards="cards"
        :class="$style.cardRow"
      />
      <WhyToTrainCardRow
        :progress="thirdRowProgress"
        :cards="cards"
        :class="$style.cardRow"
      />
      <WhyToTrainCardRow
        :progress="fourthRowProgress"
        :cards="cards"
        :class="$style.cardRow"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { IWhyToTrainCard } from '@/components/app/terminalLanding/composables/whyToTrainScreen/whyToTrainCard';
import WhyToTrainCardRow
  from '@/components/app/terminalLanding/composables/whyToTrainScreen/whyToTrainCardRow/WhyToTrainCardRow.vue';
import { useElementBounding, useWindowSize } from '@vueuse/core';
import {
  add, divide, multiply, subtract,
} from '@/helpers/number';
import { min } from '@/utils/number';
import { compose } from '@/utils/fp';
import { toCssPercentValue } from '@/utils/dom';
import Typography from '@/components/app/typography/Typography.vue';

const { t } = useI18n();

const cards = computed<IWhyToTrainCard[]>(() => [
  {
    index: 1,
    text: t('terminalLanding.whyToTrain.cards.0'),
  },
  {
    index: 2,
    text: t('terminalLanding.whyToTrain.cards.1'),
  },
]);

const {
  height,
} = useWindowSize();

const onePercentOfWindowSize = computed(() => divide(height.value, 100));

const root = ref<HTMLElement>();
const {
  y: rootElementTop,
  height: rootElementHeight,
} = useElementBounding(root);

const onePercentOfRootElementHeight = computed(() => divide(rootElementHeight.value, 100));

const calculatePercentOfScroll = (
  shift = 0,
) => divide(
  add(-rootElementTop.value, shift),
  onePercentOfRootElementHeight.value,
);

const commonAnimationProgress = computed(() => calculatePercentOfScroll(
  multiply(onePercentOfWindowSize.value, 40),
));

const calculateRowProgress = (
  progressReducer: number,
  startPercent: number,
  progressPercent: number,
) => multiply(subtract(progressPercent, startPercent), progressReducer);

const REDUCE_BY = 4;

const firstRowProgress = computed(() => calculateRowProgress(
  REDUCE_BY,
  0,
  commonAnimationProgress.value,
));

const secondRowProgress = computed(() => calculateRowProgress(
  REDUCE_BY,
  15,
  commonAnimationProgress.value,
));

const thirdRowProgress = computed(() => calculateRowProgress(
  REDUCE_BY,
  30,
  commonAnimationProgress.value,
));

const fourthRowProgress = computed(() => calculateRowProgress(
  REDUCE_BY,
  45,
  commonAnimationProgress.value,
));

const scrollProgress = computed(() => calculatePercentOfScroll(
  multiply(onePercentOfWindowSize.value, 50),
));

const computedProgressBarStyles = computed(() => ({
  height: compose(
    toCssPercentValue,
    min(100),
  )(scrollProgress.value),
}));
</script>

<style lang="scss" module>
.whyToTrainScreen {
  padding-top: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.cardRow {
  &:not(:first-child) {
    margin-top: 70px;
  }
}

.cardsContainer {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.progress {
  position: absolute;
  top: 0;
  width: 8px;
  height: 100%;
  background-color: rgb(var(--color-background-3));
  border-radius: 8px;
}
</style>
