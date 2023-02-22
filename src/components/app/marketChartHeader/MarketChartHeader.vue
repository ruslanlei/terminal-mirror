<template>
  <div :class="$style.marketChartHeader">
    <Typography
      size="title1"
      :state="['accent1', 'bold']"
    >
      {{ pairLabel }}
    </Typography>
    <Divider type="vertical" />
    <FavoritesButton v-model="localIsFavoritesActive" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import Typography from '@/components/app/typography/Typography.vue';
import { useMarketStore } from '@/stores/market';
import Divider from '@/components/core/divider/Divider.vue';
import FavoritesButton from '@/components/core/favoritesButton/FavoritesButton.vue';
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
