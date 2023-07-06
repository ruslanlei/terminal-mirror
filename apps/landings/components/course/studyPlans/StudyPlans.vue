<template>
  <div :class="$style.studentsReviews">
    <UiTypography
      :state="['accent1', 'bold']"
      size="massive2"
    >
      {{ t('courseLanding.studyPlans.heading') }}
    </UiTypography>
    <div :class="$style.cards">
      <PlanCard
        v-for="{ id, card, state } in cards"
        :key="id"
        :card="card"
        :state="state"
        :class="$style.card"
        @click-purchase="copyDiscordLink"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { UiTypography } from '@terminal/uikit/components/typography';
import { uuid } from '@terminal/common/utils/uuid';

import PlanCard from '~/components/common/planCard/PlanCard.vue';
import { LandingPlan, PlanCardProps } from '~/components/common/planCard';
import { useDiscordLink } from '~/hooks/useDiscordLink';

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
        value: t('courseLanding.studyPlans.tariff.basicModules.price'),
      },
      purchaseButton: t('courseLanding.studyPlans.card.buyCourse'),
      placesAmount: 25,
    },
  },
  {
    id: uuid(),
    state: 'orange',
    card: {
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
        value: t('courseLanding.studyPlans.tariff.secretModule.price'),
      },
      purchaseButton: t('courseLanding.studyPlans.card.buyCourse'),
      placesAmount: 25,
    },
  },
  {
    id: uuid(),
    state: 'purple',
    card: {
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
        value: t('courseLanding.studyPlans.tariff.mentoring.price'),
      },
      purchaseButton: t('courseLanding.studyPlans.card.buyCourse'),
      placesAmount: 25,
    },
  },
]));

const {
  copyDiscordLink,
} = useDiscordLink(
  t('discordLink.copiedForSubscribe'),
);
</script>

<style lang="scss" module>
.studentsReviews {
  margin-top: 200px;
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
