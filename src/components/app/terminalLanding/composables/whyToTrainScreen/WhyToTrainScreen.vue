<template>
  <div :class="$style.whyToTrainScreen">
    <WhyToTrainCardRow :cards="cards" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import WhyToTrainCard
  from '@/components/app/terminalLanding/composables/whyToTrainScreen/whyToTrainCard/WhyToTrainCard.vue';
import { IWhyToTrainCard } from '@/components/app/terminalLanding/composables/whyToTrainScreen/whyToTrainCard';
import WhyToTrainCardRow
  from '@/components/app/terminalLanding/composables/whyToTrainScreen/whyToTrainCardRow/WhyToTrainCardRow.vue';

const { t } = useI18n();

const cards = computed<IWhyToTrainCard[]>(() => [
  {
    index: 1,
    text: t('terminalLanding.whyToTrain.cards.0'),
  },
  {
    index: 2,
    text: t('terminalLanding.whyToTrain.cards.1'),
  },
]);
</script>

<style lang="scss" module>
.whyToTrainScreen {
  display: flex;
  justify-content: center;
}
</style>
