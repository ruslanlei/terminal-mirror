<template>
  <div :class="$style.marketStatisticsContainer">
    <UiCard :class="$style.card">
      <UiCard
        state="background3"
        :class="$style.primaryCard"
      >
        <UiTypography
          :state="['accent1', 'bold']"
          size="massive2sm"
        >
          <slot name="commonAmountOfOrders" />
        </UiTypography>
        <UiTypography
          size="title1"
          :state="['accent1', 'semiBold']"
        >
          <slot name="commonAmountOfOrdersLabel" />
        </UiTypography>
      </UiCard>
      <UiCard
        state="background3"
        :class="$style.primaryCard"
      >
        <UiTypography
          state="bold"
          size="massive2sm"
        >
          <slot name="successRate" />
        </UiTypography>
        <UiTypography
          size="title1"
          :state="['accent1', 'semiBold']"
        >
          <slot name="successRateLabel" />
        </UiTypography>
      </UiCard>
    </UiCard>
    <UiCard :class="$style.card">
      <div>
        <slot name="successOrders" />
      </div>
      <div>
        <slot name="unsuccessfulOrders" />
      </div>
      <div>
        <slot name="ordersTurnover" />
      </div>
    </UiCard>
  </div>
</template>

<script setup lang="ts">
import { UiCard } from '@terminal/uikit/components/card';
import { UiTypography } from '@terminal/uikit/components/typography';
</script>

<style lang="scss" module>
.marketStatisticsContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  min-height: 225px;
}

.card {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  & > * {
    flex-grow: 1;
  }
}

.primaryCard {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-radius: 5px;
}

.chartContainer {
  margin: 0 -20px;
  position: relative;
  height: 88px;
  & > * {
    position: absolute;
    inset: 0;
  }
}
</style>
