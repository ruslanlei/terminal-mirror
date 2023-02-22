<template>
  <div :class="[$style.pairsSelectContainer, isBusy && $style.disabled]">
    <div :class="$style.search">
      <slot name="search" />
    </div>
    <div :class="$style.tableWrapper">
      <slot
        name="list"
        :table-class="$style.table"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PairsSelectContainerProps } from '@/containers/pairsSelectContainer/index';

const props = defineProps<PairsSelectContainerProps>();
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.pairsSelectContainer {
  padding: 22px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  @include transparentOnDisabled;
}

.tableWrapper {
  margin-top: 10px;
  position: relative;
  flex-grow: 1;
}

.table {
  position: absolute;
  inset: 0;
}
</style>
