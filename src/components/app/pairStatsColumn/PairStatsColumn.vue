<template>
  <div :class="$style.pairStatsColumn">
    <div :class="$style.column">
      <div
        v-for="(pairStat, index) in columnData"
        :key="index"
        :class="$style.label"
      >
        {{ pairStat.label }}
      </div>
    </div>
    <Divider />
    <div :class="$style.column">
      <Typography
        v-for="(pairStat, index) in columnData"
        :key="index"
        size="title3"
        :state="calculateValueState(pairStat)"
      >
        <AnimatedText
          v-if="pairStat.value"
          :text="pairStat.value"
          animation-type="verticalAuto"
        >
          <template #default="{ value }">
            {{ value }}
            <template v-if="pairStat.appendText">
              {{ pairStat.appendText }}
            </template>
          </template>
        </AnimatedText>
        <Typography v-else>
          {{ '-' }}
        </Typography>
      </Typography>
    </div>
  </div>
</template>

<script setup lang="ts">
import Divider from '@/components/core/divider/Divider.vue';
import AnimatedText from '@/components/core/animatedText/AnimatedText.vue';
import Typography from '@/components/app/typography/Typography.vue';
import { isPositive } from '@/helpers/number';
import { TypographyProps } from '@/components/app/typography';
import { PairStat, PairStatsColumnProps } from './index';

const props = defineProps<PairStatsColumnProps>();

const calculateValueState = (
  pairStat: PairStat,
): TypographyProps['state'] => [
  // default
  'accent2',
  'bold',

  // calculated
  ...(
    (pairStat.valueState === 'auto' && typeof pairStat.value === 'number')
      ? [
        isPositive(pairStat.value)
          ? 'success'
          : 'danger',
      ]
      : []
  ),
  pairStat.valueState === 'positive' && 'success',
  pairStat.valueState === 'negative' && 'danger',
] as TypographyProps['state'];
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.pairStatsColumn {
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
