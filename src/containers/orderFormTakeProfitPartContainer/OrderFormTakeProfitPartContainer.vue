<template>
  <div :class="$style.orderFormTakeProfitPartContainer">
    <div :class="$style.profit">
      <div :class="$style.label">
        <slot name="profit" />
      </div>
      <div>
        <slot name="profitSwitch" />
      </div>
    </div>
    <div :class="$style.takeProfitsList">
      <slot name="takeProfitsList" />
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

.label2 {
  @include title3;
  font-weight: 500;
  color: rgb(var(--color-accent-1));
}

.profit {
  display: flex;
  justify-content: space-between;
}

.takeProfitsList {
  margin-top: 20px;
}
</style>
