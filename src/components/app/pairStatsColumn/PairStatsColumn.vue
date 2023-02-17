<template>
  <div :class="$style.pairStatsColumn">
    <div :class="$style.column">
      <div
        v-for="(pairStat, index) in columnData"
        :key="index"
        :class="$style.label"
      >
        {{ pairStat.label }}
      </div>
    </div>
    <Divider />
    <div :class="$style.column">
      <div
        v-for="(pairStat, index) in columnData"
        :key="index"
        :class="[
          $style.value,
          $style[pairStat.valueState],
        ]"
      >
        <AnimatedText
          v-if="pairStat.value"
          :text="pairStat.value"
          animation-type="verticalAuto"
        />
        <Typography v-else>
          {{ '-' }}
        </Typography>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Divider from '@/components/core/divider/Divider.vue';
import AnimatedText from '@/components/core/animatedText/AnimatedText.vue';
import Typography from '@/components/app/typography/Typography.vue';
import { PairStatsColumnProps } from './index';

const props = defineProps<PairStatsColumnProps>();
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.pairStatsColumn {
  display: flex;
  gap: 10px;
}

.label {
  text-align: right;
  @include title4;
  color: rgb(var(--color-accent-2));
}

.column {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 18px;
  align-items: center;
  align-content: center;
}

.value {
  color: rgb(var(--color-accent-2));
  @include title3;
  font-weight: 600;
  &.positive {
    color: rgba(var(--color-success));
  }
  &.negative {
    color: rgba(var(--color-danger));
  }
}
</style>
