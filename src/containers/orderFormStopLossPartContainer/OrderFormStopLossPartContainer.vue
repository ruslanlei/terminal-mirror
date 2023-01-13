<template>
  <div :class="$style.orderFormStopLossPartContainer">
    <div :class="$style.stopLoss">
      <div :class="$style.stopLossLabel">
        <slot name="stopLossLabel" />
      </div>
      <div :class="$style.stopLossSwitch">
        <slot name="stopLossSwitch" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "src/assets/styles/utils";

.orderFormStopLossPartContainer {
  padding: 0 22px 22px 22px;
  height: 100%;
}

.stopLoss {
  display: flex;
  justify-content: space-between;
}

.stopLossLabel {
  @include title2;
  font-weight: 600;
  color: rgb(var(--color-accent-1));
}

.stopLossSwitch {}
</style>
