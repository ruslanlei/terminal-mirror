<template>
  <div :class="$style.learnToEarnFrames">
    <LearnToEarnFrame
      v-for="(frame, index) in frames"
      :key="index"
      :frame="frame"
      :is-active="index === activeFrameIndex"
      :progress="index === activeFrameIndex ? progress : 0"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import LearnToEarnFrame
  from '@/components/app/terminalLanding/composables/learnToEarnScreen/learnToEarnFrame/LearnToEarnFrame.vue';
import { createAnimation } from '@/utils/animation';
import {
  LearnToEarnFramesProps,
} from './index';

const props = defineProps<LearnToEarnFramesProps>();

const progress = ref(0);

const duration = ref(11000);

const activeFrameIndex = ref(0);

const {
  init,
  play,
} = createAnimation(() => ({
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

onMounted(() => {
  init();
  play();
});
</script>

<style lang="scss" module>
.learnToEarnFrames {}
</style>
