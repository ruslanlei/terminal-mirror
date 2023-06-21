<template>
  <div :class="$style.appPreloader">
    <Logo size="lg" />
    <Loader :class="$style.loader" />
  </div>
</template>

<script setup lang="ts">
import Logo from '@/components/core/logo/Logo.vue';
import Loader from '@/components/core/loader/Loader.vue';
</script>

<style lang="scss" module>
.appPreloader {
  background-color: rgb(var(--color-background-2));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loader {
  margin-top: 20px;
}
</style>
