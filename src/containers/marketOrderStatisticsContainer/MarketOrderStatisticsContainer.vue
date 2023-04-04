<template>
  <div :class="$style.marketStatisticsContainer">
    <Card :class="$style.card">
      <Card
        state="background3"
        :class="$style.primaryCard"
      >
        <Typography
          :state="['accent1', 'bold']"
          size="massive2sm"
        >
          <slot name="commonAmountOfOrders" />
        </Typography>
        <Typography
          size="title1"
          :state="['accent1', 'semiBold']"
        >
          <slot name="commonAmountOfOrdersLabel" />
        </Typography>
      </Card>
      <Card
        state="background3"
        :class="$style.primaryCard"
      >
        <Typography
          :state="['success', 'bold']"
          size="massive2sm"
        >
          <slot name="successRate" />
        </Typography>
        <Typography
          size="title1"
          :state="['accent1', 'semiBold']"
        >
          <slot name="successRateLabel" />
        </Typography>
      </Card>
    </Card>
    <Card :class="$style.card">
      <div>
        <slot name="commonResult" />
      </div>
      <div>
        <slot name="dayResult" />
      </div>
      <div>
        <slot name="weekResult" />
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/core/card/Card.vue';
import Typography from '@/components/app/typography/Typography.vue';
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
