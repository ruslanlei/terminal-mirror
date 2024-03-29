<template>
  <div :class="$style.whyToTrainCardRow">
    <div
      ref="cardLeftContainer"
      :class="$style.cardWrapper"
    >
      <WhyToTrainCard
        :card="cardLeft"
        :class="$style.card"
      />
    </div>
    <div
      ref="dot"
      :class="$style.dot"
    />
    <div
      ref="cardRightContainer"
      :class="$style.cardWrapper"
    >
      <WhyToTrainCard
        :card="cardRight"
        :class="$style.card"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
  watch,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { divide, multiply } from '@terminal/common/utils/number';
import { useAnimation } from '@terminal/uikit/hooks/useAnimation';
import WhyToTrainCard from '../whyToTrainCard/WhyToTrainCard.vue';
import { WhyToTrainCardRowProps } from './index';

const props = defineProps<WhyToTrainCardRowProps>();

const { t } = useI18n();

const cardLeft = computed(() => props.cards[0]);
const cardRight = computed(() => props.cards[1]);

const cardLeftContainer = ref();
const dot = ref();
const cardRightContainer = ref();

const {
  animation: dotAnimation,
  init: initDotAnimation,
  setProgress: setProgressOfDotAnimation,
} = useAnimation(() => ({
  targets: dot.value,
  scale: [0, 1],
  opacity: [0, 1],
}));
const {
  animation: leftCardAnimation,
  init: initLeftCardAnimation,
  setProgress: setProgressOfLeftCardAnimation,
} = useAnimation(() => ({
  targets: cardLeftContainer.value,
  translateX: [-200, 0],
  rotateY: [50, 0],
  opacity: [0, 1],
  easing: 'easeOutCirc',
}));
const {
  animation: rightCardAnimation,
  init: initRightCardAnimation,
  setProgress: setProgressOfRightCardAnimation,
} = useAnimation(() => ({
  targets: cardRightContainer.value,
  translateX: [200, 0],
  rotateY: [-50, 0],
  opacity: [0, 1],
  easing: 'easeOutCirc',
}));
onMounted(() => {
  initLeftCardAnimation();
  initDotAnimation();
  initRightCardAnimation();
});

watch(() => props.progress, () => {
  if (!leftCardAnimation.value || !rightCardAnimation.value || !dotAnimation.value) return;

  setProgressOfLeftCardAnimation(
    multiply(leftCardAnimation.value.duration, divide(props.progress, 100)),
  );

  setProgressOfDotAnimation(
    multiply(dotAnimation.value.duration, divide(props.progress, 100)),
  );

  setProgressOfRightCardAnimation(
    multiply(rightCardAnimation.value.duration, divide(props.progress, 100)),
  );
}, { immediate: true });
</script>

<style lang="scss" module>
.whyToTrainCardRow {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 25px 1fr;
  gap: 67px;
  position: relative;
  transform-style: preserve-3d;
  perspective: 1600px;
}

.dot {
  align-self: center;
  width: 25px;
  min-width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 6px solid rgb(var(--color-accent-1));
  background: var(--color-main-gradient);
}

.cardWrapper {
  max-width: 540px;
  width: 100%;
  height: 100%;
}

.card {
  height: 100%;
}
</style>
