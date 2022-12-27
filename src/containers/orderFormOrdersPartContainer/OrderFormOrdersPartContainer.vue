<template>
  <div :class="$style.orderFormOrdersPartContainer">
    <div :class="$style.orderSideSelector">
      <slot
        name="orderSideSelector"
        :order-side-option-class="$style.orderSideOption"
      />
    </div>
    <div :class="$style.additionalSettingsSelector">
      <slot name="additionalSettingsSelector" />
    </div>
    <div :class="$style.inputRow">
      <div :class="$style.label">
        <slot name="priceLabel" />
      </div>
      <div>
        <slot name="priceInput" />
      </div>
    </div>
    <div :class="$style.inputRow">
      <div :class="$style.label">
        <slot name="amountLabel" />
      </div>
      <div>
        <slot name="amountInput" />
      </div>
    </div>
    <div :class="$style.inputRow">
      <div :class="$style.label">
        <slot name="volumeLabel" />
      </div>
      <div>
        <slot name="volumeInput" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.orderFormOrdersPartContainer {
  padding: 22px;
}

.orderSideSelector {
}

.orderSideOption {
  display: flex;
  align-items: center;
  gap: 5px;
}

.additionalSettingsSelector {
  margin-top: 22px;
}

.inputRow {
  display: grid;
  grid-template-columns: 1fr 140px;
  margin-top: 22px;
  align-items: center;
  &:not(:first-child) {
    margin-top: 10px;
  }
}

.label {
  @include title2;
  font-weight: 500;
  color: rgb(var(--color-accent-1));
}
</style>
