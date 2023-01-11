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
    <div :class="$style.ratio">
      <div :class="$style.ratioLabel">
        <div :class="$style.ratioTip">
          <slot
            name="ratioTip"
            :tip-icon-class="$style.icon"
          />
        </div>
        <div :class="$style.ratioLabelText">
          <slot name="ratioLabel" />
        </div>
      </div>
      <div :class="$style.ratioValue">
        <slot name="ratio" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" module>
@import "src/assets/styles/utils";

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

.ratio {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.ratioTip {
  .icon {
    color: rgb(var(--color-danger-2));
  }
}

.ratioLabel {
  display: flex;
  color: rgb(var(--color-accent-1));
  @include title2;
  font-weight: 600;
}

.ratioLabelText {
  margin-left: 10px;
}

.ratioValue {
  padding: 2px 10px;
  background-color: rgb(var(--color-accent-3));
  color: rgb(var(--color-accent-1));
  border-radius: 12px;
  @include title5;
  font-weight: 600;
}
</style>
