<template>
  <div :class="$style.marketChartHeader">
    <UiTypography
      size="title1"
      :state="['accent1', 'bold']"
    >
      {{ pairLabel }}
    </UiTypography>
    <UiDivider type="vertical" />
    <UiFavoritesButton v-model="localIsFavoritesActive" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { UiTypography } from '@terminal/uikit/components/typography';
import { UiDivider } from '@terminal/uikit/components/divider';
import { UiFavoritesButton } from '@terminal/uikit/components/favoritesButton';
import { useMarketStore } from '@/stores/market';
import { MarketChartHeaderEmits, MarketChartHeaderProps } from '@/components/app/marketChartHeader/index';
import { useLocalValue } from '@/hooks/useLocalValue';

const props = defineProps<MarketChartHeaderProps>();

const emits = defineEmits<MarketChartHeaderEmits>();

const { t } = useI18n();

const marketStore = useMarketStore();
const {
  activePairData,
} = storeToRefs(marketStore);

const pairLabel = computed(() => t('common.slash', {
  value1: activePairData.value?.base,
  value2: activePairData.value?.quote,
}));

const localIsFavoritesActive = useLocalValue(props, emits, 'isFavoritesActive');
</script>

<style lang="scss" module>
.marketChartHeader {
  display: flex;
  align-items: center;
  gap: 20px;
  height: 34px;
}
</style>
