<template>
  <div :class="[$style.pairStats, isHighlight && $style.highlight]">
    <CoinLogo
      state="square"
      :coin="coin"
    />
    <div :class="$style.stats">
      <PairStatsColumn
        v-for="(statsColumn, index) in stats"
        :key="index"
        :column-data="statsColumn"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  nextTick,
  watch,
} from 'vue';
import CoinLogo from '@/components/coinLogo/CoinLogo.vue';
import PairStatsColumn from '@/components/pairStatsColumn/PairStatsColumn.vue';
import { PairStatsProps } from './index';

const props = defineProps<PairStatsProps>();

const isHighlight = ref(false);

watch(() => props.coin, () => {
  if (isHighlight.value) {
    isHighlight.value = false;
    nextTick(() => {
      isHighlight.value = true;
    });
  } else {
    isHighlight.value = true;
  }

  setTimeout(() => {
    isHighlight.value = false;
  }, 600);
});
</script>

<style lang="scss" module>
.pairStats {
  display: flex;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    inset: -8px;
    background-color: rgb(var(--color-background-2));
    z-index: -1;
    border-radius: 10px;
    opacity: 0;
    transform: scale(0.7);
    transition: opacity 180ms, transform 180ms;
    pointer-events: none;
  }
  &.highlight {
    &::before {
      opacity: 1;
      transform: scale(1);
    }
  }
}

.stats {
  display: flex;
  gap: 20px;
  margin-left: 20px;
}
</style>
