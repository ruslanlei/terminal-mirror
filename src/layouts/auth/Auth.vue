<template>
  <div :class="$style.authLayout">
    <div :class="$style.content">
      <slot />
    </div>
    <AuthIllustration />
  </div>
</template>

<script setup lang="ts">
import AuthIllustration from '@/components/app/authIllustration/AuthIllustration.vue';
</script>

<style lang="scss" module>
.authLayout {
  display: grid;
  grid-template-columns: 540px 1fr;
}

.content {
  background-color: rgba(var(--color-background-3));
  padding: 84px 80px 40px 80px;
  & > * {
    height: 100%;
  }
}
</style>
