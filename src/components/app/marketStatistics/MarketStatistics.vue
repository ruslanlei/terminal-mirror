<template>
  <div :class="$style.marketStatistics">
    <Card>1</Card>
    <Card>2</Card>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/core/card/Card.vue';
</script>

<style lang="scss" module>
.marketStatistics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
</style>
