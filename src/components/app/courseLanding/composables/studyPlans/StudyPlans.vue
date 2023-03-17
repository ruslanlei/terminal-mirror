<template>
  <div :class="$style.studentsReviews">
    <Typography
      :state="['accent1', 'bold']"
      size="massive2"
    >
      {{ t('courseLanding.studyPlans.heading') }}
    </Typography>
    <div :class="$style.cards">
      <PlanCard
        v-for="{ id, card, state } in cards"
        :key="id"
        :card="card"
        :state="state"
        :class="$style.card"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Typography from '@/components/app/typography/Typography.vue';

import { computed } from 'vue';
import { uuid } from '@/utils/uuid';
import PlanCard from '@/components/core/planCard/PlanCard.vue';
import { LandingPlan, PlanCardProps } from '@/components/core/planCard';

const { t } = useI18n();

const cards = computed<{
  id: string,
  state: PlanCardProps['state'],
  card: LandingPlan,
}[]>(() => ([
  {
    id: uuid(),
    state: 'blue',
    card: {
      salePercents: 10,
      headerText: {
        h1: t('courseLanding.studyPlans.tariff.basicModules.studyTime'),
        text: t('courseLanding.studyPlans.card.studyTimeText'),
      },
      name: t('courseLanding.studyPlans.tariff.basicModules.heading'),
      benefits: [
        {
          label: t('courseLanding.studyPlans.card.planOptions.videoLessons1and2'),
          active: true,
        },
        {
          label: t('courseLanding.studyPlans.card.planOptions.videoLessons3'),
          active: false,
        },
        {
          label: t('courseLanding.studyPlans.card.planOptions.presentation'),
          active: true,
        },
        {
          label: t('courseLanding.studyPlans.card.planOptions.terminalAccess'),
          active: true,
        },
        {
          label: t('courseLanding.studyPlans.card.planOptions.currency'),
          active: true,
        },
        {
          label: t('courseLanding.studyPlans.card.planOptions.chatSupport'),
          active: false,
        },
        {
          label: t('courseLanding.studyPlans.card.planOptions.homework'),
          active: true,
        },
      ],
      placesQuantity: 25,
      price: {
        value: 25113,
        withoutSale: 30990,
      },
      purchaseButton: t('courseLanding.studyPlans.card.buyCourse'),
      placesAmount: 25,
    },
  },
  {
    id: uuid(),
    state: 'orange',
    card: {
      salePercents: 10,
      headerText: {
        h1: t('courseLanding.studyPlans.tariff.secretModule.studyTime'),
        text: t('courseLanding.studyPlans.card.studyTimeText'),
      },
      name: t('courseLanding.studyPlans.tariff.secretModule.heading'),
      extraBenefit: t('courseLanding.studyPlans.card.extraBenefit'),
      additionalBenefits: [
        t('courseLanding.studyPlans.tariff.secretModule.additionalBenefit'),
      ],
      benefits: [
        {
          label: t('courseLanding.studyPlans.card.planOptions.videoLessons1and2'),
          active: false,
        },
        {
          label: t('courseLanding.studyPlans.card.planOptions.videoLessons3'),
          active: true,
        },
        {
          label: t('courseLanding.studyPlans.card.planOptions.presentation'),
          active: true,
        },
        {
          label: t('courseLanding.studyPlans.card.planOptions.terminalAccess'),
          active: true,
        },
        {
          label: t('courseLanding.studyPlans.card.planOptions.currency'),
          active: true,
        },
        {
          label: t('courseLanding.studyPlans.card.planOptions.chatSupport'),
          active: false,
        },
        {
          label: t('courseLanding.studyPlans.card.planOptions.homework'),
          active: true,
        },
      ],
      placesQuantity: 25,
      price: {
        value: 19413,
        withoutSale: 28090,
      },
      purchaseButton: t('courseLanding.studyPlans.card.buyCourse'),
      placesAmount: 25,
    },
  },
  {
    id: uuid(),
    state: 'purple',
    card: {
      salePercents: 10,
      headerText: {
        h1: t('courseLanding.studyPlans.tariff.mentoring.studyTime'),
        text: t('courseLanding.studyPlans.card.studyTimeText'),
      },
      name: t('courseLanding.studyPlans.tariff.mentoring.heading'),
      benefits: [
        {
          label: t('courseLanding.studyPlans.card.planOptions.videoLessons1and2'),
          active: true,
        },
        {
          label: t('courseLanding.studyPlans.card.planOptions.videoLessons3'),
          active: true,
        },
        {
          label: t('courseLanding.studyPlans.card.planOptions.presentation'),
          active: true,
        },
        {
          label: t('courseLanding.studyPlans.card.planOptions.terminalAccess'),
          active: true,
        },
        {
          label: t('courseLanding.studyPlans.card.planOptions.currency'),
          active: true,
        },
        {
          label: t('courseLanding.studyPlans.card.planOptions.chatSupport'),
          active: true,
        },
        {
          label: t('courseLanding.studyPlans.card.planOptions.homework'),
          active: true,
        },
      ],
      placesQuantity: 25,
      price: {
        value: 36882,
        withoutSale: 42890,
      },
      purchaseButton: t('courseLanding.studyPlans.card.buyCourse'),
      placesAmount: 25,
    },
  },
]));
</script>

<style lang="scss" module>
.studentsReviews {
  height: 1280px;
  margin-top: 240px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.cards {
  width: 100%;
  max-width: 1240px;
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
</style>
