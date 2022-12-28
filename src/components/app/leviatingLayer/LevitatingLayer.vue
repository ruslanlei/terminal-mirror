<template>
  <div
    :id="teleportTargets.LEVITATING"
    :class="$style.root"
  />
</template>

<script setup lang="ts">
import { teleportTargets } from '@/enums/teleport';
</script>

<style lang="scss" module>
.root {
  pointer-events: none;
  * {
    pointer-events: all;
  }
}
</style>
