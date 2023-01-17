<template>
  <Table
    v-model:sort-by="sortBy"
    v-model:sort-direction="sortDirection"
    :columns="columns"
    :records="computedRecords"
    :state="state"
    :is-rows-clickable="true"
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
    <template #cell(pairs)="{ data: { base, quote } }">
      <button
        type="button"
        :class="$style.addToFavorites"
      >
        <Icon
          :size="24"
          icon="star"
        />
      </button>
      <CurrencyLogo
        :currency="base"
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
    <template #cell(priceAndVolume)="{ data: { totalTrades } }">
      <div>
        <div :class="$style.price">
          {{ totalTrades }}
        </div>
        <div :class="$style.volume">
          {{ totalTrades }}
        </div>
      </div>
    </template>
  </Table>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Table from '@/components/core/table/Table.vue';
import TrendingIcon from '@/components/core/trendingIcon/TrendingIcon.vue';
import CurrencyLogo from '@/components/core/currencyLogo/CurrencyLogo.vue';
import Icon from '@/components/core/icon/Icon.vue';
import {
  PairsTableColumn, PairsTableEmits,
  PairsTableProps,
  PairsTableRecord,
} from '@/components/app/pairsTable/index';
import { SortDirection } from '@/components/core/table';
import { humanizeNumber } from '@/utils/number';
import { Pair } from '@/api/types/pair';

const props = defineProps<PairsTableProps>();

const emit = defineEmits<PairsTableEmits>();

const { t } = useI18n();

const columns = computed<PairsTableColumn[]>(() => [
  {
    label: t('pairs.table.pairs'),
    slug: 'pairs',
    sortable: true,
    size: 1,
  },
  {
    label: t('pairs.table.priceAndVolume'),
    slug: 'priceAndVolume',
    size: 1,
    align: 'right',
  },
]);

const sortBy = ref(null);

const sortDirection = ref(SortDirection.ASC);

const computedRecords = computed<PairsTableRecord[]>(
  () => props.pairs.map((pair: Pair) => ({
    id: pair.id,
    data: {
      pairs: {
        base: pair.base,
        quote: pair.quote,
      },
      priceAndVolume: {
        totalTrades: humanizeNumber(pair.total_trades),
      },
    },
  })),
);

const onRecordClick = (id: Pair['id']) => {
  emit('selectPair', id);
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

.price {
  @include title5;
  color: rgb(var(--color-accent-1));
  text-align: right;
}

.volume {
  @include title5;
  color: rgb(var(--color-accent-2));
  text-align: right;
}
</style>
