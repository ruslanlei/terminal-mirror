<template>
  <div :class="$style.root">
    <div :class="$style.header">
      <Header />
    </div>
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
  background-color: rgb(var(--color-background-1));
  z-index: 2;
}
</style>
