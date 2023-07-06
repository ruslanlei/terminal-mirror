<template>
  <div :class="$style.ordersAndStatisticsContainer">
    <div :class="$style.header">
      <div>
        <slot name="mainTabSelect" />
      </div>
      <div :class="$style.additionalTab">
        <slot name="additionalTabSelect" />
      </div>
    </div>
    <div :class="$style.content">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" module>
.ordersAndStatisticsContainer {
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.additionalTab {}

.content {
  flex-grow: 1;
  display: flex;
  padding-top: 20px;
  & > * {
    width: 100%;
  }
}
</style>
