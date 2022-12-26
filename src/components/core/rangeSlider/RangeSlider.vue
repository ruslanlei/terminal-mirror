<template>
  <div
    ref="slider"
    :class="$style.rangeSlider"
    @mousedown.prevent="onMouseDown"
  >
    <div :class="$style.track" />
    <div
      :style="computedProgressStyles"
      :class="[$style.progress, !isDragging && $style.animated]"
    />
    <div
      :style="computedDraggingPointStyles"
      :class="[$style.pointer, !isDragging && $style.animated]"
    />
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
} from 'vue';
import { useEnvironmentObserver } from '@/hooks/useEnvironmentObserver';
import { useLocalValue } from '@/hooks/useLocalValue';
import { RangeSliderEmits, RangeSliderProps } from './index';

const props = withDefaults(
  defineProps<RangeSliderProps>(),
  {
    min: 0,
    max: 100,
  },
);

const emit = defineEmits<RangeSliderEmits>();

// slider
const slider = ref();
const sliderSizing = ref({
  beginningLeft: 0,
  endLeft: 0,
  width: 0,
});
const computedStepSize = computed(() => sliderSizing.value.width / props.max);
const calculateSliderSizing = () => {
  const {
    left,
    width,
  } = slider.value.getBoundingClientRect();

  sliderSizing.value.beginningLeft = left;
  sliderSizing.value.endLeft = left + width;
  sliderSizing.value.width = width;
};

// calculate value
const localValue = useLocalValue<number>(props, emit, 'modelValue');
const calculateValueByPosition = (pointerLeft: number) => {
  localValue.value = Math.round(pointerLeft / computedStepSize.value);
};
const calculatePositionByValue = () => localValue.value * computedStepSize.value;

// dragging point
const activePointLeft = ref(0);
const computedDraggingPointStyles = computed(() => ({
  transform: `translateX(${activePointLeft.value}px)`,
}));
const calculateActivePointLeftByValue = () => {
  activePointLeft.value = calculatePositionByValue();
};
const isDragging = ref(false);
const onMouseMove = (event: MouseEvent) => {
  // calculate left relative to container
  const pointLeft = event.clientX - sliderSizing.value.beginningLeft;
  let normalizedPointLeft = pointLeft;
  if (pointLeft < 0) {
    normalizedPointLeft = 0;
  }
  const distanceToEndOfSlider = sliderSizing.value.endLeft - event.clientX;
  if (distanceToEndOfSlider <= 0) {
    normalizedPointLeft = sliderSizing.value.endLeft - sliderSizing.value.beginningLeft;
  }

  activePointLeft.value = normalizedPointLeft;

  calculateValueByPosition(activePointLeft.value);
};
const onMouseUp = () => {
  isDragging.value = false;
  calculateActivePointLeftByValue();
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('mouseup', onMouseUp);
};
const onMouseDown = (event: MouseEvent) => {
  isDragging.value = true;
  onMouseMove(event);
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
};
onMounted(calculateActivePointLeftByValue);

// progress
const computedProgressStyles = computed(() => ({
  width: `${activePointLeft.value}px`,
}));

// common
const {
  setListeners,
  removeListeners,
} = useEnvironmentObserver(() => {
  calculateSliderSizing();
  if (!isDragging.value) {
    calculateActivePointLeftByValue();
  }
});
onMounted(() => {
  calculateSliderSizing();
  setListeners();
});
onBeforeUnmount(removeListeners);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.rangeSlider {
  height: 14px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
}

.track {
  height: 6px;
  background-color: rgb(var(--color-background-1));
  width: 100%;
  border-radius: 10px;
}

.progress {
  height: 6px;
  background: mainGradient(180deg);
  position: absolute;
  left: 0;
  border-radius: 10px;
  &.animated {
    transition: width 200ms;
  }
}

.pointer {
  width: 1px;
  height: 14px;
  background-color: red;
  position: absolute;
  left: 0;
  cursor: pointer;
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 14px;
    height: 14px;
    background-color: rgb(var(--color-accent-1));
    border-radius: 50%;
    transform: translateX(-50%);
  }
  &.animated {
    transition: transform 200ms;
  }
}
</style>
