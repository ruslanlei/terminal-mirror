<template>
  <div :class="$style.currencyStatsColumn">
    <div :class="$style.column">
      <div
        v-for="(currencyStat, index) in columnData"
        :key="index"
        :class="$style.label"
      >
        {{ currencyStat.label }}
      </div>
    </div>
    <Divider />
    <div :class="$style.column">
      <div
        v-for="(currencyStat, index) in columnData"
        :key="index"
        :class="[
          $style.value,
          $style[currencyStat.valueState],
        ]"
      >
        <transition
          name="valueAnimation"
          mode="out-in"
        >
          <span style="display: block" :key="currencyStat.value">
            {{ currencyStat.value }}
          </span>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Divider from '@/components/core/divider/Divider.vue';
import { CurrencyStatsColumnProps } from './index';

const props = defineProps<CurrencyStatsColumnProps>();
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.currencyStatsColumn {
  display: flex;
  gap: 10px;
}

.label {
  text-align: right;
  @include title4;
  color: rgb(var(--color-accent-2));
}

.column {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 18px;
  align-items: center;
  align-content: center;
}

.value {
  color: rgb(var(--color-accent-2));
  @include title3;
  font-weight: 600;
  &.positive {
    color: rgba(var(--color-success));
  }
  &.negative {
    color: rgba(var(--color-danger));
  }
}
</style>

<style lang="scss">
.valueAnimation {
  &-enter-active,
  &-leave-active {
    transition: transform 200ms, opacity 200ms;
  }

  &-enter-from, &-leave-to {
    opacity: 0;
  }

  &-enter-from {
    transform: translateX(-4px);
  }
  &-leave-to {
    transform: translateX(4px);
  }
}
</style>
