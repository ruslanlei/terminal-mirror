<template>
  <div :class="[$style.pairStats, isHighlight && $style.highlight]">
    <CoinLogo
      state="square"
      :currency="stats.currency"
    />
    <div :class="$style.stats">
      <PairStatsColumn
        v-for="(statsColumn, index) in computedPairStats"
        :key="index"
        :column-data="statsColumn"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  nextTick,
  watch,
} from 'vue';
import { useI18n } from 'vue-i18n';
import CoinLogo from '@/components/core/coinLogo/CoinLogo.vue';
import PairStatsColumn from '@/components/app/pairStatsColumn/PairStatsColumn.vue';
import { PairStat } from '@/components/app/pairStatsColumn';
import { PairStatsProps } from './index';

const props = defineProps<PairStatsProps>();

const { t } = useI18n();

const computedPairStats = computed<Array<PairStat[]>>(() => [
  [
    {
      label: t('pairStats.price'),
      value: props.stats.price,
      valueState: 'positive',
    },
    {
      label: t('pairStats.amount'),
      value: props.stats.amount,
      valueState: 'default',
    },
  ],
  [
    {
      label: t('pairStats.change'),
      value: props.stats.change,
      valueState: 'negative',
    },
    {
      label: t('pairStats.in24hours'),
      value: props.stats.changePercents,
      valueState: 'default',
    },
  ],
  [
    {
      label: t('pairStats.max'),
      value: props.stats.max,
      valueState: 'default',
    },
    {
      label: t('pairStats.min'),
      value: props.stats.min,
      valueState: 'default',
    },
  ],
]);

const isHighlight = ref(false);

watch(() => props.stats.currency, () => {
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
