<template>
  <div :class="$style.marketStatisticsContainer">
    <Card :class="$style.card">
      <div>
        <slot name="monthResult" />
      </div>
      <div :class="$style.chartContainer">
        <slot name="chart" />
      </div>
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
