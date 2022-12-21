<template>
  <Card
    :class="$style.orderSettings"
    state="background2"
  />
</template>

<script setup lang="ts">
import Card from '@/components/core/card/Card.vue';
</script>

<style lang="scss" module>
.orderSettings {
  height: 100%;
}
</style>
