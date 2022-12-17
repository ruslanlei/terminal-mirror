<template>
  <div :class="$style.header">
    <Logo size="sm" />
  </div>
</template>

<script setup lang="ts">
import Logo from '@/components/core/logo/Logo.vue';
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.header {
  padding: 30px 23px;
}
</style>
