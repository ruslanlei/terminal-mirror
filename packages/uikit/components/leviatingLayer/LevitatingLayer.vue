<template>
  <div
    :id="teleportTargets.LEVITATING"
    :class="$style.root"
    :style="{
      zIndex: layerZIndex.LEVITATING_LAYER,
    }"
  />
</template>

<script setup lang="ts">
import { teleportTargets } from '../../enums/teleport';
import { layerZIndex } from '../../enums';
</script>

<style lang="scss" module>
.root {
  position: fixed;
  inset: 0;
  pointer-events: none;
  * {
    pointer-events: all;
  }
}
</style>
