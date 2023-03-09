<template>
  <div :class="$style.faq">
    <InlineDropdown>
      <template #trigger>
        trigger
      </template>
      <template #content>
        content
      </template>
    </InlineDropdown>
  </div>
</template>

<script setup lang="ts">
import InlineDropdown from '@/components/core/inlineDropdown/InlineDropdown.vue';
</script>

<style lang="scss" module>
.faq {}
</style>
