<template>
  <UiCard :class="$style.favoritesList">
    <header :class="$style.header">
      <UiTypography
        size="title5"
        :state="['accent1', 'alignCenter']"
      >
        {{ t('favorites.label') }}
      </UiTypography>
    </header>
    <UiSelector
      v-model="localActivePair"
      :thickening="0"
      :state="['vertical', 'blueGlassVerticalRight', 'specialFavoritesSize']"
      :options="options"
      :class="$style.list"
    >
      <template #option="{ option, activeOption }">
        <FavoritesListItem
          :last24-hours-percent-change="option.percentChange"
          :pair-data="option.pairData"
          :is-active="activeOption === option.value"
        />
      </template>
    </UiSelector>
    <UiButton
      :state="null"
      :size="null"
      :class="$style.closeButton"
      @click="close"
    >
      <UiTypography
        size="title5"
        :state="['accent2', 'alignCenter']"
      >
        {{ t('common.hide') }}
      </UiTypography>
    </UiButton>
  </UiCard>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiButton } from '@terminal/uikit/components/button';
import { UiCard } from '@terminal/uikit/components/card';
import { UiSelector } from '@terminal/uikit/components/selector';
import { UiTypography } from '@terminal/uikit/components/typography';

import { useMarketStore } from '@/stores/market';
import { Pair } from '@/api/types/pair';
import { FavoritesListEmits } from './index';
import FavoritesListItem from '@/components/app/favoritesList/favoritesListItem/FavoritesListItem.vue';
import { useChartDataStore } from '@/stores/chartData';
import { FavoritePair } from '@/api/endpoints/profile/getFavorites';

const emit = defineEmits<FavoritesListEmits>();

const close = () => {
  emit('hide');
};

const { t } = useI18n();

const marketStore = useMarketStore();

const localActivePair = computed({
  get: () => marketStore.activePair,
  set: (
    pairId: Pair['id'],
  ) => {
    marketStore.setPair(pairId);
  },
});

const chartDataStore = useChartDataStore();

const options = computed(() => marketStore.favoritePairs.map((
  favoritePair: FavoritePair,
) => ({
  label: '',
  value: favoritePair.pair,
  pairData: marketStore.pairsMap[favoritePair.pair],
  percentChange: chartDataStore.get24HoursPercentChangeByPairId(favoritePair.pair),
})));
</script>

<style lang="scss" module>
.favoritesList {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header, .closeButton {
  width: 100%;
  position: sticky;
  background-color: rgb(var(--color-background-2));
  z-index: 10;
  padding: 10px 0;
}

.list {
  flex-grow: 1;
}

.header {
  top: 0;
  border-bottom: 1px solid rgb(var(--color-accent-3));
}

.closeButton {
  bottom: 0;
  border-top: 1px solid rgb(var(--color-accent-3));
  cursor: pointer;
}
</style>
