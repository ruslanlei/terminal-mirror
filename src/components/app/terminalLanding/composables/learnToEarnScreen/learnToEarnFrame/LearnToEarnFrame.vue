<template>
  <Card
    :state="isActive ? 'background3' : 'background2'"
    style="width: 700px"
    :class="[$style.learnToEarnFrame, isActive && $style.active]"
  >
    <div :class="$style.content">
      <Typography
        size="title1"
        :state="[
          'semiBold',
          isActive
            ? 'accent1'
            : 'accent2'
        ]"
      >
        {{ frame.label }}
      </Typography>
    </div>
    <div :class="$style.progressBarContainer">
      <div
        :class="$style.progressBar"
        :style="computedProgressBarStyles"
      />
    </div>
  </Card>
</template>

<script setup lang="ts">
import Card from '@/components/core/card/Card.vue';
import { computed } from 'vue';
import { roundToDecimalPoint } from '@/helpers/number';
import Typography from '@/components/app/typography/Typography.vue';
import {
  LearnToEarnFrameProps,
} from './index';

const props = defineProps<LearnToEarnFrameProps>();

const computedProgressBarStyles = computed(() => ({
  transform: `translateX(${roundToDecimalPoint(2, props.progress)}%)`,
}));
</script>

<style lang="scss" module>
.learnToEarnFrame {
  border-radius: 15px;
  overflow: hidden;
  transition: border-radius 160ms;
  .progressBarContainer {
    height: 0;
  }
  &.active {
    border-radius: 15px 15px 6px 6px;
    .progressBarContainer {
      height: 6px;
    }
  }
}

.content {
  padding: 40px;
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
