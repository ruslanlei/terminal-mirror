<template>
  <Card
    :class="$style.tooltip"
    state="accent3Transparent"
  >
    <slot>
      <Typography>
        {{ text }}
      </Typography>
    </slot>
  </Card>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Typography from '@/components/app/typography/Typography.vue';
import Card from '@/components/core/card/Card.vue';
import { TooltipProps } from './index';

defineProps<TooltipProps>();

const { t } = useI18n();
</script>

<style lang="scss" module>
.tooltip {
  padding: 10px 15px;
}
</style>
