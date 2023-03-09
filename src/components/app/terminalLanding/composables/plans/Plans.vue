<template>
  <div :class="$style.plans">
    <Typography
      :state="['accent1', 'bold', 'alignCenter']"
      size="massive2"
    >
      {{ t('terminalLanding.plans.label') }}
    </Typography>
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
import { uuid } from '@/utils/uuid';
import { useI18n } from 'vue-i18n';
import Typography from '@/components/app/typography/Typography.vue';
import PlansCard from '@/components/core/planCard/PlanCard.vue';
import { TerminalPlan, PlanCardProps } from '@/components/core/planCard';

const { t } = useI18n();

const cards = computed<{
  id: string,
  state: PlanCardProps['state'],
  card: TerminalPlan,
}[]>(() => ([
  {
    id: uuid(),
    state: 'purple',
    card: {
      headerText: {
        textLg: t('terminalLanding.plans.card.headerText'),
      },
      name: t('terminalLanding.plans.list.singlePackage'),
      benefits: [
        {
          label: t('terminalLanding.plans.card.benefits.accessToEmulator'),
          active: true,
        },
        {
          label: t('terminalLanding.plans.card.benefits.accessToRealMarket'),
          active: true,
        },
        {
          label: t('terminalLanding.plans.card.benefits.propGroups'),
          active: false,
        },
        {
          label: t('terminalLanding.plans.card.benefits.trainingGroupsForTenPeople'),
          active: false,
        },
      ],
      price: {
        value: 890,
        withoutSale: 1430,
      },
    },
  },
  {
    id: uuid(),
    state: 'orange',
    card: {
      headerText: {
        textLg: t('terminalLanding.plans.card.headerText'),
      },
      name: t('terminalLanding.plans.list.propGroups'),
      benefits: [
        {
          label: t('terminalLanding.plans.card.benefits.accessToEmulator'),
          active: true,
        },
        {
          label: t('terminalLanding.plans.card.benefits.accessToRealMarket'),
          active: true,
        },
        {
          label: t('terminalLanding.plans.card.benefits.propGroups'),
          active: true,
        },
        {
          label: t('terminalLanding.plans.card.benefits.trainingGroupsForTenPeople'),
          active: false,
        },
      ],
      price: {
        value: 2980,
        withoutSale: 3440,
      },
    },
  },
  {
    id: uuid(),
    state: 'blue',
    card: {
      headerText: {
        textLg: t('terminalLanding.plans.card.headerText'),
      },
      name: t('terminalLanding.plans.list.trainingPackage'),
      benefits: [
        {
          label: t('terminalLanding.plans.card.benefits.accessToEmulator'),
          active: true,
        },
        {
          label: t('terminalLanding.plans.card.benefits.accessToRealMarket'),
          active: true,
        },
        {
          label: t('terminalLanding.plans.card.benefits.propGroups'),
          active: false,
        },
        {
          label: t('terminalLanding.plans.card.benefits.trainingGroupsForTenPeople'),
          active: true,
        },
      ],
      price: {
        value: 2165,
        withoutSale: 2990,
      },
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
