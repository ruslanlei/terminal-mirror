<template>
  <div :class="$style.marketChartHeader">
    <Typography
      size="title1"
      :state="['accent1', 'bold']"
    >
      {{ pairLabel }}
    </Typography>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import Typography from '@/components/app/typography/Typography.vue';
import { useMarketStore } from '@/stores/market';
import { computed } from 'vue';

const { t } = useI18n();

const marketStore = useMarketStore();
const {
  activePairData,
} = storeToRefs(marketStore);

const pairLabel = computed(() => t('common.slash', {
  value1: activePairData.value?.base,
  value2: activePairData.value?.quote,
}));
</script>

<style lang="scss" module>
.marketChartHeader {
  display: flex;
  align-items: center;
}
</style>
