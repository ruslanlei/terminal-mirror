<template>
  <div :class="$style.orderFormTakeProfitPartContainer">
    <div :class="$style.inner">
      <div :class="$style.switch">
        <div :class="$style.label">
          <slot name="profit" />
        </div>
        <div>
          <slot name="profitSwitch" />
        </div>
      </div>
      <div :class="$style.amountOfOrders">
        <div :class="$style.label">
          <slot name="takeProfitsAmountLabel" />
        </div>
        <div>
          <slot name="takeProfitsAmountInput" />
        </div>
      </div>
      <div :class="$style.takeProfitsList">
        <slot name="takeProfitsList" />
      </div>
      <div :class="$style.ratio">
        <slot name="ratio" />
      </div>
      <div :class="$style.submitButtonWrapper">
        <slot
          name="submit"
          :button-class="$style.submitButton"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.orderFormTakeProfitPartContainer {
  padding: 0 12px 22px 12px;
  height: 100%;
}

.inner {
  height: 100%;
  padding: 0 10px;
  overflow-y: auto;
  @include scrollbarPrimary(4px, 6px, true);
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

.switch {
  display: flex;
  justify-content: space-between;
}

.amountOfOrders {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  .label {
    @include title3;
    color: rgb(var(--color-accent-1));
    font-weight: 500;
    max-width: 110px;
  }
}

.takeProfitsList {
  margin-top: 20px;
}

.ratio {
  margin-top: 20px;
}

.submitButtonWrapper {
  margin-top: 20px;
}

.submitButton {
  padding: 10px;
  @include title4;
  line-height: 20px;
}
</style>
