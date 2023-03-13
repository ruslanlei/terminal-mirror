<template>
  <div
    ref="root"
    :class="$style.whyToTrainScreen"
  >
    <Typography
      :state="['accent1', 'bold']"
      size="massive2"
    >
      {{ t('terminalLanding.whyToTrain.label') }}
    </Typography>
    <div :class="$style.cardsContainer">
      <div
        :class="$style.progress"
        :style="computedProgressBarStyles"
      />
      <WhyToTrainCardRow
        v-for="(cardsRow, cardsRowIndex) in cardRows"
        :key="cardsRowIndex"
        :progress="calculateRowProgress(
          multiply(cardsRowIndex, 15),
        )"
        :cards="cardsRow"
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

const cardRows = computed<[IWhyToTrainCard, IWhyToTrainCard][]>(() => [
  [
    {
      index: 1,
      text: t('terminalLanding.whyToTrain.cards.0'),
    },
    {
      index: 2,
      text: t('terminalLanding.whyToTrain.cards.1'),
    },
  ],
  [
    {
      index: 3,
      text: t('terminalLanding.whyToTrain.cards.2'),
    },
    {
      index: 4,
      text: t('terminalLanding.whyToTrain.cards.3'),
    },
  ],
  [
    {
      index: 5,
      text: t('terminalLanding.whyToTrain.cards.4'),
    },
    {
      index: 6,
      text: t('terminalLanding.whyToTrain.cards.5'),
    },
  ],
  [
    {
      index: 7,
      text: t('terminalLanding.whyToTrain.cards.6'),
    },
    {
      index: 8,
      text: t('terminalLanding.whyToTrain.cards.7'),
    },
  ],
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
  startPercent: number,
) => multiply(subtract(commonAnimationProgress.value, startPercent), cardRows.value.length);

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
  margin-top: 80px;
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
