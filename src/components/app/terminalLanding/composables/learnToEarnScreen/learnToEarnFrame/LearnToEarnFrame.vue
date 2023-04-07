<template>
  <div ref="root">
    <Card
      :state="isActive ? 'background3' : 'background2'"
      style="width: 700px"
      :class="[$style.learnToEarnFrame, isActive && $style.active]"
    >
      <div :class="$style.content">
        <Typography
          size="h1"
          :state="[
            'semiBold',
            isActive
              ? 'accent1'
              : 'accent2'
          ]"
        >
          {{ frame.label }}
        </Typography>
        <div
          :style="computedDescriptionContainerStyles"
          :class="$style.descriptionContainer"
        >
          <div
            ref="descriptionContainer"
            :class="$style.descriptionWrapper"
          >
            <Typography
              size="title1"
              :state="['accent2']"
              :class="$style.description"
            >
              {{ frame.description }}
            </Typography>
          </div>
        </div>
      </div>
      <div :class="$style.progressBarContainer">
        <div
          :class="$style.progressBar"
          :style="computedProgressBarStyles"
        />
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/core/card/Card.vue';
import {
  computed, onBeforeUnmount, onMounted, ref, watch,
} from 'vue';
import { roundToDecimalPoint } from '@/utils/number';
import Typography from '@/components/app/typography/Typography.vue';
import { getRect } from '@/utils/dom';
import { useEnvironmentObserver } from '@/hooks/useEnvironmentObserver';
import { toCssPixelValue } from '@/utils/style';
import {
  LearnToEarnFrameProps,
} from './index';

const props = defineProps<LearnToEarnFrameProps>();

const computedProgressBarStyles = computed(() => ({
  transform: `translateX(${roundToDecimalPoint(2, props.progress)}%)`,
}));

const descriptionContainer = ref<HTMLElement>();
const root = ref<HTMLElement>();

const computedDescriptionContainerStyles = ref({
  height: toCssPixelValue(0),
});

const calculateDescriptionContainerStyles = () => {
  if (!descriptionContainer.value) return;

  if (!props.isActive) {
    computedDescriptionContainerStyles.value.height = toCssPixelValue(0);
    return;
  }

  const {
    height,
  } = getRect(descriptionContainer.value);

  computedDescriptionContainerStyles.value.height = toCssPixelValue(height);
};

watch(() => props.isActive, calculateDescriptionContainerStyles);
const {
  setListeners,
} = useEnvironmentObserver(root, calculateDescriptionContainerStyles);
onMounted(setListeners);
onBeforeUnmount(calculateDescriptionContainerStyles);

onMounted(calculateDescriptionContainerStyles);
</script>

<style lang="scss" module>
.learnToEarnFrame {
  border-radius: 15px;
  overflow: hidden;
  transition: border-radius 160ms;
  cursor: pointer;
  .progressBarContainer {
    height: 0;
  }
  .descriptionWrapper {
    opacity: 0;
  }
  &.active {
    border-radius: 15px 15px 6px 6px;
    .progressBarContainer {
      height: 6px;
    }
    .descriptionWrapper {
      opacity: 1;
    }
  }
}

.content {
  padding: 40px;
}

.descriptionContainer {
  position: relative;
  transition: height 200ms;
}

.descriptionWrapper {
  padding-top: 15px;
  position: absolute;
  top: 0;
  width: 100%;
  transition: opacity 160ms;
}

.description {
  line-height: 170%;
}

.progressBarContainer {
  width: 100%;
  height: 6px;
  background-color: rgb(var(--color-background-2));
  position: relative;
  transition: height 100ms;
}

.progressBar {
  position: absolute;
  left: -100%;
  background: var(--color-main-gradient);
  height: 100%;
  width: 100%;
  border-radius: 0 3px 3px 0;
}
</style>
