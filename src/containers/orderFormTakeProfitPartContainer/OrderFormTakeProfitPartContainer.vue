<template>
  <div :class="$style.orderFormTakeProfitPartContainer">
    <div :class="$style.profit">
      <div :class="$style.label">
        <slot name="profit" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" module>
@import "@/assets/styles/utils";

.orderFormTakeProfitPartContainer {
  padding: 0 22px;
}

.label {
  @include title2;
  font-weight: 600;
  color: rgb(var(--color-accent-1));
}

.profit {}
</style>
