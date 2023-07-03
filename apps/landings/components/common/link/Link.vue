<template>
  <Component
    :is="computedComponent"
    :to="to"
    :href="to"
    :class="[
      $style.link,
      $style[state],
      $style[size],
      isInline && $style.inline,
    ]"
    :tabindex="tabIndex"
  >
    <slot>
      {{ label }}
    </slot>
  </Component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { LinkProps } from './index';
import { NuxtLink } from '#components';

const props = withDefaults(
  defineProps<LinkProps>(),
  {
    state: 'default',
    size: 'md',
    tabIndex: 0,
    isInline: false,
  },
);

const isExternal = computed(() => typeof props.to === 'string');

const computedComponent = computed(() => (isExternal.value || !props.to ? 'a' : NuxtLink));
</script>

<style lang="scss" module>
@import "@terminal/uikit/assets/styles/utils";

.link {
  cursor: pointer;
  display: block;
}

.inline {
  display: inline;
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
