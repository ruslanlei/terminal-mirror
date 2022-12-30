<template>
  <div :class="$style.pairsSelectContainer">
    <div :class="$style.search">
      <slot name="search" />
    </div>
    <div :class="$style.list">
      <slot name="list" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" module>
.pairsSelectContainer {
  padding: 22px;
}

.list {
  margin-top: 10px;
}
</style>
