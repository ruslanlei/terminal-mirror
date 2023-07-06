<template>
  <UiLink
    :internal-link-component="NuxtLink"
    v-bind="props"
  >
    <slot>
      {{ label }}
    </slot>
  </UiLink>
</template>

<script setup lang="ts">
import { UiLink, UiLinkProps } from '@terminal/uikit/components/link';
import { NuxtLink } from '#components';

const props = defineProps<Omit<UiLinkProps, 'internalLinkComponent'>>();
</script>
