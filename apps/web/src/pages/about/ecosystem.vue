<template>
  <EcosystemCap :class="$style.cap" />
</template>

<route lang="yaml">
meta:
  layout: blank
</route>

<script setup lang="ts">
import EcosystemCap from '@/components/ecosystemCap/EcosystemCap.vue';
</script>

<style lang="scss" module>
.cap {
  height: calc(var(--vh) * 100);
}
</style>
