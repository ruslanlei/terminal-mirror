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
        <AnimatedText
          :text="currencyStat.value"
          animation-type="verticalBack"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Divider from '@/components/core/divider/Divider.vue';
import AnimatedText from '@/components/core/animatedText/AnimatedText.vue';
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
