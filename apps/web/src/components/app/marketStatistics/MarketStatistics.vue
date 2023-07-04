<template>
  <Transition
    name="marketStatisticsChapterTransition"
    mode="out-in"
  >
    <MarketCommonStatistics
      v-if="isCommonStatisticsVisible"
      :key="activeChapter"
    />
    <MarketOrderStatistics
      v-else-if="isOrderStatisticsVisible"
      :key="activeChapter"
    />
  </Transition>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useLocalValue } from '@terminal/uikit/hooks/useLocalValue';
import { useMarketStore } from '@/stores/market';
import MarketCommonStatistics from '@/components/app/marketCommonStatistics/MarketCommonStatistics.vue';
import MarketOrderStatistics from '@/components/app/marketOrdersStatistics/MarketOrderStatistics.vue';
import { isEqual } from '@terminal/common/utils/boolean';
import { MarketStatisticsEmits, MarketStatisticsProps } from './index';

const props = withDefaults(
  defineProps<MarketStatisticsProps>(),
  {
    activeChapter: 'common',
  },
);

const emit = defineEmits<MarketStatisticsEmits>();

const localActiveChapter = useLocalValue(props, emit, 'activeChapter');

const isCommonStatisticsVisible = computed(() => (
  isEqual(localActiveChapter.value, 'common')
));

const isOrderStatisticsVisible = computed(() => (
  isEqual(localActiveChapter.value, 'orders')
));

const marketStore = useMarketStore();
if (marketStore.isClosedOrdersFetched) {
  // fetch on the background
  marketStore.getClosedorderList();
} else {
  await marketStore.getClosedorderList();
}
</script>

<style lang="scss">
.marketStatisticsChapterTransition {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.2s, transform 0.2s;
  }

  &-enter-from {
    transform: translateY(-60px);
    opacity: 0;
  }
  &-leave-to {
    transform: translateY(60px);
    opacity: 0;
  }
}
</style>
