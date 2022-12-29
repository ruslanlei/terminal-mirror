<template>
  <div :class="$style.orderFormContainer">
    <div :class="$style.orderDirection">
      <slot
        name="orderDirectionSelector"
        :select-option-class="$style.orderSideOption"
      />
    </div>
    <div :class="$style.tabsWrapper">
      <slot
        name="tabs"
        :tabs-class="$style.tabs"
        :tab-content-class="$style.tabsContent"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" module>
.orderFormContainer {
  height: 100%;
  padding: 22px 22px 0 22px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.orderDirection {}

.orderSideOption {
  display: flex;
  align-items: center;
  gap: 5px;
}

.tabsWrapper {
  margin-top: 22px;
  flex-grow: 1;
}

.tabs {
  height: 100%;
}

.tabsContent {
  margin: 22px -22px 0;
}
</style>
