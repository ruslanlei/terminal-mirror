<template>
  <EcosystemCap :class="$style.cap" />
</template>

<script setup lang="ts">
import EcosystemCap from '~/components/common/ecosystemCap/EcosystemCap.vue';
</script>

<style lang="scss" module>
.cap {
  height: 100vh;
}
</style>
