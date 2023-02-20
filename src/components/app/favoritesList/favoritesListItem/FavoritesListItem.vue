<template>
  <div :class="$style.favoritesListItem">
    <div :class="$style.info">
      <div :class="$style.coinNames">
        <Typography
          size="title7"
          :state="['semiBold']"
        >
          {{ pairData.base }}
        </Typography>
        <Typography
          size="title7"
          :state="['semiBold']"
        >
          {{ pairData.quote }}
        </Typography>
      </div>
      <Typography
        size="title7"
        state="accent2"
      >
        {{ humanizeNumber(pairData.total_trades) }}
      </Typography>
    </div>
    <div :class="$style.mainContent">
      <CoinLogo :coin="pairData.base" />
      <Badge
        :state="computedBadgeState"
        size="xs"
        :class="$style.pnlBadge"
      >
        {{ displayPercentChange }}
      </Badge>
    </div>
  </div>
</template>

<script setup lang="ts">
import CoinLogo from '@/components/core/coinLogo/CoinLogo.vue';
import Typography from '@/components/app/typography/Typography.vue';
import { humanizeNumber, percentFormat } from '@/utils/number';
import Badge from '@/components/core/badge/Badge.vue';
import { computed } from 'vue';
import { compose } from '@/utils/fp';
import { FavoritesListItemProps } from './index';
import { isPositive, roundToDecimalPoint } from '../../../../helpers/number';

const props = defineProps<FavoritesListItemProps>();

const displayPercentChange = computed(() => compose(
  percentFormat,
  roundToDecimalPoint(2),
)(props.last24HoursPercentChange || 0));

const computedBadgeState = computed(() => [
  props.last24HoursPercentChange == null
    ? 'default'
    : (
      isPositive(props.last24HoursPercentChange)
        ? 'success'
        : 'danger'
    ),
]);
</script>

<style lang="scss" module>
.favoritesListItem {
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: rgba(var(--color-background-3), 0);
  transition: background-color 200ms;
  &:hover {
    &:not(:active) {
      background-color: rgba(var(--color-background-3), 1);
      .mainContent {
        opacity: 0;
      }
      .info {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
}

.mainContent {
  padding: 10px 5px;
  display: flex;
  justify-content: center;
  gap: 10px;
  transition: 200ms opacity;
}

.coinNames {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.info {
  pointer-events: none;
  transform: translateX(-20%);
  transition: transform 200ms, opacity 200ms;
  position: absolute;
  inset: 0;
  z-index: 2;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.pnlBadge {
  color: rgb(var(--color-accent-1));
}
</style>
