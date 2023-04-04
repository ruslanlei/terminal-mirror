<template>
  <div :class="$style.statisticsResultRow">
    <div>
      <slot name="prepend" />
    </div>
    <div :class="$style.primaryInfo">
      <div>
        <slot name="primaryInfoTop" />
      </div>
      <div>
        <slot name="primaryInfoBottom" />
      </div>
    </div>
    <div :class="$style.secondaryInfo">
      <div>
        <slot name="secondaryInfoTop" />
      </div>
      <div>
        <slot name="secondaryInfoBottom" />
      </div>
    </div>
    <div>
      <slot name="append" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" module>
.statisticsResultRow {
  display: grid;

  $appendAndPrependColumnSize: minmax(28px, 1fr);
  grid-template-columns: $appendAndPrependColumnSize 1fr 1fr $appendAndPrependColumnSize;

  gap: 15px;

  align-items: center;
}

.primaryInfo {}

.secondaryInfo {}
</style>
