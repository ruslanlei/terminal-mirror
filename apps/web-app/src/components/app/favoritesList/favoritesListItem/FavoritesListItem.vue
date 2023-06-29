<template>
  <div :class="[$style.favoritesListItem, isActive && $style.active]">
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
      <UiCoinLogo :coin="pairData.base" />
      <transition
        name="favoritesListChangeTransition"
        mode="out-in"
      >
        <UiBadge
          v-if="props.last24HoursPercentChange !== null"
          :state="[
            isPositive(props.last24HoursPercentChange)
              ? 'success'
              : 'danger'
          ]"
          size="xs"
          :class="$style.pnlBadge"
        >
          {{ displayPercentChange }}
        </UiBadge>
        <div
          v-else
          :class="$style.percentChangeSkeleton"
        />
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { UiBadge } from '@terminal/uikit/components/badge';
import { UiCoinLogo } from '@terminal/uikit/components/coinLogo';
import Typography from '@/components/app/typography/Typography.vue';
import { humanizeNumber } from '@/utils/numberFormat';
import { humanizePercents } from '@/helpers/math/percents';
import { isPositive } from '@/utils/number';
import { FavoritesListItemProps } from './index';

const props = defineProps<FavoritesListItemProps>();

const displayPercentChange = computed(
  () => humanizePercents(props.last24HoursPercentChange || 0),
);
</script>

<style lang="scss" module>
.favoritesListItem {
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: rgba(var(--color-background-3), 0);
  transition: background-color 200ms;
  &:hover {
    &:not(.active) {
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
  align-items: center;
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
  height: 24px;
}

.percentChangeSkeleton {
  width: 42px;
  height: 24px;
  background-color: rgb(var(--color-background-3));
  border-radius: 5px;
}
</style>

<style lang="scss">
.favoritesListChangeTransition {
  &-enter-active,
  &-leave-active {
    transition: opacity 200ms, transform 200ms;
  }

  &-enter-from {
    transform: translateY(-10px);
    opacity: 0;
  }
  &-leave-to {
    transform: translateY(10px);
    opacity: 0;
  }
}
</style>
