import { RouteLocationRaw } from 'vue-router';

export interface LandingPlan {
  headerText: {
    h1?: string,
    textLg?: string,
    text?: string,
  },
  salePercents?: number,
  additionalBenefits?: string[],
  name: string,
  benefits: {
    label: string,
    active: boolean,
  }[],
  placesAmount?: number,
  price: {
    value: number,
    withoutSale: number,
  },
  trialLink: RouteLocationRaw,
  subscribeLink: RouteLocationRaw,
}

export interface PlanCardProps {
  state: 'purple' | 'orange' | 'blue'
  card: LandingPlan,
}
