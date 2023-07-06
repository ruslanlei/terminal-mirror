<template>
  <Card
    :class="$style.tooltip"
    state="accent3Transparent"
  >
    <slot>
      <Typography
        size="title4"
        :state="['semiBold', 'accent1']"
      >
        {{ text }}
      </Typography>
    </slot>
  </Card>
</template>

<script setup lang="ts">
import Typography from '../typography/Typography.vue';
import Card from '../card/Card.vue';
import { TooltipProps } from './index';

defineProps<TooltipProps>();
</script>

<style lang="scss" module>
.tooltip {
  padding: 10px 15px;
}
</style>
