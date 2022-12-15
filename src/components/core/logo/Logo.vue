<template>
  <div :class="[$style.wrapper, $style[size]]">
    <LogoFull
      v-if="type === 'full'"
      :class="$style.logoFull"
    />
  </div>
</template>

<script setup lang="ts">
import { LogoProps } from '@/components/core/logo/index';
import LogoFull from './assets/logoFull.svg';

withDefaults(
  defineProps<LogoProps>(),
  {
    type: 'full',
    size: 'md',
  },
);
</script>

<style lang="scss" module>
.wrapper {
  &.md {
    .logoFull {
      width: 173px;
    }
  }
}

.logoFull {}
</style>
