<template>
  <div :class="$style.learnToEarnFrames">
    <LearnToEarnFrame
      v-for="(frame, index) in computedFrames"
      :key="index"
      :frame="frame"
      :is-active="frame.isActive"
      :progress="frame.isActive ? progress : 0"
      @click="onCardSelect(index)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import LearnToEarnFrame
  from '@/components/app/terminalLanding/composables/learnToEarnScreen/learnToEarnFrame/LearnToEarnFrame.vue';
import { ILearnToEarnFrame } from '@/components/app/terminalLanding/composables/learnToEarnScreen/learnToEarnFrame';
import { useAnimation } from '@/hooks/useAnimation';
import {
  LearnToEarnFramesProps,
} from './index';

const props = defineProps<LearnToEarnFramesProps>();

const progress = ref(0);

const duration = ref(11000);

const activeFrameIndex = ref(0);

type IFrame = (ILearnToEarnFrame & { isActive: boolean });

const computedFrames = computed<IFrame[]>(() => props.frames.map((frame, index) => ({
  ...frame,
  isActive: activeFrameIndex.value === index,
})));

const {
  init,
  play,
  restart,
} = useAnimation(() => ({
  targets: progress,
  value: [0, 100],
  loop: true,
  easing: 'linear',
  duration: duration.value,
  loopComplete: () => {
    activeFrameIndex.value = activeFrameIndex.value < (props.frames.length - 1)
      ? activeFrameIndex.value + 1
      : 0;
  },
}));

const onCardSelect = (
  index: number,
) => {
  activeFrameIndex.value = index;
  restart();
};

onMounted(() => {
  init();
  play();
});
</script>

<style lang="scss" module>
.learnToEarnFrames {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
