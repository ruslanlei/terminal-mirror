<template>
  <div
    :style="computedContainerStyles"
    :class="$style.pairStatsColumn"
  >
    <div
      ref="wrapper"
      :class="$style.wrapper"
    >
      <div :class="$style.column">
        <div
          v-for="(pairStat, index) in columnData"
          :key="index"
          :class="$style.label"
        >
          {{ pairStat.label }}
        </div>
      </div>
      <UiDivider />
      <div
        ref="valueColumn"
        :class="$style.column"
      >
        <UiTypography
          v-for="(pairStat, index) in columnData"
          :key="index"
          size="title3"
          :state="calculateValueState(pairStat)"
        >
          <UiAnimatedText
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
          </UiAnimatedText>
          <UiTypography v-else>
            {{ '-' }}
          </UiTypography>
        </UiTypography>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useResizeObserver } from '@vueuse/core';
import { UiAnimatedText } from '@terminal/uikit/components/animatedText';
import { UiDivider } from '@terminal/uikit/components/divider';
import { UiTypography, TypographyProps } from '@terminal/uikit/components/typography';
import { isPositive, roundToDecimalPlaces } from '@terminal/common/utils/number';
import { toCssPxValue } from '@terminal/uikit/utils/style';
import { getRect } from '@terminal/uikit/utils/dom';
import { PairStat, PairStatsColumnProps } from './index';

const props = defineProps<PairStatsColumnProps>();

const wrapper = ref();
const valueColumn = ref();

const calculateValueState = (
  pairStat: PairStat,
): TypographyProps['state'] => [
  // default
  'accent2',
  'bold',
  'nowrap',

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

const computedContainerStyles = ref({
  width: 'auto',
  height: 'auto',
});

const setContainerWidth = () => {
  const {
    width,
    height,
  } = getRect(wrapper.value);

  computedContainerStyles.value = {
    width: toCssPxValue(
      roundToDecimalPlaces(2, width),
    ),
    height: toCssPxValue(
      roundToDecimalPlaces(2, height),
    ),
  };
};

useResizeObserver(valueColumn, setContainerWidth);
onMounted(setContainerWidth);
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.pairStatsColumn {
  transition: width 200ms;
  position: relative;
  display: flex;
  justify-content: center;
}

.wrapper {
  display: flex;
  gap: 10px;
  position: absolute;
  top: 0;
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
