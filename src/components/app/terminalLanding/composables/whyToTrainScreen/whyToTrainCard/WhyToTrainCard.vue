<template>
  <Card
    state="background3"
    :class="$style.whyToTrainCard"
  >
    <Typography state="accent1">
      {{ card.text }}
    </Typography>
  </Card>
</template>

<script setup lang="ts">
import Card from '@/components/core/card/Card.vue';
import Typography from '@/components/app/typography/Typography.vue';
import { WhyToTrainCardProps } from './index';

const props = defineProps<WhyToTrainCardProps>();
</script>

<style lang="scss" module>
.whyToTrainCard {
  padding: 50px 40px 40px 40px;
  border-radius: 15px;
}
</style>
