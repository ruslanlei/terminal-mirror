<template>
  <div :class="$style.appPreloader">
    <UiLogo size="lg" />
    <UiLoader :class="$style.loader" />
  </div>
</template>

<script setup lang="ts">
import { UiLoader } from '@terminal/uikit/components/loader';
import { UiLogo } from '@terminal/uikit/components/logo';
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
