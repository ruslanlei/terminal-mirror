<template>
  <div :class="$style.root">
    <Header :class="$style.header" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/app/header/Header.vue';
</script>

<style lang="scss" module>
.root {}

.header {
  position: sticky;
  top: 0;
}
</style>
