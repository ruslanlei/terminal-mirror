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
    <div :class="[$style.row, $style.exactPrice]">
      <div :class="$style.label">
        <slot name="exactPriceLabel" />
      </div>
      <div :class="$style.field">
        <slot name="exactPriceInput" />
      </div>
    </div>
    <div :class="[$style.row, $style.amountOfRisk]">
      <div :class="[$style.labelLarge, $style.thick]">
        <slot name="amountOfRiskLabel" />
      </div>
      <div :class="$style.field">
        <slot name="amountOfRiskInput" />
      </div>
    </div>
    <div :class="[$style.row, $style.percentOfOrder]">
      <div :class="[$style.label, $style.thick]">
        <slot name="percentOfOrderLabel" />
      </div>
      <div :class="$style.field">
        <slot name="percentOfOrderInput" />
      </div>
    </div>
    <div :class="[$style.row, $style.percentOfDeposit]">
      <div :class="[$style.label, $style.thick]">
        <slot name="percentOfDepositLabel" />
      </div>
      <div :class="$style.field">
        <slot name="percentOfDepositInput" />
      </div>
    </div>
    <div :class="$style.ratio">
      <slot name="ratio" />
    </div>
    <div :class="$style.submitWrapper">
      <slot
        name="submit"
        :button-class="$style.submitButton"
      />
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

.row {
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  align-items: center;
  .label, .labelLarge {
    color: rgb(var(--color-accent-1));
    font-weight: 500;
    &.thick {
      font-weight: 600;
    }
  }
  .label {
    @include title3;
  }
  .labelLarge {
    @include title2;
  }
  .field {}
}

.exactPrice, .amountOfRisk {
  margin-top: 20px;
}

.percentOfOrder, .percentOfDeposit {
  margin-top: 10px;
}

.submitWrapper {
  margin-top: 20px;
}

.submitButton {
  padding: 10px;
  @include title4;
  line-height: 20px;
}
</style>
