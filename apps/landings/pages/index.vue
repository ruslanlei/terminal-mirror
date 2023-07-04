<template>
  <EcosystemCap :class="$style.cap" />
</template>

<script setup lang="ts">
import EcosystemCap from '~/components/common/ecosystemCap/EcosystemCap.vue';
import { useHead } from '#imports';

useHead(() => ({
  link: [{
    rel: 'icon',
    type: 'image/x-icon',
    href: '/favicon.ico',
  }],
}));
</script>

<style lang="scss" module>
.cap {
  height: 100vh;
}
</style>
