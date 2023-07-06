<template>
  <UiLink
    internal-link-component="RouterLink"
    v-bind="props"
  >
    <slot>
      {{ label }}
    </slot>
  </UiLink>
</template>

<script setup lang="ts">
import { UiLink, UiLinkProps } from '@terminal/uikit/components/link';

const props = defineProps<Omit<UiLinkProps, 'internalLinkComponent'>>();
</script>
