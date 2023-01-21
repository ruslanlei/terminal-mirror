<template>
  <div :class="$style.ordersList">
    {{ listType }}
  </div>
</template>

<script setup lang="ts">
import { OrdersListProps } from './index';

const props = defineProps<OrdersListProps>();
</script>

<style lang="scss" module>
.ordersList {}
</style>
