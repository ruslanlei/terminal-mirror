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
  price: {
    value: number,
    withoutSale: number,
  },
  trialLink?: RouteLocationRaw,
  subscribeLink?: RouteLocationRaw,
  hasTrial?: boolean,
}

export interface PlanCardProps {
  state: 'purple' | 'orange' | 'blue'
  card: LandingPlan,
}

export interface PlanCardEmits {
  (e: 'clickSubscribe'): void,
}
