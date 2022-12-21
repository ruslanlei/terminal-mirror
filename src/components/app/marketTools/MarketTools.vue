<template>
  <Card
    :class="$style.marketTools"
    state="background2"
  />
</template>

<script setup lang="ts">
import Card from '@/components/core/card/Card.vue';
</script>

<style lang="scss" module>
.marketTools {
  height: 100%;
  border-radius: 5px;
  background-color: rgba(var(--color-background-2));
}
</style>
