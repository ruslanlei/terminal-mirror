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
    <div :class="$style.amountOfOrders">
      <div :class="[$style.label2, $style.amountOfOrdersLabel]">
        <slot name="amountOfOrdersLabel" />
      </div>
      <div>
        <slot name="amountOfOrdersInput" />
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

.label2 {
  @include title3;
  font-weight: 500;
  color: rgb(var(--color-accent-1));
}

.profit {
  display: flex;
  justify-content: space-between;
}

.amountOfOrdersLabel {
  max-width: 100px;
}

.amountOfOrders {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  margin-top: 20px;
  align-items: center;
}
</style>
