<template>
  <div
    ref="root"
    :class="$style.learnToEarnFrames"
  >
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
import {
  ref,
  computed,
  onBeforeUnmount,
  onMounted,
} from 'vue';
import LearnToEarnFrame
  from '@/components/app/terminalLanding/composables/learnToEarnScreen/learnToEarnFrame/LearnToEarnFrame.vue';
import { ILearnToEarnFrame } from '@/components/app/terminalLanding/composables/learnToEarnScreen/learnToEarnFrame';
import { useAnimation } from '@/hooks/useAnimation';
import { useIntersectionObserver } from '@vueuse/core';
import { useEnvironmentObserver } from '@/hooks/useEnvironmentObserver';
import { useLocalValue } from '@/hooks/useLocalValue';
import {
  LearnToEarnFramesEmits,
  LearnToEarnFramesProps,
} from './index';

const props = defineProps<LearnToEarnFramesProps>();

const emit = defineEmits<LearnToEarnFramesEmits>();

const root = ref<HTMLElement>();

const progress = ref(0);

const duration = ref(12000);

const activeFrameIndex = useLocalValue<number>(props, emit, 'modelValue');

type IFrame = (ILearnToEarnFrame & { isActive: boolean });

const computedFrames = computed<IFrame[]>(() => props.frames.map((frame, index) => ({
  ...frame,
  isActive: activeFrameIndex.value === index,
})));

const {
  animation,
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

const { stop } = useIntersectionObserver(
  root,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      animation.value?.play();
    } else {
      animation.value?.pause();
    }
  },
);

onBeforeUnmount(stop);

const timer = ref();

const {
  setListeners,
  removeListeners,
} = useEnvironmentObserver(root, () => {
  clearTimeout(timer.value);
  animation.value?.pause();
  timer.value = setTimeout(() => {
    animation.value?.play();
  }, 100);
}, true, false);

onMounted(setListeners);
onBeforeUnmount(removeListeners);
</script>

<style lang="scss" module>
.learnToEarnFrames {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
