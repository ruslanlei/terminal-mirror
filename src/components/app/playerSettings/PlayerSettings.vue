<template>
  <Card
    :class="$style.playerSettings"
    state="background3"
  />
</template>

<script setup lang="ts">
import Card from '@/components/core/card/Card.vue';
</script>

<style lang="scss" module>
.playerSettings {
  height: 100%;
}
</style>
