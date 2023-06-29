<template>
  <Table
    v-model:sort-by="sortBy"
    v-model:sort-direction="sortDirection"
    :columns="columns"
    :records="computedRecords"
    :state="state"
    :is-rows-clickable="true"
    appearance-animation-type="bubbling"
    :animation-delay="80"
    @record-click="onRecordClick"
  >
    <template
      #column(pairs)="{
        isSortedBy,
        sortDirection,
        label,
      }"
    >
      <div :class="$style.columnPairsLabel">
        <TrendingIcon
          :is-visible="isSortedBy"
          :direction="({ asc: 'up', desc: 'down' }[sortDirection])"
        />
        <div :class="$style.text">
          {{ label }}
        </div>
      </div>
    </template>
    <template #cell(common)="{ data: { isFavorite, pairId, base, quote } }">
      <button
        type="button"
        :class="$style.addToFavorites"
        @click.stop="onToggleFavorite(pairId)"
      >
        <Typography
          :state="isFavorite ? 'accent1' : 'accent2' "
          is-inline
        >
          <transition
            name="favoriteStarTransition"
            mode="out-in"
          >
            <Icon
              :key="isFavorite"
              :size="24"
              :icon="isFavorite ? 'starFilled' : 'star'"
            />
          </transition>
        </Typography>
      </button>
      <CoinLogo
        :coin="base"
        :class="$style.currencyLogo"
      />
      <div :class="$style.pairName">
        <div :class="$style.base">
          {{ base }}
        </div>
        <div :class="$style.quote">
          {{ quote }}
        </div>
      </div>
    </template>
    <template #cell(priceAndVolume)="{ data: { currentPrice, totalTrades } }">
      <div :class="$style.statsContainer">
        <div :class="$style.price">
          <template v-if="currentPrice">
            {{ currentPrice }}
          </template>
          <template v-else>
            <UiBadge
              :state="['skeleton', 'background4']"
              :size="null"
              :class="$style.currentPriceSkeleton"
            >
              .
            </UiBadge>
          </template>
        </div>
        <div :class="$style.volume">
          {{ totalTrades }}
        </div>
      </div>
    </template>

    <template #column(last24HoursPercentChange)>
      <i18n-t
        tag="span"
        keypath="pairs.table.last24HoursPercentChange.history"
      >
        <template #period>
          <Typography
            is-inline
            state="accent2"
          >
            {{ t('dateTime.shortHours', { hours: 24 }) }}
          </Typography>
        </template>
      </i18n-t>
    </template>
    <template #cell(last24HoursPercentChange)="{ data: value }">
      <UiBadge
        :state="[
          ...(value === null ? [
            'skeleton',
            'background4'
          ] : [
            isPositive(value)
              ? 'success'
              : 'danger'
          ])
        ]"
        :class="value === null && $style.skeletonBadge"
        size="sm"
      >
        {{ humanizePercents(value) }}
      </UiBadge>
    </template>
  </Table>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiBadge } from '@terminal/uikit/components/badge';
import Table from '@/components/core/table/Table.vue';
import TrendingIcon from '@/components/core/trendingIcon/TrendingIcon.vue';
import CoinLogo from '@/components/core/coinLogo/CoinLogo.vue';
import Icon from '@/components/core/icon/Icon.vue';
import { SortDirection } from '@/components/core/table';
import { humanizeNumber } from '@/utils/numberFormat';
import { Pair } from '@/api/types/pair';
import { useMarketStore } from '@/stores/market';
import Typography from '@/components/app/typography/Typography.vue';
import { useChartDataStore } from '@/stores/chartData';
import { isPositive } from '@/utils/number';
import { humanizePercents } from '@/helpers/math/percents';
import {
  PairsTableColumn, PairsTableEmits,
  PairsTableProps,
  PairsTableRecord,
} from './index';

const props = defineProps<PairsTableProps>();

const emit = defineEmits<PairsTableEmits>();

const { t } = useI18n();

const marketStore = useMarketStore();
const chartDataStore = useChartDataStore();

const columns = computed<PairsTableColumn[]>(() => [
  {
    label: t('pairs.table.pairs'),
    slug: 'common',
    sortable: true,
    size: 1,
  },
  {
    label: t('pairs.table.priceAndVolume'),
    slug: 'priceAndVolume',
    size: 1,
    align: 'right',
  },
  {
    label: '',
    slug: 'last24HoursPercentChange',
    size: '80px',
    align: 'right',
  },
]);

const sortBy = ref(null);

const sortDirection = ref(SortDirection.ASC);

const computedRecords = computed<PairsTableRecord[]>(
  () => props.pairs.map((pair: Pair) => ({
    id: pair.id,
    data: {
      common: {
        isFavorite: marketStore.favoritePairs.some((favoritePair) => favoritePair.pair === pair.id),
        pairId: pair.id,
        base: pair.base,
        quote: pair.quote,
      },
      priceAndVolume: {
        currentPrice: chartDataStore.getCurrentPriceByPairId(pair.id),
        totalTrades: humanizeNumber(pair.total_trades),
      },
      last24HoursPercentChange: chartDataStore.get24HoursPercentChangeByPairId(pair.id),
    },
  })),
);

const onRecordClick = (record: PairsTableRecord) => {
  emit('selectPair', record.id as Pair['id']);
};

const onToggleFavorite = (
  pairId: Pair['id'],
) => {
  emit('toggleFavorite', pairId);
};
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.columnPairsLabel {
  display: flex;
  align-items: center;
  .text {
    margin-left: 5px;
  }
}

.currencyLogo {
  margin-left: 10px;
}

.pairName {
  margin-left: 10px;
}

.addToFavorites {
  color: rgb(var(--color-accent-2));
  transition: color 200ms;
  cursor: pointer;
  &:hover {
    color: rgb(var(--color-accent-1));
  }
}

.base {
  @include title3;
  font-weight: 600;
}

.quote {
  @include title7;
  color: rgb(var(--color-accent-2));
}

.statsContainer {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2px;
}

.price {
  @include title5;
  color: rgb(var(--color-accent-1));
  text-align: right;
}

.volume {
  @include title5;
  color: rgb(var(--color-accent-2));
  text-align: right;
  line-height: 100%;
}

.currentPriceSkeleton {
  height: 10px;
  opacity: 0.15;
  margin: 2px;
  border-radius: 3px;
}

.skeletonBadge {
  opacity: 0.15;
}
</style>

<style lang="scss">
.favoriteStarTransition {
  &-enter-active,
  &-leave-active {
    transition: transform 180ms, opacity 180ms;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scale(0.6);
  }
}
</style>
