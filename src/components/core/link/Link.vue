<template>
  <router-link
    :to="to"
    :class="[
      $style.link,
      $style[state],
      $style[size],
    ]"
    :tabindex="tabIndex"
  >
    <slot>
      {{ label }}
    </slot>
  </router-link>
</template>

<script setup lang="ts">
import { LinkProps } from '@/components/core/link/index';

withDefaults(
  defineProps<LinkProps>(),
  {
    state: 'default',
    size: 'md',
    tabIndex: 0,
  },
);
</script>

<style lang="scss" module>
@import "@/assets/styles/utils";

.link {
  cursor: pointer;
}

.default {
  color: rgba(var(--color-accent-1));
}

.primary {
  color: rgb(var(--color-primary-1));
}

.md {
  @include text;
  font-weight: 600;
}

.sm {
  @include textSm;
  font-weight: 500;
}
</style>
