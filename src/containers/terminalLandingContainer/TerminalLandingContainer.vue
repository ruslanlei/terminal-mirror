<template>
  <div :class="$style.terminalLandingContainer">
    <div :class="$style.header">
      <slot name="header" />
    </div>
    <div :class="$style.content">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" module>
.terminalLandingContainer {
  height: 3000px; // temporary
}

.header {
  position: fixed;
  top: 0;
}

.content {}
</style>
