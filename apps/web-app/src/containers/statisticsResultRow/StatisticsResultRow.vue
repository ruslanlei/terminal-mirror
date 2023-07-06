<template>
  <Card
    state="background3"
    :class="$style.statisticsResultRow"
  >
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
  </Card>
</template>

<script setup lang="ts">
import Card from '@/components/core/card/Card.vue';
</script>

<style lang="scss" module>
.statisticsResultRow {
  border-radius: 5px;
  padding: 14px;
  display: flex;
  justify-content: space-between;

  gap: 15px;

  align-items: center;
}

.primaryInfo {}

.secondaryInfo {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.primaryInfo, .secondaryInfo {
  flex-grow: 1;
}
</style>
