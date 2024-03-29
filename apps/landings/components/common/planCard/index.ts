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
    value: number | string,
    period?: string,
  },
  trialLink?: string | RouteLocationRaw,
  purchaseButton?: string,
  subscribeLink?: string | RouteLocationRaw,
}

export interface PlanCardProps {
  state: 'purple' | 'orange' | 'blue'
  card: LandingPlan,
}

export interface PlanCardEmits {
  (e: 'clickSubscribe'): void,
  (e: 'clickPurchase'): void,
}
