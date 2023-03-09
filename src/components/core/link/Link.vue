<template>
  <Component
    :is="isExternal ? 'a' : 'RouterLink'"
    :to="to"
    :href="to"
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
  </Component>
</template>

<script setup lang="ts">
import { LinkProps } from '@/components/core/link/index';
import { computed } from 'vue';

const props = withDefaults(
  defineProps<LinkProps>(),
  {
    state: 'default',
    size: 'md',
    tabIndex: 0,
  },
);

const isExternal = computed(() => typeof props.to === 'string');
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.link {
  cursor: pointer;
  display: block;
}

.default, .accent1 {
  color: rgba(var(--color-accent-1));
}

.accent2 {
  color: rgba(var(--color-accent-2));
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
