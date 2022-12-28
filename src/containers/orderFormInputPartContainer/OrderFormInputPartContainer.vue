<template>
  <div :class="$style.orderFormOrdersPartContainer">
    <div :class="$style.inputRow">
      <div :class="$style.inputLabel">
        <slot name="priceLabel" />
      </div>
      <div>
        <slot name="priceInput" />
      </div>
    </div>
    <div :class="$style.inputRow">
      <div :class="$style.inputLabel">
        <slot name="amountLabel" />
      </div>
      <div>
        <slot name="amountInput" />
      </div>
    </div>
    <div :class="$style.inputRow">
      <div :class="$style.inputLabel">
        <slot name="volumeLabel" />
      </div>
      <div>
        <slot name="volumeInput" />
      </div>
    </div>
    <div :class="[$style.label, $style.depositLabel]">
      <slot name="depositLabel" />
    </div>
    <div :class="$style.depositInput">
      <slot name="depositInput" />
    </div>
    <div :class="[$style.label, $style.leverageLabel]">
      <slot name="leverageLabel" />
    </div>
    <div :class="$style.leverageRow">
      <div>
        <slot name="leverageInput" />
      </div>
      <div :class="$style.leverageLiquidationPrice">
        <Icon
          :size="20"
          :class="$style.icon"
          icon="lock"
        />
        <div :class="$style.label">
          <slot name="leverageLiquidationPrice" />
        </div>
      </div>
      <div :class="$style.leveragePositionMargin">
        <Icon
          :size="20"
          :class="$style.icon"
          icon="fire"
        />
        <div :class="$style.label">
          <slot name="leveragePositionMargin" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/core/icon/Icon.vue';
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

.orderFormOrdersPartContainer {
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

.inputLabel {
  @include title3;
  font-weight: 500;
  color: rgb(var(--color-accent-1));
}

.label {
  @include title2;
  font-weight: 600;
  color: rgb(var(--color-accent-1));
}

.depositLabel {
  margin-top: 20px;
}

.depositInput {
  margin-top: 10px;
}

.leverageLabel {
  margin-top: 22px;
}

.leverageRow {
  display: grid;
  grid-template-columns: 65px 1.5fr 1fr;
  gap: 15px;
  align-items: center;
  margin-top: 10px;
}

.leverageLiquidationPrice,
.leveragePositionMargin {
  display: flex;
  align-items: center;
  .label {
    color: rgb(var(--color-accent-1));
    @include title4;
    margin-left: 5px;
    font-weight: 500;
  }
}

.leverageLiquidationPrice {
  .icon {
    color: rgb(var(--color-primary-1));
  }
}

.leveragePositionMargin {
  .icon {
    color: rgb(var(--color-danger));
  }
}
</style>
