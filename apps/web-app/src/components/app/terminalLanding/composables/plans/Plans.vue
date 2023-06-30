<template>
  <div :class="$style.plans">
    <UiTypography
      :state="['accent1', 'bold', 'alignCenter']"
      size="massive2"
    >
      {{ t('terminalLanding.plans.label') }}
    </UiTypography>
    <div :class="$style.cards">
      <PlansCard
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
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { uuid } from '@terminal/common/utils/uuid';
import { UiTypography } from '@terminal/uikit/components/typography';

import PlansCard from '@/components/core/planCard/PlanCard.vue';
import { LandingPlan, PlanCardProps } from '@/components/core/planCard';

const { t } = useI18n();

const cards = computed<{
  id: string,
  state: PlanCardProps['state'],
  card: LandingPlan,
}[]>(() => ([
  {
    id: uuid(),
    state: 'purple',
    card: {
      headerText: {
        textLg: t('terminalLanding.plans.headerText'),
      },
      name: t('terminalLanding.plans.list.singlePackage.label'),
      benefits: [
        {
          label: t('terminalLanding.plans.benefits.accessToEmulator'),
          active: true,
        },
        // {
        //   label: t('terminalLanding.plans.benefits.accessToRealMarket'),
        //   active: true,
        // },
        {
          label: t('terminalLanding.plans.benefits.propGroups'),
          active: false,
        },
        {
          label: t('terminalLanding.plans.benefits.trainingGroupsForTenPeople'),
          active: false,
        },
      ],
      price: {
        value: t('terminalLanding.plans.list.singlePackage.price'),
        period: t('dateTime.unit.month'),
      },
      subscribeLink: { name: 'auth-sign-up' },
      trialLink: { name: 'auth-sign-up' },
    },
  },
]));
</script>

<style lang="scss" module>
.plans {}

.cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;
}

.card {
  max-width: 400px;
}
</style>
