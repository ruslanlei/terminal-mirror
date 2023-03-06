<template>
  <Card
    state="background3"
    :class="$style.whyToTrainCard"
  >
    <div :class="$style.index">
      <Typography
        size="massive4"
        :state="['accent1', 'bold']"
      >
        {{ card.index }}
      </Typography>
    </div>
    <Typography
      :class="$style.text"
      :state="['alignCenter', 'accent1']"
    >
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.index {
  position: absolute;
  top: 0;
  background: var(--color-main-gradient);
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 5px solid rgb(var(--color-background-1));
  transform: translateY(-50%);
}

.text {
  line-height: 160%;
}
</style>
